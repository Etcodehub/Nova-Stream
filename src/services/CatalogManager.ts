/**
 * CatalogManager
 * Automated Stale-While-Revalidate Ingest Engine.
 * Auto-fetches live channels from iptv-org and catalog.json in the background,
 * deduplicates them, and atomically persists them to IndexedDB for 0ms startup on all devices.
 */

import type { Channel, StreamSource } from '../types/index.ts';
import { fastCache, FastCacheManager } from '../cache/FastCacheManager.ts';
import { iptvOrgService, IPTV_ORG_ENDPOINTS } from './iptvOrg.ts';
import { INITIAL_MOCK_CHANNELS } from '../mockData.ts';

export type CatalogUpdateListener = (
  channels: Channel[],
  stats: { total: number; newlyAdded: number; source: string }
) => void;

export class CatalogManager {
  private cache: FastCacheManager;
  private isAutoFetching = false;
  private listeners: Set<CatalogUpdateListener> = new Set();

  constructor(cache: FastCacheManager = fastCache) {
    this.cache = cache;
  }

  public onCatalogUpdated(listener: CatalogUpdateListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  /**
   * 0ms Instant Load
   * Returns locally cached channels immediately without waiting for any network request.
   */
  public async loadInstantCache(): Promise<{ channels: Channel[]; isFresh: boolean }> {
    const cached = await this.cache.loadFastCache();

    if (cached.channels.length > 0) {
      // Return cached instantly
      return { channels: cached.channels, isFresh: true };
    }

    // First time on a new device: seed immediately with bundled mock channels
    await this.cache.saveChannels(INITIAL_MOCK_CHANNELS, 1);
    return { channels: INITIAL_MOCK_CHANNELS, isFresh: false };
  }

  /**
   * Non-Blocking Background Auto-Fetch
   * Automatically fetches live IPTV-org categories and catalog.json,
   * merges with existing channels, and persists to IndexedDB.
   */
  public async autoFetchAllProviders(
    existingChannels: Channel[]
  ): Promise<Channel[]> {
    if (this.isAutoFetching) return existingChannels;
    this.isAutoFetching = true;

    console.info('[CatalogManager] Starting background auto-fetch across providers...');

    try {
      const channelMap = new Map<string, Channel>();

      // 1. Keep existing / cached channels
      for (const ch of existingChannels) {
        channelMap.set(ch.id, ch);
      }

      // Ensure bundled mock channels (e.g. zlive.st sports) are always present
      for (const ch of INITIAL_MOCK_CHANNELS) {
        if (!channelMap.has(ch.id)) {
          channelMap.set(ch.id, ch);
        }
      }

      // 2. Fetch catalog.json channels (79 curated sports & cinema feeds)
      try {
        const catalogRes = await fetch('/catalog.json');
        if (catalogRes.ok) {
          const catalogData = (await catalogRes.json()) as { channels?: any[] };
          const catalogList = Array.isArray(catalogData.channels) ? catalogData.channels : [];

          for (const raw of catalogList) {
            const chId = `cat_${raw.id}`;
            if (!channelMap.has(chId)) {
              const isEmbed =
                raw.url?.includes('/embed/') ||
                raw.url?.includes('zlive.st') ||
                raw.url?.includes('embedsports');

              const source: StreamSource = {
                id: `${chId}_src1`,
                label: 'Server 1 (Primary Feed)',
                url: raw.url,
                priority: 1,
                protocol: isEmbed ? 'embed' : 'hls',
                requiresProxy: !isEmbed,
                state: 'HEALTHY',
              };

              channelMap.set(chId, {
                id: chId,
                name: raw.name || 'Live Channel',
                category: raw.group === 'Premier Sports' ? 'Sports' : 'Entertainment',
                logoUrl:
                  raw.logo ||
                  'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=128&q=80',
                sources: [source],
                currentProgram: {
                  id: `epg_${chId}`,
                  title: raw.eventSubtitle || `${raw.name} Live Broadcast`,
                  description: `${raw.qualityBadge || 'HD'} Live transmission`,
                  startTime: Date.now() - 1000 * 60 * 15,
                  endTime: Date.now() + 1000 * 60 * 75,
                },
                updatedAt: Date.now(),
              });
            }
          }
        }
      } catch (err) {
        console.warn('[CatalogManager] catalog.json auto-fetch skipped:', err);
      }

      // 3. Auto-fetch IPTV-org Categories in parallel
      const iptvPromises = [
        iptvOrgService.fetchCategoryChannels(IPTV_ORG_ENDPOINTS[0], 30), // Sports
        iptvOrgService.fetchCategoryChannels(IPTV_ORG_ENDPOINTS[1], 15), // News
        iptvOrgService.fetchCategoryChannels(IPTV_ORG_ENDPOINTS[2], 15), // Movies
      ];

      const results = await Promise.allSettled(iptvPromises);
      for (const res of results) {
        if (res.status === 'fulfilled') {
          for (const ch of res.value) {
            if (!channelMap.has(ch.id)) {
              channelMap.set(ch.id, ch);
            }
          }
        }
      }

      const mergedChannels = Array.from(channelMap.values());
      const newlyAdded = mergedChannels.length - existingChannels.length;

      // 4. Atomically persist enriched catalog to IndexedDB
      const currentRev = await this.cache.getActiveRevision();
      const nextRev = newlyAdded > 0 ? currentRev + 1 : currentRev;
      await this.cache.saveChannels(mergedChannels, nextRev);

      console.info(
        `[CatalogManager] Auto-fetch complete! Total channels cached: ${mergedChannels.length} (+${newlyAdded} new)`
      );

      this.isAutoFetching = false;
      this.listeners.forEach((l) =>
        l(mergedChannels, {
          total: mergedChannels.length,
          newlyAdded,
          source: 'AutoFetch Engine',
        })
      );

      return mergedChannels;
    } catch (err) {
      this.isAutoFetching = false;
      console.error('[CatalogManager] Auto-fetch error:', err);
      return existingChannels;
    }
  }
}

export const catalogManager = new CatalogManager();
