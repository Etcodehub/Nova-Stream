/**
 * PlayerView Component
 * Renders the responsive media viewport (HTML5 Video & IFrame Embed),
 * Now-Playing bar, Theater mode toggle, and Multi-Server Switcher pills.
 */

import type { PlayerPlaybackState, StreamSource } from '../types/index.ts';
import { NovaPlayer } from '../player/NovaPlayer.ts';

export class PlayerView {
  private container: HTMLElement;
  private player: NovaPlayer | null = null;
  private videoElement!: HTMLVideoElement;
  private iframeElement!: HTMLIFrameElement;
  private titleElement!: HTMLElement;
  private qualityBadgeElement!: HTMLElement;
  private serverButtonsContainer!: HTMLElement;
  private btnSimulateFail!: HTMLButtonElement;
  private btnTheaterMode!: HTMLButtonElement;
  private isTheaterMode = false;

  constructor(container: HTMLElement, player?: NovaPlayer) {
    this.container = container;
    this.player = player || null;
    this.render();
  }

  public setPlayer(player: NovaPlayer): void {
    this.player = player;
  }

  public getVideoElement(): HTMLVideoElement {
    return this.videoElement;
  }

  public getIframeElement(): HTMLIFrameElement {
    return this.iframeElement;
  }

  private render(): void {
    this.container.innerHTML = `
      <div class="player-view-wrapper">
        <div class="player-viewport-container" id="player-viewport">
          <div class="player-overlay-live-badge">
            <span class="live-dot"></span> LIVE
          </div>
          <video id="nova-video" controls playsinline></video>
          <iframe
            id="nova-iframe"
            style="display: none; width: 100%; aspect-ratio: 16 / 9; border: 0;"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="player-controls-panel">
          <div class="player-meta-row">
            <div class="player-title-group">
              <h2 class="player-channel-title" id="now-playing-title">Ready for Playback</h2>
              <span class="badge badge-cyan" id="player-quality-badge">Auto</span>
            </div>

            <div class="player-actions-group">
              <button class="btn btn-secondary btn-xs" id="btn-theater-mode" title="Toggle Cinema Theater Mode">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                <span class="btn-text">Theater Mode</span>
              </button>

              <button class="btn btn-danger btn-xs" id="btn-simulate-fail" title="Simulate a server crash to test auto-failover">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <span class="btn-text">Simulate Crash</span>
              </button>
            </div>
          </div>

          <div class="server-selector-row">
            <span class="server-label">Available Mirrors:</span>
            <div class="server-pills-list" id="server-buttons-container"></div>
          </div>
        </div>
      </div>
    `;

    this.videoElement = this.container.querySelector('#nova-video')!;
    this.iframeElement = this.container.querySelector('#nova-iframe')!;
    this.titleElement = this.container.querySelector('#now-playing-title')!;
    this.qualityBadgeElement = this.container.querySelector('#player-quality-badge')!;
    this.serverButtonsContainer = this.container.querySelector('#server-buttons-container')!;
    this.btnSimulateFail = this.container.querySelector('#btn-simulate-fail')!;
    this.btnTheaterMode = this.container.querySelector('#btn-theater-mode')!;

    this.btnSimulateFail.addEventListener('click', () => {
      this.player?.triggerSimulatedFailure();
    });

    this.btnTheaterMode.addEventListener('click', () => {
      this.toggleTheaterMode();
    });
  }

  public updateNowPlaying(title: string, subtitle?: string): void {
    if (this.titleElement) {
      this.titleElement.innerHTML = `${title} ${subtitle ? `<span class="subtitle">— ${subtitle}</span>` : ''}`;
    }
  }

  public updateState(state: PlayerPlaybackState): void {
    if (this.qualityBadgeElement) {
      this.qualityBadgeElement.textContent = state.activeQuality || 'Auto';
    }

    // Render Server Mirror Switcher Pills
    this.serverButtonsContainer.innerHTML = '';
    state.candidateSources.forEach((source: StreamSource) => {
      const btn = document.createElement('button');
      btn.className = `server-pill ${state.currentSource?.id === source.id ? 'active' : ''}`;
      
      const indicatorClass =
        source.state === 'HEALTHY'
          ? 'indicator-healthy'
          : source.state === 'FAILED'
          ? 'indicator-failed'
          : source.state === 'CHECKING'
          ? 'indicator-checking'
          : 'indicator-idle';

      btn.innerHTML = `
        <span class="indicator ${indicatorClass}"></span>
        <span class="server-pill-label">${source.label}</span>
      `;

      btn.addEventListener('click', () => {
        this.player?.selectSource(source.id);
      });

      this.serverButtonsContainer.appendChild(btn);
    });
  }

  private toggleTheaterMode(): void {
    this.isTheaterMode = !this.isTheaterMode;
    const mainGrid = document.querySelector('.main-content-grid');
    if (mainGrid) {
      mainGrid.classList.toggle('theater-mode', this.isTheaterMode);
    }
    const btnText = this.btnTheaterMode.querySelector('.btn-text');
    if (btnText) {
      btnText.textContent = this.isTheaterMode ? 'Exit Theater' : 'Theater Mode';
    }
  }
}
