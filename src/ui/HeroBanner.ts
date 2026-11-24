/**
 * HeroBanner Component
 * Prime Video-style cinematic featured billboard with backdrop image,
 * title, quality badges, and instant 'Watch Live' call to action.
 */

import type { Channel } from '../types/index.ts';

export type WatchLiveCallback = (channel: Channel) => void;

export class HeroBanner {
  private container: HTMLElement;
  private onWatchLive: WatchLiveCallback;
  private currentFeaturedChannel: Channel | null = null;

  constructor(container: HTMLElement, onWatchLive: WatchLiveCallback) {
    this.container = container;
    this.onWatchLive = onWatchLive;
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
            <span class="hero-live-pill"><span class="hero-live-dot"></span> LIVE NOW</span>
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
            <button class="hero-btn-secondary" id="btn-hero-info">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              ${ch.name}
            </button>
          </div>
        </div>
      </section>
    `;

    const btnWatch = this.container.querySelector('#btn-hero-watch');
    btnWatch?.addEventListener('click', () => {
      if (this.currentFeaturedChannel) {
        this.onWatchLive(this.currentFeaturedChannel);
        // Smooth scroll up to player
        document.getElementById('player-viewport')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
