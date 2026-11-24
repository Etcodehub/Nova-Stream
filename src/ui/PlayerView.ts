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
  private isCleanFullscreen = false;
  private manualFullscreenExit = false;
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

  public enterCleanFullscreen(withNative = false): void {
    const viewport = this.container.querySelector('#player-viewport') as HTMLElement | null;
    if (!viewport) return;
    this.isCleanFullscreen = true;
    viewport.classList.add('is-clean-fullscreen');
    document.documentElement.classList.add('clean-fs-active');
    document.body.classList.add('clean-fs-active');
    this.updateFullscreenButtonIcon(true);
    if (withNative && !document.fullscreenElement && viewport.requestFullscreen) {
      viewport.requestFullscreen().catch(() => {});
    }
  }

  public exitCleanFullscreen(manual = false): void {
    const viewport = this.container.querySelector('#player-viewport') as HTMLElement | null;
    if (manual) {
      this.manualFullscreenExit = true;
    }
    this.isCleanFullscreen = false;
    viewport?.classList.remove('is-clean-fullscreen');
    document.documentElement.classList.remove('clean-fs-active');
    document.body.classList.remove('clean-fs-active');
    this.updateFullscreenButtonIcon(false);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  }

  public toggleFullscreen(): void {
    if (this.isCleanFullscreen || document.fullscreenElement) {
      this.exitCleanFullscreen(true);
    } else {
      this.manualFullscreenExit = false;
      this.enterCleanFullscreen(true);
    }
  }

  private updateFullscreenButtonIcon(inFs: boolean): void {
    const customFsBtn = this.container.querySelector('#btn-custom-fullscreen');
    if (!customFsBtn) return;
    const fsEnterIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>`;
    const fsExitIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    customFsBtn.innerHTML = inFs ? fsExitIcon : fsEnterIcon;
    customFsBtn.setAttribute('title', inFs ? 'Exit Fullscreen' : 'Fullscreen (NovaStream)');
  }

  private isOrientationLandscape(): boolean {
    const type = screen.orientation?.type || '';
    if (type.startsWith('landscape')) return true;
    return window.matchMedia('(orientation: landscape)').matches;
  }

  private isTouchPhone(): boolean {
    const hasTouch = navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches;
    return hasTouch && Math.min(window.innerWidth, window.innerHeight) <= 768;
  }

  private syncOrientationFullscreen(): void {
    const isLandscape = this.isOrientationLandscape();
    if (!isLandscape) {
      this.manualFullscreenExit = false;
      if (this.isCleanFullscreen && !document.fullscreenElement) {
        this.exitCleanFullscreen(false);
      }
      return;
    }
    if (this.isPlayerVisible && this.isTouchPhone() && !this.manualFullscreenExit && !this.isCleanFullscreen) {
      this.enterCleanFullscreen(false);
    }
  }

  private bindOrientationListener(): void {
    const onOrient = () => setTimeout(() => this.syncOrientationFullscreen(), 150);
    screen.orientation?.addEventListener('change', onOrient);
    window.addEventListener('orientationchange', onOrient);
  }

  public async togglePictureInPicture(): Promise<void> {
    if (!this.videoElement || this.videoElement.style.display === 'none') {
      this.showToast('Picture-in-Picture is available on Server 2 (Playlist HLS)');
      return;
    }
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else if (this.videoElement.requestPictureInPicture) {
        await this.videoElement.requestPictureInPicture();
      }
    } catch {
      this.showToast('Picture-in-Picture unavailable for this stream');
    }
  }

  public async copyInviteLink(): Promise<void> {
    const url = new URL(window.location.href);
    if (this.currentChannel) {
      url.searchParams.set('ch', this.currentChannel.id);
    }
    try {
      await navigator.clipboard.writeText(url.toString());
      this.showToast(`Invite link copied for ${this.currentChannel?.name || 'NovaStream'}!`);
    } catch {
      this.showToast('Share URL ready in address bar');
    }
  }

  public showToast(message: string): void {
    let toast = document.getElementById('novastream-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'novastream-toast';
      toast.className = 'novastream-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    window.setTimeout(() => toast?.classList.remove('show'), 2400);
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
      this.syncOrientationFullscreen();
    }
  }

  public hide(): void {
    this.isPlayerVisible = false;
    this.exitCleanFullscreen(false);
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

                <!-- Custom NovaStream Fullscreen Overlay Button (replaces zlive fullscreen=0) -->
                <button
                  class="player-custom-fs-btn"
                  id="btn-custom-fullscreen"
                  title="Fullscreen (NovaStream)"
                  aria-label="Toggle Fullscreen"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                  </svg>
                </button>

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
              <div class="player-shortcuts-hint" title="Keyboard Shortcuts">
                <span><kbd>↑</kbd><kbd>↓</kbd> Zap</span>
                <span><kbd>L</kbd> Channels</span>
                <span><kbd>I</kbd> Invite</span>
                <span><kbd>P</kbd> PiP</span>
                <span><kbd>F</kbd> Fullscreen</span>
              </div>
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

    const customFsBtn = this.container.querySelector('#btn-custom-fullscreen');
    const toggleFs = () => this.toggleFullscreen();

    document.addEventListener('fullscreenchange', () => {
      const inNativeFs = Boolean(document.fullscreenElement);
      if (!inNativeFs && this.isCleanFullscreen) {
        const viewport = this.container.querySelector('#player-viewport');
        viewport?.classList.remove('is-clean-fullscreen');
        this.isCleanFullscreen = false;
        document.documentElement.classList.remove('clean-fs-active');
        document.body.classList.remove('clean-fs-active');
      }
      this.updateFullscreenButtonIcon(inNativeFs || this.isCleanFullscreen);
    });

    this.btnFullscreen.addEventListener('click', toggleFs);
    customFsBtn?.addEventListener('click', toggleFs);
    this.bindOrientationListener();

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
      this.quickChannelListEl.querySelectorAll('[data-channel-id]').forEach((el) => {
        const item = el as HTMLElement;
        item.classList.toggle('active', item.dataset.channelId === this.currentChannel?.id);
      });
      return;
    }

    this.renderedSidebarCategory = cat;
    this.quickChannelListEl.innerHTML = '';

    if (cat === 'Sports') {
      const beinIds = ['auto-bein-sports-mena-1', 'auto-bein-sports-mena-2', 'auto-bein-sports-mena-3', 'auto-bein-sports-mena-4'];
      const tntIds = ['auto-tnt-sports-1', 'auto-tnt-sports-2', 'auto-tnt-sports-3', 'auto-tnt-sports-4'];

      const beinList = beinIds.map((id) => this.allChannels.find((c) => c.id === id)).filter(Boolean) as Channel[];
      const tntList = tntIds.map((id) => this.allChannels.find((c) => c.id === id)).filter(Boolean) as Channel[];

      // 1. Best Big Channels: beIN Sports & TNT Sports + 1 2 3 4 below each (Sports only)
      if (beinList.length > 0 || tntList.length > 0) {
        const featuredWrap = document.createElement('div');
        featuredWrap.className = 'sidebar-featured-groups';

        const buildGroup = (title: string, mainCh: Channel, numbered: Channel[]) => {
          const group = document.createElement('div');
          group.className = 'sidebar-big-group';

          const bigBtn = document.createElement('button');
          bigBtn.className = `sidebar-big-card ${this.currentChannel?.id === mainCh.id ? 'active' : ''}`;
          bigBtn.dataset.channelId = mainCh.id;
          bigBtn.innerHTML = `
            <img class="sidebar-big-logo" src="${mainCh.logoUrl}" alt="${mainCh.name}" />
            <div class="sidebar-big-meta">
              <div class="sidebar-big-name">${title}</div>
              <div class="sidebar-big-sub">Top Live Sports • HD</div>
            </div>
            <span class="live-pulse-sm"></span>
          `;
          bigBtn.addEventListener('click', () => this.onSelectChannelCallback?.(mainCh));
          group.appendChild(bigBtn);

          const numRow = document.createElement('div');
          numRow.className = 'sidebar-num-row';
          numbered.forEach((ch, idx) => {
            const nBtn = document.createElement('button');
            nBtn.className = `sidebar-num-btn ${this.currentChannel?.id === ch.id ? 'active' : ''}`;
            nBtn.dataset.channelId = ch.id;
            nBtn.title = ch.name;
            nBtn.innerHTML = `
              <img class="sidebar-num-logo" src="${ch.logoUrl}" alt="${ch.name}" />
              <span>${idx + 1}</span>
            `;
            nBtn.addEventListener('click', () => this.onSelectChannelCallback?.(ch));
            numRow.appendChild(nBtn);
          });
          group.appendChild(numRow);
          return group;
        };

        if (beinList.length > 0) featuredWrap.appendChild(buildGroup('beIN Sports', beinList[0], beinList));
        if (tntList.length > 0) featuredWrap.appendChild(buildGroup('TNT Sports', tntList[0], tntList));
        this.quickChannelListEl.appendChild(featuredWrap);
      }

      // 2. Curated 5 Sports channels only (no duplicate beIN/other clutter)
      const curatedSportsIds = [
        'sony-sports-1-test',
        'auto-supersport-premier-league',
        'auto-sky-sports-main-event',
        'auto-sky-sports-premier-league',
        'dazn-it-test',
      ];
      const curatedSports = curatedSportsIds
        .map((id) => this.allChannels.find((c) => c.id === id))
        .filter(Boolean) as Channel[];

      curatedSports.forEach((ch) => {
        const item = document.createElement('button');
        const isActive = this.currentChannel?.id === ch.id;
        item.className = `quick-ch-item ${isActive ? 'active' : ''}`;
        item.dataset.channelId = ch.id;
        item.innerHTML = `
          <img class="quick-ch-logo" src="${ch.logoUrl || ''}" alt="${ch.name}" />
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
      return;
    }

    // Non-Sports categories (Kids, Movies, Entertainment, News): show only that category's channels
    const related = this.allChannels
      .filter((c) => c.category === cat)
      .slice(0, 20);

    related.forEach((ch) => {
      const item = document.createElement('button');
      const isActive = this.currentChannel?.id === ch.id;
      item.className = `quick-ch-item ${isActive ? 'active' : ''}`;
      item.dataset.channelId = ch.id;
      item.innerHTML = `
        <img class="quick-ch-logo" src="${ch.logoUrl || ''}" alt="${ch.name}" />
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
