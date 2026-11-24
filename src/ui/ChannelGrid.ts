/**
 * ChannelGrid Component
 * Modular catalog viewer with live search filtering, category tabs,
 * and responsive multi-platform channel cards with real-time EPG progress.
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
  private gridContainer!: HTMLElement;
  private tabsContainer!: HTMLElement;
  private searchInput!: HTMLInputElement;

  constructor(container: HTMLElement, onSelect: ChannelSelectCallback) {
    this.container = container;
    this.onSelect = onSelect;
    this.render();
  }

  private render(): void {
    this.container.innerHTML = `
      <section class="catalog-section">
        <div class="catalog-controls-bar">
          <div class="catalog-title-group">
            <h3 class="section-title">Live Channels & Feeds</h3>
            <span class="catalog-count-badge" id="catalog-count-badge">0 channels</span>
          </div>

          <div class="catalog-search-wrapper">
            <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              class="catalog-search-input"
              id="catalog-search-input"
              placeholder="Search football, sports, news, channels..."
            />
          </div>

          <div class="category-tabs-group" id="category-tabs">
            <button class="cat-pill active" data-category="ALL">All</button>
            <button class="cat-pill" data-category="Sports">Sports</button>
            <button class="cat-pill" data-category="Movies">Movies</button>
            <button class="cat-pill" data-category="News">News</button>
            <button class="cat-pill" data-category="Entertainment">Entertainment</button>
          </div>
        </div>

        <div class="channels-grid-layout" id="channels-grid"></div>
      </section>
    `;

    this.gridContainer = this.container.querySelector('#channels-grid')!;
    this.tabsContainer = this.container.querySelector('#category-tabs')!;
    this.searchInput = this.container.querySelector('#catalog-search-input')!;

    this.searchInput.addEventListener('input', () => {
      this.searchQuery = this.searchInput.value.trim().toLowerCase();
      this.renderGrid();
    });

    this.tabsContainer.addEventListener('click', (e) => {
      const target = (e.target as HTMLElement).closest('.cat-pill') as HTMLElement | null;
      if (target && target.dataset.category) {
        this.tabsContainer.querySelectorAll('.cat-pill').forEach((pill) => pill.classList.remove('active'));
        target.classList.add('active');
        this.currentCategory = target.dataset.category;
        this.renderGrid();
      }
    });
  }

  public setChannels(channels: Channel[], activeId?: string): void {
    this.channels = channels;
    if (activeId !== undefined) {
      this.activeChannelId = activeId;
    }
    const countBadge = this.container.querySelector('#catalog-count-badge');
    if (countBadge) {
      countBadge.textContent = `${channels.length} channels`;
    }
    this.renderGrid();
  }

  public setActiveChannel(channelId: string): void {
    this.activeChannelId = channelId;
    this.renderGrid();
  }

  private renderGrid(): void {
    this.gridContainer.innerHTML = '';

    const filtered = this.channels.filter((c) => {
      const matchesCategory =
        this.currentCategory === 'ALL' || c.category.toLowerCase() === this.currentCategory.toLowerCase();
      const matchesSearch =
        !this.searchQuery ||
        c.name.toLowerCase().includes(this.searchQuery) ||
        c.category.toLowerCase().includes(this.searchQuery) ||
        (c.currentProgram?.title && c.currentProgram.title.toLowerCase().includes(this.searchQuery));
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      this.gridContainer.innerHTML = `
        <div class="grid-empty-message">
          <p>No channels match your filter.</p>
        </div>
      `;
      return;
    }

    filtered.forEach((channel) => {
      const card = document.createElement('div');
      const isActive = this.activeChannelId === channel.id;
      card.className = `channel-card ${isActive ? 'active' : ''}`;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');

      let progressPercent = 0;
      if (channel.currentProgram) {
        const now = Date.now();
        const total = channel.currentProgram.endTime - channel.currentProgram.startTime;
        const elapsed = now - channel.currentProgram.startTime;
        progressPercent = Math.min(Math.max((elapsed / total) * 100, 10), 100);
      }

      card.innerHTML = `
        <div class="channel-card-header">
          <img class="channel-card-logo" src="${channel.logoUrl}" alt="${channel.name}" loading="lazy" />
          <div class="channel-card-meta">
            <h4 class="channel-card-name">${channel.name}</h4>
            <div class="channel-card-sub">
              <span class="category-tag">${channel.category}</span>
              <span class="mirrors-count">${channel.sources.length} ${channel.sources.length === 1 ? 'server' : 'servers'}</span>
            </div>
          </div>
        </div>

        ${
          channel.currentProgram
            ? `
          <div class="card-epg-box">
            <div class="epg-title-text">${channel.currentProgram.title}</div>
            <div class="epg-progress-row">
              <span class="epg-time-text">Live • ${Math.round(progressPercent)}%</span>
            </div>
            <div class="epg-bar-track">
              <div class="epg-bar-indicator" style="width: ${progressPercent}%;"></div>
            </div>
          </div>
        `
            : ''
        }
      `;

      card.addEventListener('click', () => {
        this.activeChannelId = channel.id;
        this.renderGrid();
        this.onSelect(channel);
      });

      // Keyboard navigation support for TV / D-pad
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.activeChannelId = channel.id;
          this.renderGrid();
          this.onSelect(channel);
        }
      });

      this.gridContainer.appendChild(card);
    });
  }
}
