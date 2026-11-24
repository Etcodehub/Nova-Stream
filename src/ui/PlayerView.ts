/**
 * PlayerView Component
 * Neumorphic split-screen streaming player matching zlive.st layout:
 * - Breadcrumb trail (Channels / • Category / Channel Name)
 * - Header bar with TV icon, Live badge, quality/source badges, and close button
 * - Responsive 2-column grid: 16:9 Player viewport + Sidebar (Live Channels / Chat / Schedule)
 * - Cleanly closes on menu navigation or close button press.
 */

import type { Channel, PlayerPlaybackState, StreamSource } from '../types/index.ts';
import { NovaPlayer } from '../player/NovaPlayer.ts';

export class PlayerView {
  private container: HTMLElement;
  private player: NovaPlayer | null = null;
  private onOpenChooserCallback: (() => void) | null = null;
  private onSelectChannelCallback: ((channel: Channel) => void) | null = null;
  private onBreadcrumbCategoryCallback: ((category: string) => void) | null = null;

  private wrapperElement!: HTMLElement;
  private videoElement!: HTMLVideoElement;
  private iframeElement!: HTMLIFrameElement;
  private breadcrumbCategoryEl!: HTMLElement;
  private breadcrumbChannelEl!: HTMLElement;
  private titleElement!: HTMLElement;
  private subtitleElement!: HTMLElement;
  private qualityBadgeElement!: HTMLElement;
  private sourcesCountElement!: HTMLElement;
  private serverButtonsContainer!: HTMLElement;
  private mirrorSelectorGroup!: HTMLElement;
  private currentLogoMini!: HTMLImageElement;
  private btnClosePlayer!: HTMLButtonElement;
  private btnFullscreen!: HTMLButtonElement;
  private errorOverlayElement!: HTMLElement;
  private btnErrorRetry!: HTMLButtonElement;
  private btnErrorBrowse!: HTMLButtonElement;
  private quickChannelListEl!: HTMLElement;
  private sidebarTabChatBtn!: HTMLButtonElement;
  private sidebarTabChannelsBtn!: HTMLButtonElement;
  private sidebarChatPane!: HTMLElement;
  private sidebarChannelsPane!: HTMLElement;

  private isPlayerVisible = false;
  private allChannels: Channel[] = [];
  private currentChannel: Channel | null = null;
  private renderedSidebarCategory: string | null = null;

  constructor(container: HTMLElement, player?: NovaPlayer) {
    this.container = container;
    this.player = player || null;
    this.render();
  }

  public setPlayer(player: NovaPlayer): void {
    this.player = player;
  }

  public setChannels(channels: Channel[]): void {
    this.allChannels = channels;
    this.renderQuickChannelList();
  }

  public setOnOpenChooser(cb: () => void): void {
    this.onOpenChooserCallback = cb;
  }

  public setOnSelectChannel(cb: (channel: Channel) => void): void {
    this.onSelectChannelCallback = cb;
  }

