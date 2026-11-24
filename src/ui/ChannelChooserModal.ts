/**
 * ChannelChooserModal Component
 * Interactive visual channel selector drawer with channel logos,
 * search filtering, category pills, and instant one-click switching.
 */

import type { Channel } from '../types/index.ts';

export type ChannelSelectedCallback = (channel: Channel) => void;

export class ChannelChooserModal {
  private overlayElement: HTMLElement;
  private onSelect: ChannelSelectedCallback;
  private channels: Channel[] = [];
  private activeChannelId: string | null = null;
  private currentCategory = 'ALL';
  private searchQuery = '';
  private isOpen = false;

  constructor(onSelect: ChannelSelectedCallback) {
    this.onSelect = onSelect;
    this.overlayElement = document.createElement('div');
    this.overlayElement.className = 'channel-modal-overlay';
    document.body.appendChild(this.overlayElement);
    this.render();
  }

  public setChannels(channels: Channel[], activeId?: string): void {
    this.channels = channels;
    if (activeId !== undefined) {
      this.activeChannelId = activeId;
    }
    if (this.isOpen) {
      this.renderList();
    }
  }

  public setActiveChannel(channelId: string): void {
    this.activeChannelId = channelId;
    if (this.isOpen) {
      this.renderList();
    }
  }

  public open(): void {
    this.isOpen = true;
    this.overlayElement.classList.add('open');
    this.renderList();
    const input = this.overlayElement.querySelector('#modal-search-input') as HTMLInputElement;
    if (input) {
      input.value = '';
      this.searchQuery = '';
      setTimeout(() => input.focus(), 100);
    }
  }

  public close(): void {
    this.isOpen = false;
    this.overlayElement.classList.remove('open');
  }

  private render(): void {
    this.overlayElement.innerHTML = `
      <div class="channel-modal-container" role="dialog" aria-modal="true">
        <div class="channel-modal-header">
          <div class="modal-title-row">
            <h3 class="modal-heading">
              <span class="modal-heading-icon">📺</span> Select Channel
            </h3>
            <button class="modal-close-btn" id="modal-close-btn" aria-label="Close">✕</button>
          </div>

          <!-- Search input -->
          <div class="modal-search-box">
            <svg class="modal-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              id="modal-search-input"
              class="modal-search-input"
              placeholder="Search by channel name, sport, movie, kids..."
            />
          </div>

          <!-- Category filter pills -->
          <div class="modal-category-tabs" id="modal-category-tabs">
            <button class="modal-cat-pill active" data-cat="ALL">All Channels</button>
            <button class="modal-cat-pill" data-cat="Sports">Sports</button>
            <button class="modal-cat-pill" data-cat="Movies">Movies</button>
            <button class="modal-cat-pill" data-cat="Kids">Kids</button>
            <button class="modal-cat-pill" data-cat="News">News</button>
          </div>
        </div>

        <div class="channel-modal-list" id="modal-channel-list"></div>
      </div>
    `;

    // Backdrop click closes modal
    this.overlayElement.addEventListener('click', (e) => {
      if (e.target === this.overlayElement) {
        this.close();
      }
    });

    const closeBtn = this.overlayElement.querySelector('#modal-close-btn')!;
    closeBtn.addEventListener('click', () => this.close());

    const searchInput = this.overlayElement.querySelector('#modal-search-input') as HTMLInputElement;
    searchInput.addEventListener('input', () => {
      this.searchQuery = searchInput.value.trim().toLowerCase();
      this.renderList();
    });

    const catTabs = this.overlayElement.querySelector('#modal-category-tabs')!;
    catTabs.addEventListener('click', (e) => {
      const target = (e.target as HTMLElement).closest('.modal-cat-pill') as HTMLElement | null;
      if (target && target.dataset.cat) {
        catTabs.querySelectorAll('.modal-cat-pill').forEach((p) => p.classList.remove('active'));
        target.classList.add('active');
        this.currentCategory = target.dataset.cat;
        this.renderList();
      }
    });

    // Escape key closes modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  private renderList(): void {
    const listContainer = this.overlayElement.querySelector('#modal-channel-list') as HTMLElement;
    if (!listContainer) return;

    listContainer.innerHTML = '';

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
      listContainer.innerHTML = `
        <div class="modal-empty-state">
          <p>No channels match your search.</p>
        </div>
      `;
      return;
    }

    filtered.forEach((channel) => {
      const item = document.createElement('div');
      const isActive = this.activeChannelId === channel.id;
      item.className = `modal-channel-item ${isActive ? 'active' : ''}`;
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');

      const programTitle = channel.currentProgram?.title || 'Live Transmission';

      item.innerHTML = `
        <div class="item-logo-wrapper">
          <img class="item-logo-img" src="${channel.logoUrl}" alt="${channel.name}" loading="lazy" />
          ${isActive ? '<span class="item-playing-indicator">▶</span>' : ''}
        </div>

        <div class="item-info">
          <div class="item-name-row">
            <h4 class="item-channel-name">${channel.name}</h4>
            <span class="item-category-tag">${channel.category}</span>
          </div>
          <p class="item-program-title">${programTitle}</p>
        </div>

        <div class="item-action-badge">
          <span class="item-live-dot"></span> LIVE
        </div>
      `;

      const selectAndClose = () => {
        this.activeChannelId = channel.id;
        this.onSelect(channel);
        this.close();
      };

      item.addEventListener('click', selectAndClose);
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectAndClose();
        }
      });

      listContainer.appendChild(item);
    });
  }
}
