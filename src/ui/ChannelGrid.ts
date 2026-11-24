/**
 * ChannelGrid Component
 * Prime Video / Netflix-style horizontal carousels (rails)
 * Organized on Home by Top Channels, Best Sports, Movies, Kids, News, and Entertainment,
 * plus full 'All TV Channels' catalog grid with real-time category filtering and search.
 */

import type { Channel } from '../types/index.ts';

export type ChannelSelectCallback = (channel: Channel) => void;

export class ChannelGrid {
  private container: HTMLElement;
  private onSelect: ChannelSelectCallback;
  private channels: Channel[] = [];
  private activeChannelId: string | null = null;
  private currentCategory = 'ALL';
  private allChannelsSubCategory = 'ALL';
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
    this.allChannelsSubCategory = 'ALL';
    this.render();
  }

  public setSearchQuery(query: string): void {
    this.searchQuery = query.trim().toLowerCase();
    this.render();
  }

  public render(): void {
    this.container.innerHTML = '';

    // If searching, show search results grid
    if (this.searchQuery) {
      this.renderSearchResults();
      return;
    }

    // View 1: 'All TV Channels' with Category Tabs & Grid
    if (this.currentCategory === 'ALL_CHANNELS') {
      this.renderAllChannelsView();
      return;
    }

    // View 2: Single Category View (e.g. user clicked 'Sport' from top navigation)
    if (this.currentCategory !== 'ALL') {
      const filtered = this.channels.filter(
        (c) => c.category.toLowerCase() === this.currentCategory.toLowerCase()
      );
      this.renderSingleRail(this.currentCategory, filtered);
      return;
    }

    // View 3: Home Rails (Top Channels, Best Sports, Movies, Kids, News, Entertainment)
    const topChannels = this.channels.filter((c) => c.isTop);
    const sports = this.channels.filter((c) => c.category === 'Sports');
    const movies = this.channels.filter((c) => c.category === 'Movies');
    const kids = this.channels.filter((c) => c.category === 'Kids');
    const news = this.channels.filter((c) => c.category === 'News');
    const entertainment = this.channels.filter(
      (c) => c.category === 'Entertainment' || c.category === 'Documentary'
    );

    // 1. Top Channels & Trending Now
    if (topChannels.length > 0) {
      this.renderRail('🔥 Top Channels & Trending Now', topChannels);
    }

    // 2. Best Sport Channels
    if (sports.length > 0) {
      this.renderRail('⚽ Best Sport Channels — Premier League & Live Matches', sports);
    }

    // 3. Movies & Cinema
    if (movies.length > 0) {
      this.renderRail('🎬 Premiere Cinema & Blockbuster Movies', movies);
    }

    // 4. Kids & Family
    if (kids.length > 0) {
      this.renderRail('🧸 Kids & Family — Cartoons, Animation & Fun', kids);
    }

    // 5. Global News
    if (news.length > 0) {
      this.renderRail('🌐 Global 24/7 News Networks', news);
    }

    // 6. Entertainment & Shows
    if (entertainment.length > 0) {
      this.renderRail('📺 Entertainment, Series & Special Broadcasts', entertainment);
    }
  }

  private renderAllChannelsView(): void {
    const section = document.createElement('div');
    section.className = 'all-channels-section';

    section.innerHTML = `
      <div class="all-channels-header-bar">
        <div class="all-channels-title-group">
          <h2 class="all-channels-title">All TV Channels</h2>
          <span class="all-channels-subtitle">(${this.channels.length} Total Channels from All Providers)</span>
        </div>

        <div class="category-pills-filter" id="all-channels-filter">
          <button class="cat-chip ${this.allChannelsSubCategory === 'ALL' ? 'active' : ''}" data-cat="ALL">All (${this.channels.length})</button>
          <button class="cat-chip ${this.allChannelsSubCategory === 'TOP' ? 'active' : ''}" data-cat="TOP">🔥 Top Channels</button>
          <button class="cat-chip ${this.allChannelsSubCategory === 'Sports' ? 'active' : ''}" data-cat="Sports">⚽ Sport</button>
          <button class="cat-chip ${this.allChannelsSubCategory === 'Movies' ? 'active' : ''}" data-cat="Movies">🎬 Movie</button>
          <button class="cat-chip ${this.allChannelsSubCategory === 'Kids' ? 'active' : ''}" data-cat="Kids">🧸 Kids</button>
          <button class="cat-chip ${this.allChannelsSubCategory === 'News' ? 'active' : ''}" data-cat="News">🌐 News</button>
          <button class="cat-chip ${this.allChannelsSubCategory === 'Entertainment' ? 'active' : ''}" data-cat="Entertainment">📺 Entertainment</button>
        </div>
      </div>

      <div class="prime-cards-grid" id="all-channels-grid"></div>
    `;

    const filterBar = section.querySelector('#all-channels-filter') as HTMLElement;
    const grid = section.querySelector('#all-channels-grid') as HTMLElement;

    filterBar.addEventListener('click', (e) => {
      const target = (e.target as HTMLElement).closest('.cat-chip') as HTMLElement | null;
      if (target && target.dataset.cat) {
        filterBar.querySelectorAll('.cat-chip').forEach((c) => c.classList.remove('active'));
        target.classList.add('active');
        this.allChannelsSubCategory = target.dataset.cat;
        this.populateAllChannelsGrid(grid);
      }
    });

    this.populateAllChannelsGrid(grid);
    this.container.appendChild(section);
  }

  private populateAllChannelsGrid(grid: HTMLElement): void {
    grid.innerHTML = '';
    let filtered = this.channels;

    if (this.allChannelsSubCategory === 'TOP') {
      filtered = this.channels.filter((c) => c.isTop);
    } else if (this.allChannelsSubCategory !== 'ALL') {
      filtered = this.channels.filter(
        (c) => c.category.toLowerCase() === this.allChannelsSubCategory.toLowerCase()
      );
    }

    if (filtered.length === 0) {
      grid.innerHTML = '<div class="no-channels-msg">No channels found in this category.</div>';
      return;
    }

    filtered.forEach((channel) => {
      grid.appendChild(this.createChannelCard(channel));
    });
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

  private renderSingleRail(categoryName: string, list: Channel[]): void {
    const section = document.createElement('div');
    section.className = 'prime-single-category-section';

    section.innerHTML = `
      <div class="all-channels-header-bar">
        <div>
          <h2 class="all-channels-title">${categoryName} Broadcasts</h2>
          <span class="all-channels-subtitle">${list.length} Channels Available</span>
        </div>
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
    const filtered = this.channels.filter((c) => {
      return (
        c.name.toLowerCase().includes(this.searchQuery) ||
        c.category.toLowerCase().includes(this.searchQuery) ||
        (c.currentProgram?.title && c.currentProgram.title.toLowerCase().includes(this.searchQuery))
      );
    });

    const section = document.createElement('div');
    section.className = 'prime-single-category-section';

    section.innerHTML = `
      <div class="all-channels-header-bar">
        <div>
          <h2 class="all-channels-title">Search Results</h2>
          <span class="all-channels-subtitle">Found ${filtered.length} channels for "${this.searchQuery}"</span>
        </div>
      </div>
      <div class="prime-cards-grid"></div>
    `;

    const grid = section.querySelector('.prime-cards-grid') as HTMLElement;
    if (filtered.length === 0) {
      grid.innerHTML = '<div class="no-channels-msg">No channels found matching your search.</div>';
    } else {
      filtered.forEach((channel) => {
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
        <img class="card-logo-img" src="${channel.logoUrl}" alt="${channel.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80'" />
        <div class="card-overlay-badge">
          <span class="mini-live-dot"></span> LIVE
        </div>
        ${channel.isTop ? '<span class="card-top-badge">TOP</span>' : ''}
      </div>

      <div class="card-details-box">
        <div class="card-title-row">
          <img class="card-mini-icon" src="${channel.logoUrl}" alt="" loading="lazy" onerror="this.style.display='none'" />
          <h4 class="card-channel-name">${channel.name}</h4>
        </div>
        <div class="card-program-title">${programTitle}</div>
        <div class="card-footer-tags">
          <span class="prime-pill-tag">${channel.category}</span>
          <span class="prime-hd-text">1080p HD</span>
        </div>
      </div>
    `;

    const select = () => {
      this.activeChannelId = channel.id;
      this.highlightActiveCards();
      this.onSelect(channel);
      document.getElementById('player-viewport')?.scrollIntoView({ behavior: 'smooth' });
    };

    card.addEventListener('click', select);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        select();
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
