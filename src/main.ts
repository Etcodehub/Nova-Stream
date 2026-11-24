/**
 * NovaStream Web Application Entrypoint
 * Orchestrates FastCache (IndexedDB), DeltaSyncService, and NovaPlayer.
 */

import './style.css';
import { fastCache } from './cache/FastCacheManager.ts';
import { deltaSync } from './sync/DeltaSyncService.ts';
import { NovaPlayer } from './player/NovaPlayer.ts';
import { catalogManager } from './services/CatalogManager.ts';
import type { Channel, PlayerPlaybackState } from './types/index.ts';

// UI Element References
const videoElement = document.getElementById('nova-video') as HTMLVideoElement;
const iframeElement = document.getElementById('nova-iframe') as HTMLIFrameElement;
const nowPlayingTitle = document.getElementById('now-playing-title') as HTMLElement;
const serverButtonsContainer = document.getElementById('server-buttons-container') as HTMLElement;
const channelsGrid = document.getElementById('channels-grid') as HTMLElement;
const failoverLogList = document.getElementById('failover-log-list') as HTMLElement;
const failoverCountBadge = document.getElementById('failover-count-badge') as HTMLElement;
const activeRevVal = document.getElementById('active-rev-val') as HTMLElement;
const cachedCountVal = document.getElementById('cached-count-val') as HTMLElement;
const btnSimulateFail = document.getElementById('btn-simulate-fail') as HTMLButtonElement;
const btnSyncTrigger = document.getElementById('btn-sync-trigger') as HTMLButtonElement;
const btnLoadIptv = document.getElementById('btn-load-iptv') as HTMLButtonElement;
const categoryTabs = document.getElementById('category-tabs') as HTMLElement;

let channels: Channel[] = [];
let activeChannel: Channel | null = null;
let currentCategory = 'ALL';
let player: NovaPlayer;

async function bootstrap(): Promise<void> {
  console.log('[NovaStream] Initializing Web Streaming Core...');

  // 1. Initialize Player with Cloudflare Edge Gateway & IFrame Embed support
  player = new NovaPlayer(videoElement, 'https://novastream-gateway.etcodehub.workers.dev', iframeElement);
  player.subscribe(renderPlayerState);

  // 2. 0ms Instant Cache Load from IndexedDB
  const { channels: cachedChannels } = await catalogManager.loadInstantCache();
  channels = cachedChannels;
  const currentRev = await fastCache.getActiveRevision();
  activeRevVal.textContent = `rev: ${currentRev}`;
  cachedCountVal.textContent = `⚡ ${channels.length} Cached (0ms Instant)`;

  // 3. Render Channels Grid Immediately
  renderChannelsGrid();

  // 4. Auto-mount first channel for instant playback
  if (channels.length > 0) {
    selectChannel(channels[0]);
  }

  // 5. Listen to background catalog auto-fetch updates
  catalogManager.onCatalogUpdated((updatedChannels, stats) => {
    channels = updatedChannels;
    cachedCountVal.textContent = `⚡ ${channels.length} Cached (0ms Ready)`;
    renderChannelsGrid();
    if (stats.newlyAdded > 0) {
      console.info(`[NovaStream] +${stats.newlyAdded} channels auto-cached in IndexedDB.`);
    }
  });

  // 6. Launch Immediate Non-Blocking Background Auto-Fetch across all providers
  setTimeout(() => {
    catalogManager.autoFetchAllProviders(channels).catch(console.error);
  }, 100);

  // 7. Wire Delta Sync Event Listeners
  deltaSync.addListener({
    onSyncStarted: () => {
      btnSyncTrigger.disabled = true;
      btnSyncTrigger.innerHTML = 'Syncing Deltas...';
    },
    onSyncCompleted: (updatedChannels, revision, deltaCount) => {
      channels = updatedChannels;
      activeRevVal.textContent = `rev: ${revision}`;
      cachedCountVal.textContent = `⚡ ${channels.length} Cached`;
      btnSyncTrigger.disabled = false;
      btnSyncTrigger.innerHTML = `V3 Sync (${deltaCount} deltas)`;
      renderChannelsGrid();
    },
    onSyncFailed: (err) => {
      btnSyncTrigger.disabled = false;
      btnSyncTrigger.innerHTML = 'Sync Failed';
      console.error('[NovaStream Sync Error]:', err);
    },
  });

  // 6. Setup UI Event Handlers
  btnSimulateFail.addEventListener('click', () => {
    player.triggerSimulatedFailure();
  });

  btnSyncTrigger.addEventListener('click', () => {
    deltaSync.performDeltaSync().catch(console.error);
  });

  btnLoadIptv.addEventListener('click', async () => {
    btnLoadIptv.disabled = true;
    btnLoadIptv.textContent = 'Auto-fetching Feeds...';

    try {
      const updated = await catalogManager.autoFetchAllProviders(channels);
      channels = updated;
      cachedCountVal.textContent = `⚡ ${channels.length} Cached (0ms Ready)`;
      btnLoadIptv.textContent = `⚡ ${channels.length} Channels Synced`;
      renderChannelsGrid();
    } catch (err) {
      console.error(err);
      btnLoadIptv.textContent = 'Sync Failed';
    } finally {
      setTimeout(() => {
        btnLoadIptv.disabled = false;
        btnLoadIptv.textContent = 'Refresh Channels';
      }, 2500);
    }
  });

  categoryTabs.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.dataset.category) {
      document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
      target.classList.add('active');
      currentCategory = target.dataset.category;
      renderChannelsGrid();
    }
  });
}

