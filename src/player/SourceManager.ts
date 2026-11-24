/**
 * SourceManager
 * Browser-grade equivalent of Reezn's PlayerLiveSourceManager.
 * Manages multi-server failover, health probing, and circuit-breaking.
 */

import type { StreamSource, ExtractionState } from '../types/index.ts';

export interface SourceFailoverEvent {
  previousSource: StreamSource;
  newSource: StreamSource;
  reason: string;
  timestamp: number;
}

export type SourceChangeListener = (source: StreamSource, reason: string) => void;
export type HealthChangeListener = (sourceId: string, state: ExtractionState) => void;

export class SourceManager {
  private sources: StreamSource[] = [];
  private activeSourceIndex = 0;
  private quarantinedSources: Map<string, number> = new Map(); // sourceId -> unquarantineTimestamp
  private readonly defaultQuarantineDurationMs = 60000; // 60s cooldown

  private onSourceChangeListeners: Set<SourceChangeListener> = new Set();
  private onHealthChangeListeners: Set<HealthChangeListener> = new Set();

  constructor(initialSources: StreamSource[] = []) {
    this.setSources(initialSources);
  }

  public setSources(sources: StreamSource[]): void {
    // Sort sources by priority ascending (1 = highest priority)
    this.sources = [...sources].sort((a, b) => a.priority - b.priority);
    this.activeSourceIndex = 0;
    this.quaternizeCleanUp();
  }

  public getSources(): StreamSource[] {
    return [...this.sources];
  }

  public getActiveSource(): StreamSource | null {
    if (this.sources.length === 0) return null;
    return this.sources[this.activeSourceIndex] || this.sources[0];
  }

  public onSourceChange(cb: SourceChangeListener): () => void {
    this.onSourceChangeListeners.add(cb);
    return () => this.onSourceChangeListeners.delete(cb);
  }

  public onHealthChange(cb: HealthChangeListener): () => void {
    this.onHealthChangeListeners.add(cb);
    return () => this.onHealthChangeListeners.delete(cb);
  }

  /**
   * Automatic Failover Engine
   * Called when a fatal network error, 404, or unrecoverable buffer stall occurs.
   */
  public advanceToNextSource(failureReason: string): StreamSource | null {
    if (this.sources.length <= 1) {
      console.warn('[SourceManager] No alternative backup source available.');
      return null;
    }

    const failedSource = this.getActiveSource();
    if (failedSource) {
      this.markSourceFailed(failedSource.id, failureReason);
    }

    // Find the next available non-quarantined source
    const now = Date.now();
    let nextIndex = (this.activeSourceIndex + 1) % this.sources.length;
    let foundEligibleIndex = -1;

    for (let i = 0; i < this.sources.length; i++) {
      const candidate = this.sources[nextIndex];
      const quarantineUntil = this.quarantinedSources.get(candidate.id) || 0;

      if (now >= quarantineUntil) {
        foundEligibleIndex = nextIndex;
        break;
      }
      nextIndex = (nextIndex + 1) % this.sources.length;
    }

    // If all are quarantined, reset quarantine for the highest priority candidate
    if (foundEligibleIndex === -1) {
      console.warn('[SourceManager] All sources quarantined. Resetting highest priority source.');
      this.quarantinedSources.clear();
      foundEligibleIndex = 0;
    }

    this.activeSourceIndex = foundEligibleIndex;
    const newSource = this.sources[this.activeSourceIndex];
    newSource.state = 'CHECKING';
    this.notifyHealthChange(newSource.id, 'CHECKING');

    if (failedSource) {
      this.notifySourceChange(newSource, failureReason);
    }

    return newSource;
  }

  /**
   * User-initiated server selection (Server 1 / Server 2 / Server 3)
   */
  public manuallySelectSource(sourceId: string): StreamSource | null {
    const idx = this.sources.findIndex((s) => s.id === sourceId);
    if (idx === -1) return null;

    this.activeSourceIndex = idx;
    const selected = this.sources[idx];
    selected.state = 'CHECKING';
    this.notifyHealthChange(selected.id, 'CHECKING');
    this.notifySourceChange(selected, 'Manual User Selection');
    return selected;
  }

  /**
   * Reports a source as healthy once playback starts playing
   */
  public markSourceHealthy(sourceId: string): void {
    const src = this.sources.find((s) => s.id === sourceId);
    if (src) {
      src.state = 'HEALTHY';
      src.failureCount = 0;
      this.quarantinedSources.delete(sourceId);
      this.notifyHealthChange(sourceId, 'HEALTHY');
    }
  }

  /**
   * Quarantines a failing source
   */
  public markSourceFailed(sourceId: string, reason: string): void {
    const src = this.sources.find((s) => s.id === sourceId);
    if (src) {
      src.state = 'FAILED';
      src.failureCount = (src.failureCount || 0) + 1;
      const cooldown = this.defaultQuarantineDurationMs * Math.min(src.failureCount, 5);
      this.quarantinedSources.set(sourceId, Date.now() + cooldown);
      this.notifyHealthChange(sourceId, 'FAILED');
      console.warn(`[SourceManager] Source ${sourceId} marked FAILED (${reason}). Quarantined for ${cooldown / 1000}s`);
    }
  }

  private quaternizeCleanUp(): void {
    const now = Date.now();
    for (const [id, until] of this.quarantinedSources.entries()) {
      if (now >= until) {
        this.quarantinedSources.delete(id);
      }
    }
  }

  private notifySourceChange(source: StreamSource, reason: string): void {
    this.onSourceChangeListeners.forEach((cb) => cb(source, reason));
  }

  private notifyHealthChange(sourceId: string, state: ExtractionState): void {
    this.onHealthChangeListeners.forEach((cb) => cb(sourceId, state));
  }
}
