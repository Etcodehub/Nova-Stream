/**
 * DeltaSyncService
 * Implements the V3 Monotonic Delta Sync protocol.
 * Replaces heavy full-catalog redownloads with incremental delta patches.
 * Features exponential backoff with jitter for resilient network recovery.
 */

import type { Channel, DeltaItem, DeltaSyncResponse } from '../types/index.ts';
import { fastCache, FastCacheManager } from '../cache/FastCacheManager.ts';

export interface SyncListener {
  onSyncStarted: () => void;
  onSyncCompleted: (channels: Channel[], revision: number, deltaCount: number) => void;
  onSyncFailed: (error: Error, nextRetryMs: number) => void;
}

export class DeltaSyncService {
  private cache: FastCacheManager;
  private syncApiUrl: string;
  private isSyncing = false;
  private retryAttempt = 0;
  private readonly maxBackoffMs = 30000;
  private readonly baseBackoffMs = 1000;
  private listeners: Set<SyncListener> = new Set();

  constructor(cache: FastCacheManager = fastCache, syncApiUrl = '/api/v3/sync') {
    this.cache = cache;
    this.syncApiUrl = syncApiUrl;
  }

  public addListener(listener: SyncListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  /**
   * Calculates exponential backoff with decorrelated jitter
   * Formula: t = min(maxBackoff, base * 2^attempt + random_jitter)
   */
  public calculateBackoffMs(attempt: number): number {
    const exponential = this.baseBackoffMs * Math.pow(2, attempt);
    const capped = Math.min(this.maxBackoffMs, exponential);
    const jitter = Math.random() * (capped * 0.3); // 30% jitter
    return Math.floor(capped + jitter);
  }

  /**
   * Executes delta sync using monotonic activeRevision
   */
  public async performDeltaSync(): Promise<{ channels: Channel[]; revision: number; deltaCount: number }> {
    if (this.isSyncing) {
      const { channels, metadata } = await this.cache.loadFastCache();
      return { channels, revision: metadata.activeRevision, deltaCount: 0 };
    }

    this.isSyncing = true;
    this.listeners.forEach((l) => l.onSyncStarted());

    try {
      const currentRevision = await this.cache.getActiveRevision();
      const response = await this.fetchDeltas(currentRevision);

      let updatedChannels: Channel[];
      if (response.deltas.length === 0) {
        const cached = await this.cache.loadFastCache();
        updatedChannels = cached.channels;
      } else {
        updatedChannels = await this.cache.applyDelta(response.deltas, response.activeRevision);
      }

      this.retryAttempt = 0;
      this.isSyncing = false;

      this.listeners.forEach((l) =>
        l.onSyncCompleted(updatedChannels, response.activeRevision, response.deltas.length)
      );

      return {
        channels: updatedChannels,
        revision: response.activeRevision,
        deltaCount: response.deltas.length,
      };
    } catch (err: unknown) {
      this.isSyncing = false;
      this.retryAttempt++;
      const nextRetry = this.calculateBackoffMs(this.retryAttempt);
      const error = err instanceof Error ? err : new Error(String(err));

      this.listeners.forEach((l) => l.onSyncFailed(error, nextRetry));
      throw error;
    }
  }

  /**
   * Fetches delta changes from the backend.
   * If running in standalone client-mode, falls back to simulated delta API.
   */
  private async fetchDeltas(sinceRevision: number): Promise<DeltaSyncResponse> {
    try {
      const url = `${this.syncApiUrl}?since_revision=${sinceRevision}`;
      const res = await fetch(url, {
        headers: {
          Accept: 'application/json',
          'X-Client-Revision': String(sinceRevision),
        },
      });

      if (res.status === 304) {
        return {
          activeRevision: sinceRevision,
          previousRevision: sinceRevision,
          deltas: [],
          serverTime: Date.now(),
        };
      }

      if (res.ok) {
        return (await res.json()) as DeltaSyncResponse;
      }
    } catch {
      // In web demo mode without an active remote server, provide mock delta response
    }

    return this.mockServerSyncResponse(sinceRevision);
  }

  /**
   * Mock Delta Sync Engine (for local offline or standalone demo use)
   */
  public mockServerSyncResponse(sinceRevision: number): DeltaSyncResponse {
    // If client already has latest revision, return empty delta
    if (sinceRevision >= 3) {
      return {
        activeRevision: sinceRevision,
        previousRevision: sinceRevision,
        deltas: [],
        serverTime: Date.now(),
      };
    }

    // Deliver incremental revision updates
    const newRevision = sinceRevision + 1;
    const sampleDeltas: DeltaItem[] = [
      {
        action: 'UPSERT',
        channelId: `ch_sync_${newRevision}`,
        channel: {
          id: `ch_sync_${newRevision}`,
          name: `Nova Sports HD (Rev ${newRevision})`,
          category: 'Sports',
          logoUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=128&q=80',
          updatedAt: Date.now(),
          sources: [
            {
              id: `src_rev${newRevision}_1`,
              label: 'Server 1 (Low Latency CDN)',
              url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
              priority: 1,
              protocol: 'hls',
              state: 'HEALTHY',
            },
            {
              id: `src_rev${newRevision}_2`,
              label: 'Server 2 (Backup Akamai)',
              url: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',
              priority: 2,
              protocol: 'hls',
              state: 'IDLE',
            },
          ],
          currentProgram: {
            id: `prog_rev${newRevision}`,
            title: `Live Match: Red Stars vs Blue Wings`,
            startTime: Date.now() - 1000 * 60 * 30,
            endTime: Date.now() + 1000 * 60 * 60,
          },
        },
      },
    ];

    return {
      activeRevision: newRevision,
      previousRevision: sinceRevision,
      deltas: sampleDeltas,
      serverTime: Date.now(),
    };
  }
}

export const deltaSync = new DeltaSyncService();