function selectChannel(channel: Channel): void {
  activeChannel = channel;
  nowPlayingTitle.textContent = `${channel.name} — ${channel.currentProgram?.title || 'Live Stream'}`;
  player.loadChannel(channel);
  renderChannelsGrid();
}

function renderPlayerState(state: PlayerPlaybackState): void {
  // Update Server Selector Mirrors
  serverButtonsContainer.innerHTML = '';
  state.candidateSources.forEach((source) => {
    const btn = document.createElement('button');
    btn.className = `server-btn ${state.currentSource?.id === source.id ? 'active' : ''}`;
    const indicatorClass =
      source.state === 'HEALTHY'
        ? 'indicator-healthy'
        : source.state === 'FAILED'
        ? 'indicator-failed'
        : source.state === 'CHECKING'
        ? 'indicator-checking'
        : 'indicator-idle';

    btn.innerHTML = `<span class="indicator ${indicatorClass}"></span> ${source.label}`;
    btn.addEventListener('click', () => {
      player.selectSource(source.id);
    });
    serverButtonsContainer.appendChild(btn);
  });

  // Update Failover History List
  failoverCountBadge.textContent = `${state.failoverHistory.length} events`;
  if (state.failoverHistory.length > 0) {
    failoverLogList.innerHTML = state.failoverHistory
      .map(
        (h) => `
        <div class="log-entry">
          <div class="log-time">${new Date(h.timestamp).toLocaleTimeString()} - Failover Triggered</div>
          <div>Switched from <strong>${h.label}</strong>: ${h.reason}</div>
        </div>
      `
      )
      .join('');
  }
}

function renderChannelsGrid(): void {
  channelsGrid.innerHTML = '';
  const filtered = currentCategory === 'ALL' ? channels : channels.filter((c) => c.category === currentCategory);

  filtered.forEach((channel) => {
    const card = document.createElement('div');
    card.className = `channel-card ${activeChannel?.id === channel.id ? 'active' : ''}`;

    let progressPercent = 0;
    if (channel.currentProgram) {
      const now = Date.now();
      const total = channel.currentProgram.endTime - channel.currentProgram.startTime;
      const elapsed = now - channel.currentProgram.startTime;
      progressPercent = Math.min(Math.max((elapsed / total) * 100, 5), 100);
    }

    card.innerHTML = `
      <div class="channel-top">
        <img class="channel-logo" src="${channel.logoUrl}" alt="${channel.name}" />
        <div class="channel-info">
          <h4>${channel.name}</h4>
          <span class="channel-cat">${channel.category} • ${channel.sources.length} Mirrors</span>
        </div>
      </div>
      ${
        channel.currentProgram
          ? `
        <div class="epg-snippet">
          <div class="epg-title">${channel.currentProgram.title}</div>
          <div class="epg-time">Live • ${Math.round(progressPercent)}% elapsed</div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${progressPercent}%;"></div>
          </div>
        </div>
      `
          : ''
      }
    `;

    card.addEventListener('click', () => selectChannel(channel));
    channelsGrid.appendChild(card);
  });
}

// Start application
bootstrap().catch(console.error);
