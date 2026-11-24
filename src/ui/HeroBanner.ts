/**
 * HeroBanner Component
 * Compact, responsive Neumorphic featured banner matching zlive.st.
 */

import type { Channel } from '../types/index.ts';

export class HeroBanner {
  private container: HTMLElement;
  private featuredChannel: Channel | null = null;
  private onWatchNow: (channel: Channel) => void;
  private onOpenChooser: () => void;

  constructor(
    container: HTMLElement,
    onWatchNow: (channel: Channel) => void,
    onOpenChooser: () => void
  ) {
    this.container = container;
    this.onWatchNow = onWatchNow;
    this.onOpenChooser = onOpenChooser;
    this.render();
  }

  public setFeaturedChannel(channel: Channel): void {
    this.featuredChannel = channel;
    this.render();
  }

  private render(): void {
    if (!this.featuredChannel) {
      this.container.innerHTML = '';
      return;
    }

    const ch = this.featuredChannel;
    this.container.innerHTML = `
      <section class="hero-compact-wrap">
        <div class="nm-raised-lg hero-compact-card">
          <div class="hero-compact-content">
            <div class="hero-badges-row">
              <span class="live-status-pill"><span class="live-pulse"></span> Live Featured</span>
              <span class="nm-inset player-meta-badge">${ch.category}</span>
              <span class="nm-inset player-meta-badge">${(ch as any).quality || 'FHD'}</span>
            </div>
            <h1 class="hero-compact-title">${ch.name}</h1>
            <p class="hero-compact-desc">
              ${ch.currentProgram?.description || 'Watch dedicated live HD satellite broadcast with instant edge failover.'}
            </p>
            <div class="hero-compact-actions">
              <button class="nm-cta" id="hero-watch-btn" data-focusable="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Watch Live
              </button>
              <button class="nm-btn" id="hero-browse-btn" data-focusable="true">
                Browse 277+ Channels
              </button>
            </div>
          </div>
          <div class="hero-compact-visual">
            <div class="nm-well-icon hero-logo-well">
              <img src="${ch.logoUrl || ''}" alt="${ch.name}" class="hero-logo-img" onerror="this.style.display='none'" />
            </div>
          </div>
        </div>
      </section>
    `;

    this.container.querySelector('#hero-watch-btn')?.addEventListener('click', () => {
      if (this.featuredChannel) {
        this.onWatchNow(this.featuredChannel);
      }
    });

    this.container.querySelector('#hero-browse-btn')?.addEventListener('click', () => {
      this.onOpenChooser();
    });
  }
}
