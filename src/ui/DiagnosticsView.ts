/**
 * DiagnosticsView Component
 * Renders the real-time failover telemetry log and system architecture monitor.
 */

import type { PlayerPlaybackState } from '../types/index.ts';

export class DiagnosticsView {
  private container: HTMLElement;
  private failoverCountBadge!: HTMLElement;
  private failoverLogList!: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.render();
  }

  private render(): void {
    this.container.innerHTML = `
      <div class="diagnostics-wrapper">
        <!-- Failover Incident Log -->
        <div class="card glass-card">
          <div class="card-title">
            <div class="title-left">
              <span class="pulse-icon-blue">🛡️</span>
              <span>Failover Telemetry</span>
            </div>
            <span class="badge badge-cyan" id="failover-count-badge">0 events</span>
          </div>

          <div class="failover-log" id="failover-log-list">
            <div class="log-empty-state">
              No failover events recorded. All candidate streams operating at peak health.
            </div>
          </div>
        </div>

        <!-- System Architecture Card -->
        <div class="card glass-card">
          <div class="card-title">
            <div class="title-left">
              <span>⚡</span>
              <span>Architecture Specs</span>
            </div>
            <span class="badge badge-purple">Production</span>
          </div>

          <ul class="specs-list">
            <li>
              <span class="spec-label">Storage:</span>
              <span class="spec-val">0ms IndexedDB (FAST_CACHE)</span>
            </li>
            <li>
              <span class="spec-label">Protocol:</span>
              <span class="spec-val">V3 Monotonic Delta Sync</span>
            </li>
            <li>
              <span class="spec-label">Failover:</span>
              <span class="spec-val">Dynamic Quarantine & Circuit Breaker</span>
            </li>
            <li>
              <span class="spec-label">Edge Gateway:</span>
              <span class="spec-val">Cloudflare Worker (etcodehub)</span>
            </li>
            <li>
              <span class="spec-label">Security:</span>
              <span class="spec-val">W3C ClearKey EME DRM</span>
            </li>
          </ul>
        </div>
      </div>
    `;

    this.failoverCountBadge = this.container.querySelector('#failover-count-badge')!;
    this.failoverLogList = this.container.querySelector('#failover-log-list')!;
  }

  public updateState(state: PlayerPlaybackState): void {
    if (this.failoverCountBadge) {
      this.failoverCountBadge.textContent = `${state.failoverHistory.length} events`;
    }

    if (this.failoverLogList) {
      if (state.failoverHistory.length === 0) {
        this.failoverLogList.innerHTML = `
          <div class="log-empty-state">
            No failover events recorded. All candidate streams operating at peak health.
          </div>
        `;
      } else {
        this.failoverLogList.innerHTML = state.failoverHistory
          .map(
            (h) => `
            <div class="log-entry">
              <div class="log-time">${new Date(h.timestamp).toLocaleTimeString()} • Auto-Switched</div>
              <div class="log-desc">
                From <span class="highlight-source">${h.label}</span>: <em>${h.reason}</em>
              </div>
            </div>
          `
          )
          .join('');
      }
    }
  }
}
