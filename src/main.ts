/**
 * NovaStream Web Application Entrypoint
 * Orchestrates FastCache (IndexedDB), DeltaSyncService, and NovaPlayer.
 */

import './style.css';
import { fastCache } from './cache/FastCacheManager.ts';
import { deltaSync } from './sync/DeltaSyncService.ts';
import { NovaPlayer } from './player/NovaPlayer.ts';
import { INITIAL_MOCK_CHANNELS } from './mockData.ts';
import type { Channel, PlayerPlaybackState } from './types/index.ts';

// UI Element References
const videoElement = document.getElementById('nova-video') as HTMLVideoElement;
const nowPlayingTitle = document.getElementById('now-playing-title') as HTMLElement;
const serverButtonsContainer = document.getElementById('server-buttons-container') as HTMLElement;
const channelsGrid = document.getElementById('channels-grid') as HTMLElement;
const failoverLogList = document.getElementById('failover-log-list') as HTMLElement;
const failoverCountBadge = document.getElementById('failover-count-badge') as HTMLElement;
const activeRevVal = document.getElementById('active-rev-val') as HTMLElement;
const cachedCountVal = document.getElementById('cached-count-val') as HTMLElement;
const btnSimulateFail = document.getElementById('btn-simulate-fail') as HTMLButtonElement;
const btnSyncTrigger = document.getElementById('btn-sync-trigger') as HTMLButtonElement;
const categoryTabs = document.getElementById('category-tabs') as HTMLElement;

let channels: Channel[] = [];
let activeChannel: Channel | null = null;
let currentCategory = 'ALL';
let player: NovaPlayer;

async function bootstrap(): Promise<void> {
  console.log('[NovaStream] Initializing Web Streaming Core...');

  // 1. Initialize Player
  player = new NovaPlayer(videoElement);
  player.subscribe(renderPlayerState);

  // 2. Load 0ms Fast Cache from IndexedDB
  const cached = await fastCache.loadFastCache();
  if (cached.channels.length > 0) {
    channels = cached.channels;
    activeRevVal.textContent = `rev: ${cached.metadata.activeRevision}`;
    cachedCountVal.textContent = `${channels.length} Cached`;
  } else {
    // Seed initial database
    await fastCache.saveChannels(INITIAL_MOCK_CHANNELS, 1);
    channels = INITIAL_MOCK_CHANNELS;
    activeRevVal.textContent = 'rev: 1';
    cachedCountVal.textContent = `${channels.length} Cached`;
  }

  // 3. Render Channels Grid
  renderChannelsGrid();

  // 4. Auto-mount first channel
  if (channels.length > 0) {
    selectChannel(channels[0]);
  }

  // 5. Wire Delta Sync Event Listeners
  deltaSync.addListener({
    onSyncStarted: () => {
      btnSyncTrigger.disabled = true;
      btnSyncTrigger.innerHTML = 'Syncing Deltas...';
    },
    onSyncCompleted: (updatedChannels, revision, deltaCount) => {
      channels = updatedChannels;
      activeRevVal.textContent = `rev: ${revision}`;
      cachedCountVal.textContent = `${channels.length} Cached`;
      btnSyncTrigger.disabled = false;
      btnSyncTrigger.innerHTML = `V3 Sync (${deltaCount} deltas applied)`;
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