  public setOnBreadcrumbCategory(cb: (category: string) => void): void {
    this.onBreadcrumbCategoryCallback = cb;
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
    const wasVisible = this.isPlayerVisible;
    this.isPlayerVisible = true;
    if (this.wrapperElement) {
      this.wrapperElement.style.display = 'block';
      this.wrapperElement.classList.add('visible');
      if (!wasVisible) {
        this.wrapperElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  public hide(): void {
    this.isPlayerVisible = false;
    if (this.wrapperElement) {
      this.wrapperElement.style.display = 'none';
      this.wrapperElement.classList.remove('visible');
    }
    if (this.player) {
      this.player.stop();
    }
    if (this.videoElement) {
      this.videoElement.pause();
      this.videoElement.removeAttribute('src');
      this.videoElement.load();
    }
    if (this.iframeElement) {
      this.iframeElement.src = 'about:blank';
    }
    if (this.errorOverlayElement) {
      this.errorOverlayElement.style.display = 'none';
    }
  }

  private render(): void {
    this.container.innerHTML = `
      <section class="player-shell" id="player-cinema-wrapper" style="display: none;">
        <!-- 1. Breadcrumbs -->
        <nav class="player-breadcrumbs" aria-label="Breadcrumb">
          <button class="breadcrumb-link" id="bc-home">Channels</button>
          <span class="breadcrumb-sep">/</span>
          <button class="breadcrumb-cat" id="bc-category">
            <span class="star-dot"></span>
            <span id="bc-category-text">Sports</span>
          </button>
          <span class="breadcrumb-sep">/</span>
          <span class="breadcrumb-current" id="bc-channel-name">Channel</span>
        </nav>

        <!-- 2. Channel Header Row -->
        <div class="player-header-row">
          <div class="player-header-left">
            <div class="nm-well-icon player-channel-well">
              <img id="current-channel-logo-mini" class="player-well-logo" src="" alt="" />
            </div>
            <div class="player-title-meta">
              <div class="player-title-line">
                <h1 class="player-channel-title" id="now-playing-title">Channel Name</h1>
                <span class="live-status-pill">
                  <span class="live-pulse"></span> Live
                </span>
              </div>
              <p class="player-channel-subtitle" id="now-playing-subtitle">FHD • Dedicated Live Broadcast</p>
            </div>
          </div>

          <div class="player-header-right">
            <span class="nm-inset player-meta-badge" id="player-quality-badge">FHD</span>
            <span class="nm-inset player-meta-badge" id="player-sources-count">2 sources</span>
            <button class="nm-btn nm-btn-sm" id="btn-open-channel-modal" title="Browse All Channels">
              Switch Channel
            </button>
            <button class="nm-btn nm-btn-sm nm-btn-icon" id="btn-fullscreen-player" title="Fullscreen">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
              </svg>
            </button>
            <button class="nm-btn nm-btn-sm nm-btn-danger" id="btn-close-player" title="Close Player">
              ✕ Close
            </button>
          </div>
        </div>

        <!-- 3. Split Grid: Player Left + Sidebar Right -->
        <div class="player-split-grid">
          <!-- Left: Player Frame + Server Switcher -->
          <div class="player-main-col">
            <div class="nm-raised-lg player-frame-card">
              <div class="player-aspect-box" id="player-viewport">
                <video id="nova-video" controls playsinline></video>
                <iframe
                  id="nova-iframe"
                  style="display: none; width: 100%; height: 100%; border: 0;"
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                  allowfullscreen
                  referrerpolicy="no-referrer"
                ></iframe>

                <!-- Error Overlay -->
                <div class="player-error-overlay" id="player-error-overlay" style="display: none;">
                  <div class="nm-card error-dialog-card">
                    <span class="error-dialog-icon">📡</span>
                    <h3 class="error-dialog-title">Feed Temporarily Offline</h3>
                    <p class="error-dialog-desc">Try switching to Server 2 below or pick another live channel.</p>
                    <div class="error-actions-row">
                      <button class="nm-cta nm-cta-sm" id="btn-player-retry">Retry Feed</button>
                      <button class="nm-btn nm-btn-sm" id="btn-player-browse">Browse Channels</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Feed / Server Switcher -->
            <div class="player-servers-bar" id="mirror-selector-group">
              <span class="servers-label">Sources:</span>
              <div class="server-pills-row" id="server-buttons-container"></div>
            </div>
          </div>

          <!-- Right: Sidebar Card (Matching zlive.st Aside Card) -->
          <aside class="nm-card player-sidebar-card">
            <div class="sidebar-tabs">
              <button class="nm-chip active" id="tab-btn-channels">Live Channels</button>
              <button class="nm-chip" id="tab-btn-chat">Chat <span class="online-dot"></span></button>
            </div>

            <div class="sidebar-pane" id="sidebar-pane-channels">
              <div class="sidebar-channel-list" id="quick-channel-list"></div>
            </div>

            <div class="sidebar-pane" id="sidebar-pane-chat" style="display: none;">
              <div class="chat-placeholder-box">
                <div class="chat-header-line">
                  <span>Chat <span class="online-dot"></span></span>
                  <span class="chat-online-count">0 online</span>
                </div>
                <div class="chat-center-prompt">
                  <h4>Live Match Chat</h4>
                  <p>Connect with viewers watching this channel live.</p>
                  <button class="nm-cta nm-cta-sm" id="btn-enter-chat">Enter chat</button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    `;

    this.wrapperElement = this.container.querySelector('#player-cinema-wrapper')!;
    this.videoElement = this.container.querySelector('#nova-video')!;
    this.iframeElement = this.container.querySelector('#nova-iframe')!;
    this.breadcrumbCategoryEl = this.container.querySelector('#bc-category-text')!;
    this.breadcrumbChannelEl = this.container.querySelector('#bc-channel-name')!;
    this.titleElement = this.container.querySelector('#now-playing-title')!;
    this.subtitleElement = this.container.querySelector('#now-playing-subtitle')!;
    this.qualityBadgeElement = this.container.querySelector('#player-quality-badge')!;
    this.sourcesCountElement = this.container.querySelector('#player-sources-count')!;
    this.mirrorSelectorGroup = this.container.querySelector('#mirror-selector-group')!;
    this.serverButtonsContainer = this.container.querySelector('#server-buttons-container')!;
    this.currentLogoMini = this.container.querySelector('#current-channel-logo-mini')!;
    this.btnClosePlayer = this.container.querySelector('#btn-close-player')!;
    this.btnFullscreen = this.container.querySelector('#btn-fullscreen-player')!;
    this.errorOverlayElement = this.container.querySelector('#player-error-overlay')!;
    this.btnErrorRetry = this.container.querySelector('#btn-player-retry')!;
    this.btnErrorBrowse = this.container.querySelector('#btn-player-browse')!;
    this.quickChannelListEl = this.container.querySelector('#quick-channel-list')!;
    this.sidebarTabChannelsBtn = this.container.querySelector('#tab-btn-channels')!;
    this.sidebarTabChatBtn = this.container.querySelector('#tab-btn-chat')!;
    this.sidebarChannelsPane = this.container.querySelector('#sidebar-pane-channels')!;
    this.sidebarChatPane = this.container.querySelector('#sidebar-pane-chat')!;

    this.btnClosePlayer.addEventListener('click', () => this.hide());

    this.container.querySelector('#bc-home')?.addEventListener('click', () => {
      this.hide();
      this.onBreadcrumbCategoryCallback?.('ALL');
    });

    this.container.querySelector('#bc-category')?.addEventListener('click', () => {
      const cat = this.currentChannel?.category || 'ALL';
      this.hide();
      this.onBreadcrumbCategoryCallback?.(cat);
    });

    this.container.querySelector('#btn-open-channel-modal')?.addEventListener('click', () => {
      this.onOpenChooserCallback?.();
    });

    this.btnFullscreen.addEventListener('click', () => {
      const viewport = this.container.querySelector('#player-viewport');
      if (viewport?.requestFullscreen) {
        viewport.requestFullscreen().catch(() => {});
      }
    });

    this.btnErrorRetry.addEventListener('click', () => {
      this.errorOverlayElement.style.display = 'none';
      this.player?.retry();
    });

    this.btnErrorBrowse.addEventListener('click', () => {
      this.onOpenChooserCallback?.();
    });

    this.sidebarTabChannelsBtn.addEventListener('click', () => {
      this.sidebarTabChannelsBtn.classList.add('active');
      this.sidebarTabChatBtn.classList.remove('active');
      this.sidebarChannelsPane.style.display = 'block';
      this.sidebarChatPane.style.display = 'none';
    });

    this.sidebarTabChatBtn.addEventListener('click', () => {
      this.sidebarTabChatBtn.classList.add('active');
      this.sidebarTabChannelsBtn.classList.remove('active');
      this.sidebarChatPane.style.display = 'block';
      this.sidebarChannelsPane.style.display = 'none';
    });

    this.container.querySelector('#btn-enter-chat')?.addEventListener('click', (e) => {
      const btn = e.currentTarget as HTMLButtonElement;
      btn.textContent = 'Connected to Room';
      btn.disabled = true;
    });
  }

  public updateNowPlaying(channel: Channel): void {
    this.currentChannel = channel;
    this.show();

    if (this.errorOverlayElement) {
      this.errorOverlayElement.style.display = 'none';
    }
    if (this.breadcrumbCategoryEl) {
      this.breadcrumbCategoryEl.textContent = channel.category;
    }
    if (this.breadcrumbChannelEl) {
      this.breadcrumbChannelEl.textContent = channel.name;
    }
    if (this.titleElement) {
      this.titleElement.textContent = channel.name;
    }
    if (this.subtitleElement) {
      this.subtitleElement.textContent =
        channel.currentProgram?.description || `${channel.category} • Dedicated Live Stream`;
    }
    if (this.sourcesCountElement) {
      const count = channel.sources.length;
      this.sourcesCountElement.textContent = `${count} source${count === 1 ? '' : 's'}`;
    }
    if (this.currentLogoMini) {
      if (channel.logoUrl) {
        this.currentLogoMini.src = channel.logoUrl;
        this.currentLogoMini.style.display = 'block';
        this.currentLogoMini.onerror = () => {
          this.currentLogoMini.style.display = 'none';
        };
      } else {
        this.currentLogoMini.style.display = 'none';
      }
    }

    this.renderQuickChannelList();
  }

  private renderQuickChannelList(): void {
    if (!this.quickChannelListEl) return;
    const cat = this.currentChannel?.category || 'Sports';

    if (this.renderedSidebarCategory === cat && this.quickChannelListEl.children.length > 0) {
      this.quickChannelListEl.querySelectorAll('.quick-ch-item').forEach((el) => {
        const item = el as HTMLElement;
        item.classList.toggle('active', item.dataset.channelId === this.currentChannel?.id);
      });
      return;
    }

    this.renderedSidebarCategory = cat;
    const related = this.allChannels
      .filter((c) => c.category === cat)
      .slice(0, 25);

    this.quickChannelListEl.innerHTML = '';
    related.forEach((ch) => {
      const item = document.createElement('button');
      const isActive = this.currentChannel?.id === ch.id;
      item.className = `quick-ch-item ${isActive ? 'active' : ''}`;
      item.dataset.channelId = ch.id;
      item.innerHTML = `
        <img class="quick-ch-logo" src="${ch.logoUrl || ''}" alt="${ch.name}" onerror="this.style.display='none'" />
        <div class="quick-ch-info">
          <div class="quick-ch-name">${ch.name}</div>
          <div class="quick-ch-cat">${ch.network || ch.category}</div>
        </div>
        <span class="live-pulse-sm"></span>
      `;
      item.addEventListener('click', () => {
        this.onSelectChannelCallback?.(ch);
      });
      this.quickChannelListEl.appendChild(item);
    });
  }

  public updateState(state: PlayerPlaybackState): void {
    if (this.qualityBadgeElement) {
      this.qualityBadgeElement.textContent = state.activeQuality || 'FHD';
    }

    if (this.errorOverlayElement) {
      this.errorOverlayElement.style.display = state.state === 'error' ? 'flex' : 'none';
    }

    if (this.mirrorSelectorGroup) {
      const hasMultiple = state.candidateSources && state.candidateSources.length > 0;
      this.mirrorSelectorGroup.style.display = hasMultiple ? 'flex' : 'none';
    }

    this.serverButtonsContainer.innerHTML = '';
    state.candidateSources.forEach((source: StreamSource, idx: number) => {
      const btn = document.createElement('button');
      btn.className = `nm-btn nm-btn-sm ${state.currentSource?.id === source.id ? 'active-server' : ''}`;
      btn.setAttribute('data-active', state.currentSource?.id === source.id ? 'true' : 'false');
      btn.innerHTML = `<span class="indicator indicator-healthy"></span><span>${source.label || `Server ${idx + 1}`}</span>`;
      btn.addEventListener('click', () => {
        this.player?.selectSource(source.id);
      });
      this.serverButtonsContainer.appendChild(btn);
    });
  }
}
