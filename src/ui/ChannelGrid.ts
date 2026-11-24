/**
 * ChannelGrid Component
 * Clean, responsive Neumorphic channel directory matching zlive.st.
 * Strictly sized cards prevent vertical stretching across all devices.
 */

import type { Channel } from '../types/index.ts';

export class ChannelGrid {
  private container: HTMLElement;
  private channels: Channel[] = [];
  private activeCategory: string = 'ALL';
  private searchQuery: string = '';
  private activeChannelId: string | null = null;
  private onSelectChannel: (channel: Channel) => void;

  constructor(container: HTMLElement, onSelectChannel: (channel: Channel) => void) {
    this.container = container;
    this.onSelectChannel = onSelectChannel;
  }

  public setChannels(channels: Channel[], activeChannelId?: string): void {
    this.channels = channels;
    if (activeChannelId) this.activeChannelId = activeChannelId;
    this.render();
  }

  public setActiveChannel(channelId: string): void {
    this.activeChannelId = channelId;
    this.container.querySelectorAll('.channel-tile').forEach((el) => {
      const tile = el as HTMLElement;
      tile.classList.toggle('active', tile.dataset.channelId === channelId);
    });
  }

  public filterByCategory(category: string): void {
    this.activeCategory = category;
    this.render();
  }

  public setSearchQuery(query: string): void {
    this.searchQuery = query.toLowerCase();
    this.render();
  }

  private getFilteredChannels(): Channel[] {
    return this.channels.filter((ch) => {
      const matchesCat =
        this.activeCategory === 'ALL' ||
        this.activeCategory === 'ALL_CHANNELS' ||
        ch.category.toLowerCase() === this.activeCategory.toLowerCase();
      const matchesSearch =
        !this.searchQuery ||
        ch.name.toLowerCase().includes(this.searchQuery) ||
        ch.category.toLowerCase().includes(this.searchQuery) ||
        (ch.network && ch.network.toLowerCase().includes(this.searchQuery));
      return matchesCat && matchesSearch;
    });
  }

  private createChannelCard(ch: Channel): HTMLElement {
    const isActive = ch.id === this.activeChannelId;
    const card = document.createElement('button');
    card.type = 'button';
    card.className = `nm-card channel-tile ${isActive ? 'active' : ''}`;
    card.dataset.channelId = ch.id;
    card.setAttribute('data-focusable', 'true');

    const quality = (ch as any).quality || 'FHD';
    const fallbackInitial = ch.name.slice(0, 2).toUpperCase();

    card.innerHTML = `
      <div class="channel-tile-top">
        <div class="nm-well-icon channel-tile-logo-box">
          <img
            src="${ch.logoUrl || ''}"
            alt="${ch.name}"
            loading="lazy"
            class="channel-tile-logo"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <span class="channel-tile-fallback" style="display: none;">${fallbackInitial}</span>
        </div>
        <div class="channel-tile-badges">
          <span class="tile-live-dot" title="Live"></span>
          <span class="nm-inset tile-quality-pill">${quality}</span>
        </div>
      </div>

      <div class="channel-tile-body">
        <h3 class="channel-tile-title">${ch.name}</h3>
        <p class="channel-tile-sub">${ch.network || ch.category}</p>
      </div>

      <div class="channel-tile-footer">
        <span class="tile-cat-tag">${ch.category}</span>
        <span class="tile-watch-cta">Watch →</span>
      </div>
    `;

    card.addEventListener('click', () => {
      this.onSelectChannel(ch);
    });

    return card;
  }

  private render(): void {
    this.container.innerHTML = '';

    const filtered = this.getFilteredChannels();

    // Category filter bar
    const filterBar = document.createElement('div');
    filterBar.className = 'catalog-filter-header';
    const categories = ['ALL', 'Sports', 'Movies', 'Kids', 'Entertainment', 'News'];
    filterBar.innerHTML = `
      <div class="catalog-heading-group">
        <h2 class="catalog-main-title">
          ${this.activeCategory === 'ALL' ? 'Featured & Live Channels' : this.activeCategory === 'ALL_CHANNELS' ? 'All Live TV Channels' : `${this.activeCategory} Channels`}
        </h2>
        <span class="nm-inset catalog-count-pill">${filtered.length} Live</span>
      </div>
      <div class="nm-track catalog-filter-pills">
        ${categories
          .map(
            (cat) => `
          <button class="nm-chip ${this.activeCategory === cat ? 'active' : ''}" data-filter-cat="${cat}" aria-pressed="${this.activeCategory === cat}">
            ${cat === 'ALL' ? 'All' : cat}
          </button>
        `
          )
          .join('')}
      </div>
    `;

    filterBar.querySelectorAll('[data-filter-cat]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const cat = (e.currentTarget as HTMLElement).dataset.filterCat || 'ALL';
        this.filterByCategory(cat);
      });
    });

    this.container.appendChild(filterBar);

    if (filtered.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'nm-notice catalog-empty-state';
      empty.innerHTML = `No channels matched "<strong>${this.searchQuery}</strong>". Try another search or category.`;
      this.container.appendChild(empty);
      return;
    }

    // If on Home (ALL) and no search query, show curated Top Sports + Category Grid
    if (this.activeCategory === 'ALL' && !this.searchQuery) {
      const topSports = filtered.filter((c) => c.category === 'Sports' && c.isTop).slice(0, 12);
      if (topSports.length > 0) {
        const topSection = document.createElement('section');
        topSection.className = 'catalog-section';
        topSection.innerHTML = `<h3 class="section-sub-title"><span class="star-dot"></span> Top Sports Broadcasts</h3>`;
        const topGrid = document.createElement('div');
        topGrid.className = 'channels-responsive-grid';
        topSports.forEach((ch) => topGrid.appendChild(this.createChannelCard(ch)));
        topSection.appendChild(topGrid);
        this.container.appendChild(topSection);
      }

      const remaining = filtered.filter((c) => !topSports.includes(c));
      const allSection = document.createElement('section');
      allSection.className = 'catalog-section';
      allSection.innerHTML = `<h3 class="section-sub-title">All Live Channels</h3>`;
      const allGrid = document.createElement('div');
      allGrid.className = 'channels-responsive-grid';
      remaining.forEach((ch) => allGrid.appendChild(this.createChannelCard(ch)));
      allSection.appendChild(allGrid);
      this.container.appendChild(allSection);
    } else {
      const grid = document.createElement('div');
      grid.className = 'channels-responsive-grid';
      filtered.forEach((ch) => grid.appendChild(this.createChannelCard(ch)));
      this.container.appendChild(grid);
    }
  }
}
