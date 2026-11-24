/**
 * FastCacheManager
 * Browser IndexedDB persistence engine providing 0ms startup time.
 * Replicates the native FAST_CACHE_FILE architecture in a web-native environment.
 */

import { openDB, type IDBPDatabase } from 'idb';
import type { Channel, DeltaItem, FastCacheMetadata } from '../types/index.ts';

const DB_NAME = 'NovaStream_FastCache';
const DB_VERSION = 1;

export class FastCacheManager {
  private dbPromise: Promise<IDBPDatabase> | null = null;

  public async getDB(): Promise<IDBPDatabase> {
    if (!this.dbPromise) {
      this.dbPromise = openDB(DB_NAME, DB_VERSION, {
        upgrade(db) {
          if (!db.objectStoreNames.contains('channels')) {
            const channelStore = db.createObjectStore('channels', { keyPath: 'id' });
            channelStore.createIndex('by_category', 'category');
            channelStore.createIndex('by_updatedAt', 'updatedAt');
          }
          if (!db.objectStoreNames.contains('metadata')) {
            db.createObjectStore('metadata');
          }
        },
      });
    }
    return this.dbPromise;
  }

  /**
   * 0ms Instant Cache Load
   * Reads all cached channels and the local activeRevision from IndexedDB synchronously on app load.
   */
  public async loadFastCache(): Promise<{ channels: Channel[]; metadata: FastCacheMetadata }> {
    const db = await this.getDB();
    const channels = (await db.getAll('channels')) as Channel[];
    const metaRecord = (await db.get('metadata', 'sync_meta')) as FastCacheMetadata | undefined;

    const metadata: FastCacheMetadata = metaRecord ?? {
      activeRevision: 0,
      lastSyncTimestamp: 0,
      schemaVersion: DB_VERSION,
      totalChannels: channels.length,
    };

    return { channels, metadata };
  }

  /**
   * Bulk persists complete initial channels catalog
   */
  public async saveChannels(channels: Channel[], revision: number): Promise<void> {
    const db = await this.getDB();
    const tx = db.transaction(['channels', 'metadata'], 'readwrite');
    const channelStore = tx.objectStore('channels');

    for (const channel of channels) {
      await channelStore.put(channel);
    }

    const metadata: FastCacheMetadata = {
      activeRevision: revision,
      lastSyncTimestamp: Date.now(),
      schemaVersion: DB_VERSION,
      totalChannels: channels.length,
    };

    await tx.objectStore('metadata').put(metadata, 'sync_meta');
    await tx.done;
  }

  /**
   * Atomic Delta Application
   * Applies UPSERT and DELETE operations delivered by the V3 delta sync endpoint.
   */
  public async applyDelta(deltas: DeltaItem[], newRevision: number): Promise<Channel[]> {
    const db = await this.getDB();
    const tx = db.transaction(['channels', 'metadata'], 'readwrite');
    const channelStore = tx.objectStore('channels');

    for (const item of deltas) {
      if (item.action === 'UPSERT' && item.channel) {
        await channelStore.put(item.channel);
      } else if (item.action === 'DELETE') {
        await channelStore.delete(item.channelId);
      }
    }

    const allChannels = (await channelStore.getAll()) as Channel[];

    const metadata: FastCacheMetadata = {
      activeRevision: newRevision,
      lastSyncTimestamp: Date.now(),
      schemaVersion: DB_VERSION,
      totalChannels: allChannels.length,
    };

    await tx.objectStore('metadata').put(metadata, 'sync_meta');
    await tx.done;

    return allChannels;
  }

  /**
   * Get currently stored activeRevision
   */
  public async getActiveRevision(): Promise<number> {
    const db = await this.getDB();
    const meta = (await db.get('metadata', 'sync_meta')) as FastCacheMetadata | undefined;
    return meta?.activeRevision ?? 0;
  }

  /**
   * Clear local database for cache resets
   */
  public async clearCache(): Promise<void> {
    const db = await this.getDB();
    const tx = db.transaction(['channels', 'metadata'], 'readwrite');
    await tx.objectStore('channels').clear();
    await tx.objectStore('metadata').clear();
    await tx.done;
  }
}

export const fastCache = new FastCacheManager();
