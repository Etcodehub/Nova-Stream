/**
 * ChannelGrid Component
 * Prime Video / Netflix-style horizontal carousels (rails)
 * Organized by Sports, Cinema, News, and Live TV with smooth horizontal scrolling.
 */

import type { Channel } from '../types/index.ts';

export type ChannelSelectCallback = (channel: Channel) => void;

export class ChannelGrid {
  private container: HTMLElement;
  private onSelect: ChannelSelectCallback;
  private channels: Channel[] = [];
  private activeChannelId: string | null = null;
  private currentCategory = 'ALL';
  private searchQuery = '';

  constructor(container: HTMLElement, onSelect: ChannelSelectCallback) {
    this.container = container;
    this.onSelect = onSelect;
  }

  public setChannels(channels: Channel[], activeId?: string): void {
    this.channels = channels;
    if (activeId !== undefined) {
      this.activeChannelId = activeId;
    }
    this.render();
  }

  public setActiveChannel(channelId: string): void {
    this.activeChannelId = channelId;
    this.highlightActiveCards();
  }

  public filterByCategory(category: string): void {
    this.currentCategory = category;
    this.render();
  }

  public setSearchQuery(query: string): void {
    this.searchQuery = query;
    this.render();
  }

  private render(): void {
    this.container.innerHTML = '';

    // If searching, show search results grid
    if (this.searchQuery) {
      this.renderSearchResults();
      return;
    }

    // If a specific category tab is selected, show that category rail/grid
    if (this.currentCategory !== 'ALL') {
      const filtered = this.channels.filter(
        (c) => c.category.toLowerCase() === this.currentCategory.toLowerCase()
      );
      this.renderSingleRail(this.currentCategory, filtered);
      return;
    }

    // Default: Prime Video-style Multi-Rail Layout
    const sports = this.channels.filter((c) => c.category === 'Sports');
    const movies = this.channels.filter((c) => c.category === 'Movies');
    const news = this.channels.filter((c) => c.category === 'News');
    const entertainment = this.channels.filter(
      (c) => c.category === 'Entertainment' || (!['Sports', 'Movies', 'News'].includes(c.category))
    );

    if (sports.length > 0) this.renderRail('⚽ Live Sports & Football Matchday', sports);
    if (movies.length > 0) this.renderRail('🎬 Premiere Cinema & Movies', movies);
    if (news.length > 0) this.renderRail('🌐 Global 24/7 News Networks', news);
    if (entertainment.length > 0) this.renderRail('📺 Entertainment & Live TV', entertainment);
  }

  private renderRail(title: string, list: Channel[]): void {
    const railWrapper = document.createElement('div');
    railWrapper.className = 'prime-rail-wrapper';

    railWrapper.innerHTML = `
      <div class="prime-rail-header">
        <h3 class="prime-rail-title">${title}</h3>
        <span class="prime-rail-count">${list.length} Channels</span>
      </div>
      <div class="prime-rail-track-container">
        <button class="rail-scroll-arrow left" aria-label="Scroll left">‹</button>
        <div class="prime-rail-track"></div>
        <button class="rail-scroll-arrow right" aria-label="Scroll right">›</button>
      </div>
    `;

    const track = railWrapper.querySelector('.prime-rail-track') as HTMLElement;
    const arrowLeft = railWrapper.querySelector('.rail-scroll-arrow.left') as HTMLButtonElement;
    const arrowRight = railWrapper.querySelector('.rail-scroll-arrow.right') as HTMLButtonElement;

    list.forEach((channel) => {
      const card = this.createChannelCard(channel);
      track.appendChild(card);
    });

    arrowLeft.addEventListener('click', () => {
      track.scrollBy({ left: -420, behavior: 'smooth' });
    });

    arrowRight.addEventListener('click', () => {
      track.scrollBy({ left: 420, behavior: 'smooth' });
    });

    this.container.appendChild(railWrapper);
  }

  private renderSingleRail(category: string, list: Channel[]): void {
    const section = document.createElement('div');
    section.className = 'prime-single-category-section';
    section.innerHTML = `
      <div class="prime-rail-header">
        <h3 class="prime-rail-title">${category} Live Streams</h3>
        <span class="prime-rail-count">${list.length} Channels</span>
      </div>
      <div class="prime-cards-grid"></div>
    `;

    const grid = section.querySelector('.prime-cards-grid') as HTMLElement;
    list.forEach((channel) => {
      grid.appendChild(this.createChannelCard(channel));
    });

    this.container.appendChild(section);
  }

  private renderSearchResults(): void {
    const results = this.channels.filter((c) => {
      return (
        c.name.toLowerCase().includes(this.searchQuery) ||
        c.category.toLowerCase().includes(this.searchQuery) ||
        (c.currentProgram?.title && c.currentProgram.title.toLowerCase().includes(this.searchQuery))
      );
    });

    const section = document.createElement('div');
    section.className = 'prime-single-category-section';
    section.innerHTML = `
      <div class="prime-rail-header">
        <h3 class="prime-rail-title">Search Results for "${this.searchQuery}"</h3>
        <span class="prime-rail-count">${results.length} Found</span>
      </div>
      <div class="prime-cards-grid"></div>
    `;

    const grid = section.querySelector('.prime-cards-grid') as HTMLElement;
    if (results.length === 0) {
      grid.innerHTML = '<div class="no-results-msg">No channels found matching your query.</div>';
    } else {
      results.forEach((channel) => {
        grid.appendChild(this.createChannelCard(channel));
      });
    }

    this.container.appendChild(section);
  }

  private createChannelCard(channel: Channel): HTMLElement {
    const card = document.createElement('div');
    const isActive = this.activeChannelId === channel.id;
    card.className = `prime-channel-card ${isActive ? 'active' : ''}`;
    card.dataset.channelId = channel.id;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    const programTitle = channel.currentProgram?.title || 'Live Transmission';

    card.innerHTML = `
      <div class="card-poster-box">
        <img class="card-logo-img" src="${channel.logoUrl}" alt="${channel.name}" loading="lazy" />
        <div class="card-overlay-badge">
          <span class="mini-live-dot"></span> LIVE
        </div>
      </div>

      <div class="card-details-box">
        <h4 class="card-channel-name">${channel.name}</h4>
        <div class="card-program-title">${programTitle}</div>
        <div class="card-footer-tags">
          <span class="prime-pill-tag">${channel.category}</span>
          <span class="prime-quality-tag">HD</span>
        </div>
      </div>
    `;

    const handleSelect = () => {
      this.activeChannelId = channel.id;
      this.highlightActiveCards();
      this.onSelect(channel);
      // Smooth scroll up to player
      document.getElementById('player-viewport')?.scrollIntoView({ behavior: 'smooth' });
    };

    card.addEventListener('click', handleSelect);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleSelect();
      }
    });

    return card;
  }

  private highlightActiveCards(): void {
    const cards = this.container.querySelectorAll('.prime-channel-card');
    cards.forEach((card) => {
      const el = card as HTMLElement;
      if (el.dataset.channelId === this.activeChannelId) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }
}
