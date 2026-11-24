/**
 * HeroBanner Component
 * Prime Video-style cinematic featured billboard with backdrop image,
 * title, quality badges, and instant 'Watch Live' call to action.
 */

import type { Channel } from '../types/index.ts';

export type WatchLiveCallback = (channel: Channel) => void;
export type BrowseChannelsCallback = () => void;

export class HeroBanner {
  private container: HTMLElement;
  private onWatchLive: WatchLiveCallback;
  private onBrowseChannels: BrowseChannelsCallback | null = null;
  private currentFeaturedChannel: Channel | null = null;

  constructor(
    container: HTMLElement,
    onWatchLive: WatchLiveCallback,
    onBrowseChannels?: BrowseChannelsCallback
  ) {
    this.container = container;
    this.onWatchLive = onWatchLive;
    this.onBrowseChannels = onBrowseChannels || null;
  }

  public setOnBrowseChannels(cb: BrowseChannelsCallback): void {
    this.onBrowseChannels = cb;
  }

  public setFeaturedChannel(channel: Channel): void {
    this.currentFeaturedChannel = channel;
    this.render();
  }

  private render(): void {
    if (!this.currentFeaturedChannel) {
      this.container.innerHTML = '';
      return;
    }

    const ch = this.currentFeaturedChannel;
    const title = ch.currentProgram?.title || ch.name;
    const desc =
      ch.currentProgram?.description ||
      'Watch continuous high-definition live streaming with multi-server failover and ultra-low latency.';

    this.container.innerHTML = `
      <section class="hero-banner">
        <div class="hero-backdrop" style="background-image: url('${ch.logoUrl}');"></div>
        <div class="hero-overlay-gradient"></div>

        <div class="hero-content">
          <div class="hero-badge-row">
            <span class="hero-live-pill"><span class="hero-live-dot"></span> FEATURED BROADCAST</span>
            <span class="hero-quality-tag">4K ULTRA HD</span>
            <span class="hero-category-tag">${ch.category}</span>
          </div>

          <h2 class="hero-title">${title}</h2>
          <p class="hero-description">${desc}</p>

          <div class="hero-actions-row">
            <button class="hero-btn-primary" id="btn-hero-watch">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Watch Live
            </button>
            <button class="hero-btn-secondary" id="btn-hero-choose">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              📺 Choose Channel
            </button>
          </div>
        </div>
      </section>
    `;

    const btnWatch = this.container.querySelector('#btn-hero-watch');
    btnWatch?.addEventListener('click', () => {
      if (this.currentFeaturedChannel) {
        this.onWatchLive(this.currentFeaturedChannel);
        document.getElementById('player-viewport')?.scrollIntoView({ behavior: 'smooth' });
      }
    });

    const btnChoose = this.container.querySelector('#btn-hero-choose');
    btnChoose?.addEventListener('click', () => {
      if (this.onBrowseChannels) {
        this.onBrowseChannels();
      }
    });
  }
}
