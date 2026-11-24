/**
 * NovaStream Application Orchestrator
 * Fully separated UI architecture coordinating Header, PlayerView, DiagnosticsView,
 * ChannelGrid, FastCache (IndexedDB), and NovaPlayer.
 */

import './style.css';
import { fastCache } from './cache/FastCacheManager.ts';
import { deltaSync } from './sync/DeltaSyncService.ts';
import { catalogManager } from './services/CatalogManager.ts';
import { NovaPlayer } from './player/NovaPlayer.ts';
import { Header } from './ui/Header.ts';
import { PlayerView } from './ui/PlayerView.ts';
import { DiagnosticsView } from './ui/DiagnosticsView.ts';
import { ChannelGrid } from './ui/ChannelGrid.ts';
import type { Channel, PlayerPlaybackState } from './types/index.ts';

class NovaStreamApp {
  private player!: NovaPlayer;
  private header!: Header;
  private playerView!: PlayerView;
  private diagnosticsView!: DiagnosticsView;
  private channelGrid!: ChannelGrid;
  private channels: Channel[] = [];
  private activeChannel: Channel | null = null;

  public async bootstrap(): Promise<void> {
    console.info('[NovaStream] Bootstrapping separated UI architecture...');

    // 1. Mount UI Component Shells
    this.mountComponents();

    // 2. Initialize Player Engine connected to PlayerView elements
    this.player = new NovaPlayer(
      this.playerView.getVideoElement(),
      'https://novastream-gateway.etcodehub.workers.dev',
      this.playerView.getIframeElement()
    );
    this.playerView.setPlayer(this.player);

    // 3. Connect Player State Listener to Views
    this.player.subscribe((state: PlayerPlaybackState) => {
      this.playerView.updateState(state);
      this.diagnosticsView.updateState(state);
    });

    // 4. Load 0ms Instant Cache from IndexedDB
    const { channels: cachedChannels } = await catalogManager.loadInstantCache();
    this.channels = cachedChannels;
    const currentRev = await fastCache.getActiveRevision();

    this.header.updateRevision(currentRev);
    this.header.updateCacheStatus(this.channels.length, 'Cached (0ms Ready)');

    // 5. Populate Channel Grid and Quick Channel Chooser
    this.channelGrid.setChannels(this.channels);
    this.playerView.populateChannelChooser(this.channels);

    // 6. Auto-mount first channel for instant play
    if (this.channels.length > 0) {
      this.selectChannel(this.channels[0]);
    }

    // 7. Subscribe to Background Auto-Fetch Updates
    catalogManager.onCatalogUpdated((updatedChannels, stats) => {
      this.channels = updatedChannels;
      this.header.updateCacheStatus(this.channels.length, 'Cached');
      this.channelGrid.setChannels(this.channels, this.activeChannel?.id);
      this.playerView.populateChannelChooser(this.channels, this.activeChannel?.id);
      if (stats.newlyAdded > 0) {
        console.info(`[NovaStream] Ingested +${stats.newlyAdded} live channels from background fetch.`);
      }
    });

    // 8. Launch Non-Blocking Background Provider Ingest
    setTimeout(() => {
      catalogManager.autoFetchAllProviders(this.channels).catch(console.error);
    }, 150);

    // 9. Wire Delta Sync Protocol Listeners
    this.wireDeltaSync();
  }

  private mountComponents(): void {
    const headerRoot = document.getElementById('header-mount')!;
    const playerRoot = document.getElementById('player-mount')!;
    const diagnosticsRoot = document.getElementById('diagnostics-mount')!;
    const catalogRoot = document.getElementById('catalog-mount')!;

    this.header = new Header(headerRoot, {
      onRefreshClick: () => this.handleManualRefresh(),
      onDeltaSyncClick: () => this.handleDeltaSync(),
    });

    this.playerView = new PlayerView(playerRoot, null as any);
    this.playerView.setOnChannelChange((channelId) => {
      const channel = this.channels.find((c) => c.id === channelId);
      if (channel) {
        this.selectChannel(channel);
      }
    });

    this.diagnosticsView = new DiagnosticsView(diagnosticsRoot);

    this.channelGrid = new ChannelGrid(catalogRoot, (channel) => {
      this.selectChannel(channel);
    });
  }

  private selectChannel(channel: Channel): void {
    this.activeChannel = channel;
    this.playerView.updateNowPlaying(channel.name, channel.currentProgram?.title);
    this.playerView.setSelectedChannel(channel.id);
    this.channelGrid.setActiveChannel(channel.id);
    this.player.loadChannel(channel);
  }

  private async handleManualRefresh(): Promise<void> {
    this.header.setRefreshing(true, 'Fetching...');
    try {
      const updated = await catalogManager.autoFetchAllProviders(this.channels);
      this.channels = updated;
      this.channelGrid.setChannels(this.channels, this.activeChannel?.id);
      this.header.updateCacheStatus(this.channels.length, 'Synced');
    } catch (err) {
      console.error(err);
    } finally {
      setTimeout(() => this.header.setRefreshing(false, 'Refresh'), 2000);
    }
  }

  private async handleDeltaSync(): Promise<void> {
    this.header.setSyncing(true, 'Syncing...');
    try {
      await deltaSync.performDeltaSync();
    } catch (err) {
      console.error(err);
    }
  }

  private wireDeltaSync(): void {
    deltaSync.addListener({
      onSyncStarted: () => {
        this.header.setSyncing(true, 'Syncing...');
      },
      onSyncCompleted: (updatedChannels, revision, deltaCount) => {
        this.channels = updatedChannels;
        this.header.updateRevision(revision);
        this.header.updateCacheStatus(this.channels.length, 'Cached');
        this.header.setSyncing(false, `V3 Sync (${deltaCount})`);
        this.channelGrid.setChannels(this.channels, this.activeChannel?.id);
      },
      onSyncFailed: (err) => {
        this.header.setSyncing(false, 'Sync Failed');
        console.error('[NovaStream Sync Error]:', err);
      },
    });
  }
}

// Start application
const app = new NovaStreamApp();
app.bootstrap().catch(console.error);
