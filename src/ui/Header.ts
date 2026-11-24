/**
 * Header Component
 * Matches the sleek neumorphic navigation bar from zlive.st
 * Pill-shaped center track, brand icon, and animated TV mode switch.
 */

export interface HeaderCallbacks {
  onCategorySelect: (category: string) => void;
  onSearch: (query: string) => void;
  onToggleTvMode?: (enabled: boolean) => void;
}

export class Header {
  private container: HTMLElement;
  private callbacks: HeaderCallbacks;
  private isTvMode = false;

  constructor(container: HTMLElement, callbacks: HeaderCallbacks) {
    this.container = container;
    this.callbacks = callbacks;
    this.isTvMode = localStorage.getItem('tvMode') === '1';
    if (this.isTvMode) {
      document.body.classList.add('tv-mode');
    }
    this.render();
  }

  private render(): void {
    this.container.innerHTML = `
      <header class="app-header">
        <div class="header-container">
          <!-- Left: Brand Logo -->
          <div class="brand-logo" id="brand-home" role="button" tabindex="0" title="NovaStream Home">
            <div class="brand-icon-well">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="url(#logo-grad)" stroke-width="2"/>
                <polygon points="10 8 16 12 10 16 10 8" fill="url(#logo-grad)"/>
                <defs>
                  <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#b48cff"/>
                    <stop offset="100%" stop-color="#7b4dff"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span class="brand-text"><span class="brand-highlight">NOVA</span>STREAM</span>
          </div>

          <!-- Center: Neumorphic Inset Navigation Track -->
          <nav class="nm-track header-nav-track" aria-label="Main Navigation">
            <button class="nm-chip active" data-cat="ALL" aria-current="page" data-focusable="true">Channels</button>
            <button class="nm-chip" data-cat="Sports" data-focusable="true">Sports</button>
            <button class="nm-chip" data-cat="Movies" data-focusable="true">Movies</button>
            <button class="nm-chip" data-cat="Kids" data-focusable="true">Kids</button>
            <button class="nm-chip" data-cat="ALL_CHANNELS" data-focusable="true">All TV Channels</button>
          </nav>

          <!-- Right: TV Mode Toggle & Search -->
          <div class="header-right-tools">
            <div class="header-search-wrap">
              <input
                type="text"
                id="header-search-input"
                class="nm-input header-search-input"
                placeholder="Search 270+ channels..."
                data-focusable="true"
              />
            </div>

            <!-- TV Mode Switch -->
            <div class="tv-mode-control" title="Toggle 10-foot TV Cinema Mode">
              <svg class="tv-mode-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                <polyline points="17 2 12 7 7 2"></polyline>
              </svg>
              <span class="tv-mode-label">TV mode</span>
              <button
                class="nm-switch"
                id="header-tv-switch"
                role="switch"
                aria-checked="${this.isTvMode ? 'true' : 'false'}"
                aria-label="Toggle TV Mode"
                data-focusable="true"
              ></button>
            </div>
          </div>
        </div>
      </header>
    `;

    // Search input listener
    const searchInput = this.container.querySelector('#header-search-input') as HTMLInputElement;
    searchInput?.addEventListener('input', () => {
      this.callbacks.onSearch(searchInput.value.trim().toLowerCase());
    });

    // Navigation track listeners
    const chips = this.container.querySelectorAll('.header-nav-track .nm-chip');
    chips.forEach((chip) => {
      chip.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        chips.forEach((c) => {
          c.classList.remove('active');
          c.removeAttribute('aria-current');
        });
        target.classList.add('active');
        target.setAttribute('aria-current', 'page');
        const cat = target.dataset.cat || 'ALL';
        this.callbacks.onCategorySelect(cat);
      });
    });

    // Brand logo click
    const brandHome = this.container.querySelector('#brand-home');
    brandHome?.addEventListener('click', () => {
      chips.forEach((c) => {
        c.classList.remove('active');
        c.removeAttribute('aria-current');
      });
      chips[0]?.classList.add('active');
      chips[0]?.setAttribute('aria-current', 'page');
      this.callbacks.onCategorySelect('ALL');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // TV mode switch
    const tvSwitch = this.container.querySelector('#header-tv-switch') as HTMLButtonElement;
    tvSwitch?.addEventListener('click', () => {
      this.isTvMode = !this.isTvMode;
      tvSwitch.setAttribute('aria-checked', this.isTvMode ? 'true' : 'false');
      localStorage.setItem('tvMode', this.isTvMode ? '1' : '0');
      document.body.classList.toggle('tv-mode', this.isTvMode);
      if (this.callbacks.onToggleTvMode) {
        this.callbacks.onToggleTvMode(this.isTvMode);
      }
    });
  }

  public setActiveCategory(category: string): void {
    const chips = this.container.querySelectorAll('.header-nav-track .nm-chip');
    chips.forEach((c) => {
      const el = c as HTMLElement;
      if (el.dataset.cat?.toLowerCase() === category.toLowerCase()) {
        el.classList.add('active');
        el.setAttribute('aria-current', 'page');
      } else {
        el.classList.remove('active');
        el.removeAttribute('aria-current');
      }
    });
  }
}
