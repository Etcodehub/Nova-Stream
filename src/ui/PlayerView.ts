/**
 * PlayerView Component
 * Cinema-Grade Media Player (Prime Video / Netflix style)
 * Clean, elegant consumer viewport that opens on-demand when a user selects a channel.
 */

import type { Channel, PlayerPlaybackState, StreamSource } from '../types/index.ts';
import { NovaPlayer } from '../player/NovaPlayer.ts';

export class PlayerView {
  private container: HTMLElement;
  private player: NovaPlayer | null = null;
  private onOpenChooserCallback: (() => void) | null = null;

  private wrapperElement!: HTMLElement;
  private videoElement!: HTMLVideoElement;
  private iframeElement!: HTMLIFrameElement;
  private titleElement!: HTMLElement;
  private qualityBadgeElement!: HTMLElement;
  private serverButtonsContainer!: HTMLElement;
  private btnOpenChooser!: HTMLButtonElement;
  private currentLogoMini!: HTMLImageElement;
  private btnTheaterMode!: HTMLButtonElement;
  private btnClosePlayer!: HTMLButtonElement;
  private isTheaterMode = false;
  private isPlayerVisible = false;

  constructor(container: HTMLElement, player?: NovaPlayer) {
    this.container = container;
    this.player = player || null;
    this.render();
  }

  public setPlayer(player: NovaPlayer): void {
    this.player = player;
  }

  public setOnOpenChooser(cb: () => void): void {
    this.onOpenChooserCallback = cb;
  }

  public getVideoElement(): HTMLVideoElement {
    return this.videoElement;
  }

  public getIframeElement(): HTMLIFrameElement {
    return this.iframeElement;
  }

  public isVisible(): boolean {
    return this.isPlayerVisible;
  }

  public show(): void {
    this.isPlayerVisible = true;
    if (this.wrapperElement) {
      this.wrapperElement.style.display = 'block';
      this.wrapperElement.classList.add('visible');
    }
  }

  public hide(): void {
    this.isPlayerVisible = false;
    if (this.wrapperElement) {
      this.wrapperElement.style.display = 'none';
      this.wrapperElement.classList.remove('visible');
    }
    // Pause / Stop stream playback
    if (this.player) {
      this.player.stop();
    }
    if (this.videoElement) {
      this.videoElement.pause();
    }
    if (this.iframeElement) {
      this.iframeElement.src = 'about:blank';
    }
  }

  private render(): void {
    this.container.innerHTML = `
      <div class="player-cinema-wrapper" id="player-cinema-wrapper" style="display: none;">
        <div class="player-viewport-container" id="player-viewport">
          <div class="player-ambient-glow"></div>
          <div class="player-overlay-live-badge">
            <span class="live-dot"></span> LIVE
          </div>
          <video id="nova-video" controls playsinline poster="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1280&q=80"></video>
          <iframe
            id="nova-iframe"
            style="display: none; width: 100%; aspect-ratio: 16 / 9; border: 0;"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowfullscreen
            referrerpolicy="no-referrer"
          ></iframe>
        </div>

        <div class="player-info-toolbar">
          <div class="player-info-left">
            <!-- Visual Channel Chooser Trigger Button -->
            <button class="channel-picker-trigger-btn" id="btn-open-channel-modal" title="Browse and Switch Channels">
              <img id="current-channel-logo-mini" class="current-channel-mini-logo" src="" alt="" style="display: none;" />
              <span class="picker-btn-text">📺 Choose Channel</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            <div class="channel-headline">
              <h1 class="now-playing-channel" id="now-playing-title">NovaStream Live</h1>
              <span class="prime-badge-hd" id="player-quality-badge">1080p HD</span>
            </div>
          </div>

          <div class="player-info-right">
            <!-- Server Mirror Selector -->
            <div class="mirror-selector-group">
              <span class="mirror-label">Feed:</span>
              <div class="mirror-pills-row" id="server-buttons-container"></div>
            </div>

            <button class="prime-btn-icon" id="btn-theater-mode" title="Toggle Cinema Theater Mode">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </button>

            <button class="prime-btn-icon prime-btn-close" id="btn-close-player" title="Close Player and Return to Home">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;

    this.wrapperElement = this.container.querySelector('#player-cinema-wrapper')!;
    this.videoElement = this.container.querySelector('#nova-video')!;
    this.iframeElement = this.container.querySelector('#nova-iframe')!;
    this.titleElement = this.container.querySelector('#now-playing-title')!;
    this.qualityBadgeElement = this.container.querySelector('#player-quality-badge')!;
    this.serverButtonsContainer = this.container.querySelector('#server-buttons-container')!;
    this.btnOpenChooser = this.container.querySelector('#btn-open-channel-modal')!;
    this.currentLogoMini = this.container.querySelector('#current-channel-logo-mini')!;
    this.btnTheaterMode = this.container.querySelector('#btn-theater-mode')!;
    this.btnClosePlayer = this.container.querySelector('#btn-close-player')!;

    this.btnTheaterMode.addEventListener('click', () => {
      this.toggleTheaterMode();
    });

    this.btnClosePlayer.addEventListener('click', () => {
      this.hide();
    });

    this.btnOpenChooser.addEventListener('click', () => {
      if (this.onOpenChooserCallback) {
        this.onOpenChooserCallback();
      }
    });
  }

  public updateNowPlaying(channel: Channel): void {
    this.show();

    if (this.titleElement) {
      const subtitle = channel.currentProgram?.title ? `• ${channel.currentProgram.title}` : '';
      this.titleElement.innerHTML = `${channel.name} <span class="now-playing-sub">${subtitle}</span>`;
    }

    if (this.currentLogoMini && channel.logoUrl) {
      this.currentLogoMini.src = channel.logoUrl;
      this.currentLogoMini.style.display = 'inline-block';
      this.currentLogoMini.onerror = () => {
        this.currentLogoMini.style.display = 'none';
      };
    }
  }

  public updateState(state: PlayerPlaybackState): void {
    if (this.qualityBadgeElement) {
      this.qualityBadgeElement.textContent = state.activeQuality || '1080p HD';
    }

    // Render Stream Mirror Switcher (e.g. Server 1, Server 2) cleanly
    this.serverButtonsContainer.innerHTML = '';
    state.candidateSources.forEach((source: StreamSource, idx: number) => {
      const btn = document.createElement('button');
      btn.className = `mirror-pill ${state.currentSource?.id === source.id ? 'active' : ''}`;

      const indicatorClass =
        source.state === 'HEALTHY'
          ? 'indicator-healthy'
          : source.state === 'FAILED'
          ? 'indicator-failed'
          : source.state === 'CHECKING'
          ? 'indicator-checking'
          : 'indicator-healthy';

      btn.innerHTML = `
        <span class="indicator ${indicatorClass}"></span>
        <span>${source.label.replace(/Server \d+ \((.*?)\)/, '$1') || `Feed ${idx + 1}`}</span>
      `;

      btn.addEventListener('click', () => {
        this.player?.selectSource(source.id);
      });

      this.serverButtonsContainer.appendChild(btn);
    });
  }

  private toggleTheaterMode(): void {
    this.isTheaterMode = !this.isTheaterMode;
    if (this.wrapperElement) {
      this.wrapperElement.classList.toggle('theater-mode', this.isTheaterMode);
    }
  }
}
