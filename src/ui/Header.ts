/**
 * Header Component
 * Commercial streaming navigation bar (Prime Video / Netflix style)
 * Clean, modern consumer navigation without technical debug badges.
 */

export interface HeaderCallbacks {
  onCategorySelect: (category: string) => void;
  onSearch: (query: string) => void;
}

export class Header {
  private container: HTMLElement;
  private callbacks: HeaderCallbacks;
  private searchInput!: HTMLInputElement;

  constructor(container: HTMLElement, callbacks: HeaderCallbacks) {
    this.container = container;
    this.callbacks = callbacks;
    this.render();
  }

  private render(): void {
    this.container.innerHTML = `
      <header class="app-header">
        <div class="header-left">
          <div class="brand-logo" role="button" tabindex="0" id="brand-home">
            <span class="logo-accent">NOVA</span>STREAM
          </div>

          <nav class="nav-links">
            <button class="nav-link active" data-cat="ALL">Home</button>
            <button class="nav-link" data-cat="Sports">Sport</button>
            <button class="nav-link" data-cat="ALL_CHANNELS">All TV Channels</button>
          </nav>
        </div>

        <div class="header-right">
          <div class="header-search-box">
            <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              id="header-search-input"
              class="header-search-input"
              placeholder="Search matches, movies, channels..."
            />
          </div>

          <div class="user-profile-badge" title="NovaStream VIP">
            <span class="profile-avatar">N</span>
          </div>
        </div>
      </header>
    `;

    this.searchInput = this.container.querySelector('#header-search-input')!;

    this.searchInput.addEventListener('input', () => {
      this.callbacks.onSearch(this.searchInput.value.trim().toLowerCase());
    });

    const navLinks = this.container.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        navLinks.forEach((l) => l.classList.remove('active'));
        target.classList.add('active');
        const cat = target.dataset.cat || 'ALL';
        this.callbacks.onCategorySelect(cat);
      });
    });

    const brandHome = this.container.querySelector('#brand-home');
    brandHome?.addEventListener('click', () => {
      navLinks.forEach((l) => l.classList.remove('active'));
      navLinks[0]?.classList.add('active');
      this.callbacks.onCategorySelect('ALL');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  public setActiveCategory(category: string): void {
    const navLinks = this.container.querySelectorAll('.nav-link');
    navLinks.forEach((l) => {
      const el = l as HTMLElement;
      if (el.dataset.cat?.toLowerCase() === category.toLowerCase()) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }
}
