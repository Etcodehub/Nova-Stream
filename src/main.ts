/**
 * NovaStream Commercial Web Application
 * Prime Video / Netflix-grade streaming interface orchestrating
 * Header, Cinema PlayerView, ChannelChooserModal with logos, HeroBanner, and Horizontal Channel Rails.
 */

import './style.css';
import { catalogManager } from './services/CatalogManager.ts';
import { NovaPlayer } from './player/NovaPlayer.ts';
import { Header } from './ui/Header.ts';
import { PlayerView } from './ui/PlayerView.ts';
import { ChannelChooserModal } from './ui/ChannelChooserModal.ts';
import { HeroBanner } from './ui/HeroBanner.ts';
import { ChannelGrid } from './ui/ChannelGrid.ts';
import type { Channel, PlayerPlaybackState } from './types/index.ts';

class NovaStreamApp {
  private player!: NovaPlayer;
  private header!: Header;
  private playerView!: PlayerView;
  private channelChooserModal!: ChannelChooserModal;
  private heroBanner!: HeroBanner;
  private channelGrid!: ChannelGrid;
  private channels: Channel[] = [];
  private activeChannel: Channel | null = null;

  public async bootstrap(): Promise<void> {
    console.info('[NovaStream] Initializing Prime-grade streaming experience...');

    // 1. Mount UI Component Shells
    this.mountComponents();

    // 2. Initialize Player Engine connected to PlayerView elements
    this.player = new NovaPlayer(
      this.playerView.getVideoElement(),
      'https://novastream-gateway.etcodehub.workers.dev',
      this.playerView.getIframeElement()
    );
    this.playerView.setPlayer(this.player);

    // 3. Connect Player State Listener to PlayerView
    this.player.subscribe((state: PlayerPlaybackState) => {
      this.playerView.updateState(state);
    });

    // 4. Load 0ms Instant Cache Once from IndexedDB
    const { channels: cachedChannels } = await catalogManager.loadInstantCache();
    this.channels = cachedChannels;

    // 5. Populate Channel Grid, Modal Chooser & Hero Banner
    this.channelGrid.setChannels(this.channels);
    this.channelChooserModal.setChannels(this.channels);

    // 6. Set featured hero channel and mount first stream
    if (this.channels.length > 0) {
      this.selectChannel(this.channels[0]);
    }

    // 7. Silent background revalidation (runs once if catalog was sparse)
    if (this.channels.length < 15) {
      setTimeout(() => {
        catalogManager
          .autoFetchAllProviders(this.channels)
          .then((updated) => {
            this.channels = updated;
            this.channelGrid.setChannels(this.channels, this.activeChannel?.id);
            this.channelChooserModal.setChannels(this.channels, this.activeChannel?.id);
          })
          .catch(console.error);
      }, 500);
    }
  }

  private mountComponents(): void {
    const headerRoot = document.getElementById('header-mount')!;
    const playerRoot = document.getElementById('player-mount')!;
    const heroRoot = document.getElementById('hero-mount')!;
    const catalogRoot = document.getElementById('catalog-mount')!;

    // Clean commercial Header (Home, Sport, All TV Channels)
    this.header = new Header(headerRoot, {
      onCategorySelect: (category) => {
        this.channelGrid.filterByCategory(category);
      },
      onSearch: (query) => {
        this.channelGrid.setSearchQuery(query);
      },
    });

    // Cinema-Grade Player View
    this.playerView = new PlayerView(playerRoot);

    // Interactive Channel Chooser Modal with Logos
    this.channelChooserModal = new ChannelChooserModal((channel) => {
      this.selectChannel(channel);
    });

    // Wire button to open modal
    this.playerView.setOnOpenChooser(() => {
      this.channelChooserModal.open();
    });

    // Hero Billboard Banner
    this.heroBanner = new HeroBanner(heroRoot, (channel) => {
      this.selectChannel(channel);
    });

    // Prime Video Style Horizontal Carousels (Sport, Movie, Kids on Home)
    this.channelGrid = new ChannelGrid(catalogRoot, (channel) => {
      this.selectChannel(channel);
    });
  }

  private selectChannel(channel: Channel): void {
    this.activeChannel = channel;
    this.header.setActiveCategory(channel.category);
    this.playerView.updateNowPlaying(channel);
    this.channelChooserModal.setActiveChannel(channel.id);
    this.channelGrid.setActiveChannel(channel.id);
    this.heroBanner.setFeaturedChannel(channel);
    this.player.loadChannel(channel);
  }
}

// Start application
const app = new NovaStreamApp();
app.bootstrap().catch(console.error);
