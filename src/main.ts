/**
 * NovaStream Commercial Web Application
 * Sleek Neumorphic Live Streaming UI matching zlive.st layout
 * Exclusive 277+ zlive.st channel directory with 0ms cache & instant playback.
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
    this.mountComponents();

    this.player = new NovaPlayer(
      this.playerView.getVideoElement(),
      'https://novastream-gateway.etcodehub.workers.dev',
      this.playerView.getIframeElement()
    );
    this.playerView.setPlayer(this.player);

    this.player.subscribe((state: PlayerPlaybackState) => {
      this.playerView.updateState(state);
    });

    // 1. 0ms Instant Cache (zlive.st only)
    const { channels: cachedChannels } = await catalogManager.loadInstantCache();
    this.channels = cachedChannels;

    this.channelGrid.setChannels(this.channels);
    this.channelChooserModal.setChannels(this.channels);
    this.playerView.setChannels(this.channels);

    const featured =
      this.channels.find((c) => c.id === 'auto-tnt-sports-1') ||
      this.channels.find((c) => c.isTop) ||
      this.channels[0];

    if (featured) {
      this.heroBanner.setFeaturedChannel(featured);
      this.channelChooserModal.setActiveChannel(featured.id);
    }

    // 2. Background sync from official zlive.st directory
    catalogManager
      .autoFetchAllProviders(this.channels)
      .then((updated) => {
        this.channels = updated;
        this.channelGrid.setChannels(this.channels, this.activeChannel?.id);
        this.channelChooserModal.setChannels(this.channels, this.activeChannel?.id);
        this.playerView.setChannels(this.channels);
      })
      .catch(console.error);
  }

  private mountComponents(): void {
    const headerRoot = document.getElementById('header-mount')!;
    const playerRoot = document.getElementById('player-mount')!;
    const heroRoot = document.getElementById('hero-mount')!;
    const catalogRoot = document.getElementById('catalog-mount')!;

    this.header = new Header(headerRoot, {
      onCategorySelect: (category) => {
        this.playerView.hide();
        this.channelGrid.filterByCategory(category);
      },
      onSearch: (query) => {
        this.channelGrid.setSearchQuery(query);
      },
    });

    this.playerView = new PlayerView(playerRoot);

    this.channelChooserModal = new ChannelChooserModal((channel) => {
      this.selectChannel(channel);
    });

    this.playerView.setOnOpenChooser(() => {
      this.channelChooserModal.open();
    });

    this.playerView.setOnSelectChannel((channel) => {
      this.selectChannel(channel);
    });

    this.playerView.setOnBreadcrumbCategory((category) => {
      this.header.setActiveCategory(category);
      this.channelGrid.filterByCategory(category);
    });

    this.heroBanner = new HeroBanner(
      heroRoot,
      (channel) => this.selectChannel(channel),
      () => this.channelChooserModal.open()
    );

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

const app = new NovaStreamApp();
app.bootstrap().catch(console.error);
