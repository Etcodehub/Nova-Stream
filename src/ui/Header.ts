/**
 * Header Component
 * Modular top navigation bar with device detection, revision telemetry, and sync triggers.
 */

export interface HeaderCallbacks {
  onRefreshClick: () => void;
  onDeltaSyncClick: () => void;
}

export class Header {
  private container: HTMLElement;
  private callbacks: HeaderCallbacks;
  private revElement!: HTMLElement;
  private cacheElement!: HTMLElement;
  private syncBtn!: HTMLButtonElement;
  private refreshBtn!: HTMLButtonElement;
  private devicePill!: HTMLElement;

  constructor(container: HTMLElement, callbacks: HeaderCallbacks) {
    this.container = container;
    this.callbacks = callbacks;
    this.render();
  }

  private render(): void {
    const deviceType = this.detectDeviceType();

    this.container.innerHTML = `
      <header class="app-header">
        <div class="logo-group">
          <div class="logo-badge">NOVA</div>
          <div class="logo-title-group">
            <h1 class="logo-title">NovaStream</h1>
            <span class="device-pill" id="device-pill">${deviceType}</span>
          </div>
        </div>

        <div class="header-status">
          <div class="badge badge-cyan" id="revision-badge">
            <span class="badge-dot"></span>
            <span>Revision:</span>
            <strong id="active-rev-val">rev: 1</strong>
          </div>

          <div class="badge badge-purple" id="cache-badge">
            <span class="pulse-icon">⚡</span>
            <strong id="cached-count-val">0ms Ready</strong>
          </div>

          <div class="header-actions">
            <button class="btn btn-secondary btn-sm" id="btn-header-refresh" title="Auto-fetch live feeds from IPTV-org and Catalog">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span class="btn-text">Refresh</span>
            </button>

            <button class="btn btn-primary btn-sm" id="btn-header-sync" title="V3 Monotonic Delta Sync">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
              <span class="btn-text">V3 Sync</span>
            </button>
          </div>
        </div>
      </header>
    `;

    this.revElement = this.container.querySelector('#active-rev-val')!;
    this.cacheElement = this.container.querySelector('#cached-count-val')!;
    this.syncBtn = this.container.querySelector('#btn-header-sync')!;
    this.refreshBtn = this.container.querySelector('#btn-header-refresh')!;
    this.devicePill = this.container.querySelector('#device-pill')!;

    this.refreshBtn.addEventListener('click', () => this.callbacks.onRefreshClick());
    this.syncBtn.addEventListener('click', () => this.callbacks.onDeltaSyncClick());

    window.addEventListener('resize', () => {
      this.devicePill.textContent = this.detectDeviceType();
    });
  }

  public updateRevision(rev: number): void {
    if (this.revElement) this.revElement.textContent = `rev: ${rev}`;
  }

  public updateCacheStatus(count: number, label = '0ms Cached'): void {
    if (this.cacheElement) this.cacheElement.textContent = `⚡ ${count} ${label}`;
  }

  public setSyncing(isSyncing: boolean, text = 'Syncing...'): void {
    if (this.syncBtn) {
      this.syncBtn.disabled = isSyncing;
      const textSpan = this.syncBtn.querySelector('.btn-text');
      if (textSpan) textSpan.textContent = text;
    }
  }

  public setRefreshing(isRefreshing: boolean, text = 'Refreshing...'): void {
    if (this.refreshBtn) {
      this.refreshBtn.disabled = isRefreshing;
      const textSpan = this.refreshBtn.querySelector('.btn-text');
      if (textSpan) textSpan.textContent = text;
    }
  }

  private detectDeviceType(): string {
    const width = window.innerWidth;
    if (width < 640) return '📱 Mobile';
    if (width < 1024) return '📟 Tablet';
    if (width > 1920) return '📺 TV / Ultra-Wide';
    return '💻 Desktop';
  }
}
