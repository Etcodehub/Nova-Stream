/**
 * CatalogManager
 * Exclusive zlive.st Channel Directory Manager.
 * Loads 277+ verified channels in 0ms from IndexedDB/masterCatalog,
 * and auto-syncs live additions from https://iptv.zlive.st/channels.json.
 */

import type { Channel } from '../types/index.ts';
import { fastCache, FastCacheManager } from '../cache/FastCacheManager.ts';
import { MASTER_CHANNELS_CATALOG } from '../masterCatalog.ts';

export type CatalogUpdateListener = (
  channels: Channel[],
  stats: { total: number; newlyAdded: number; source: string }
) => void;

const CACHE_VERSION_KEY = 'novastream_catalog_schema';
const CURRENT_CACHE_VERSION = 'zlive_only_v6';

function resolveCategory(raw: any): Channel['category'] {
  const sport = (raw.sport || '').toLowerCase();
  const name = (raw.name || '').toLowerCase();
  const id = (raw.id || '').toLowerCase();

  if (
    sport === 'sports' ||
    sport === 'f1' ||
    ['sport', 'tnt', 'sky', 'premier', 'football', 'espn', 'bein', 'dazn', 'nba', 'nfl', 'ufc', 'tennis', 'cricket', 'rugby', 'golf', 'racing', 'bundesliga', 'laliga'].some(
      (k) => name.includes(k) || id.includes(k)
    )
  ) {
    return 'Sports';
  }
  if (
    sport === 'kids' ||
    ['kid', 'cartoon', 'disney', 'nickelodeon', 'boomerang', 'treehouse', 'cbeebies', 'ytv', 'adult swim'].some(
      (k) => name.includes(k) || id.includes(k)
    )
  ) {
    return 'Kids';
  }
  if (['movie', 'cinema', 'hbo', 'film', 'starz', 'showtime', 'amc', 'paramount', 'cine'].some((k) => name.includes(k) || id.includes(k))) {
    return 'Movies';
  }
  if (sport === 'entertainment' || ['comedy', 'drama', 'series', 'tlc', 'mtv', 'vh1', 'bravo', 'fx'].some((k) => name.includes(k))) {
    return 'Entertainment';
  }
  if (['news', 'cnn', 'bbc', 'fox news', 'bloomberg', 'cnbc', 'msnbc'].some((k) => name.includes(k))) {
    return 'News';
  }
  return 'Entertainment';
}

function resolveNetworkLogo(id: string, name: string): string {
  const lower = `${id} ${name}`.toLowerCase();
  if (lower.includes('tnt')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/TNT_Sports_logo.svg/512px-TNT_Sports_logo.svg.png';
  if (lower.includes('sky sport') || lower.includes('skysport')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png';
  if (lower.includes('bein')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png';
  if (lower.includes('supersport') || lower.includes('spersport')) return 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/SuperSport_logo.svg/512px-SuperSport_logo.svg.png';
  if (lower.includes('dazn')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png';
  if (lower.includes('espn')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/512px-ESPN_wordmark.svg.png';
  if (lower.includes('f1')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/512px-F1.svg.png';
  if (lower.includes('canal')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Canal%2B_2009.svg/512px-Canal%2B_2009.svg.png';
  if (lower.includes('cartoon')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/512px-Cartoon_Network_2010_logo.svg.png';
  if (lower.includes('boomerang')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Boomerang_2014_logo.svg/512px-Boomerang_2014_logo.svg.png';
  if (lower.includes('bbc')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/BBC_Logo_2021.svg/512px-BBC_Logo_2021.svg.png';
  if (lower.includes('abc')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/American_Broadcasting_Company_Logo.svg/512px-American_Broadcasting_Company_Logo.svg.png';
  if (lower.includes('cnn')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/512px-CNN.svg.png';
  if (lower.includes('fox')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fox_Broadcasting_Company_logo_%282019%29.svg/512px-Fox_Broadcasting_Company_logo_%282019%29.svg.png';
  return 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80';
}

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
   * 0ms Instant Load (zlive.st only)
   * Automatically clears any legacy non-zlive cache on schema mismatch.
   */
  public async loadInstantCache(): Promise<{ channels: Channel[]; isFresh: boolean }> {
    const savedSchema = localStorage.getItem(CACHE_VERSION_KEY);

    if (savedSchema !== CURRENT_CACHE_VERSION) {
      try {
        await this.cache.clearCache();
        localStorage.setItem(CACHE_VERSION_KEY, CURRENT_CACHE_VERSION);
      } catch (e) {
        console.warn('[CatalogManager] Cache clear skipped:', e);
      }
    } else {
      try {
        const cached = await this.cache.loadFastCache();
        if (cached.channels.length >= MASTER_CHANNELS_CATALOG.length) {
          return { channels: cached.channels, isFresh: true };
        }
      } catch (err) {
        console.warn('[CatalogManager] FastCache read error:', err);
      }
    }

    try {
      await this.cache.saveChannels(MASTER_CHANNELS_CATALOG, 3);
      localStorage.setItem(CACHE_VERSION_KEY, CURRENT_CACHE_VERSION);
    } catch (e) {
      console.warn('[CatalogManager] FastCache write error:', e);
    }

    return { channels: MASTER_CHANNELS_CATALOG, isFresh: true };
  }

  /**
   * Background Sync exclusively from https://iptv.zlive.st/channels.json
   */
  public async autoFetchAllProviders(existingChannels: Channel[]): Promise<Channel[]> {
    if (this.isAutoFetching) return existingChannels;
    this.isAutoFetching = true;

    try {
      const res = await fetch('https://iptv.zlive.st/channels.json');
      if (!res.ok) {
        this.isAutoFetching = false;
        return existingChannels;
      }

      const rawList = (await res.json()) as any[];
      if (!Array.isArray(rawList) || rawList.length === 0) {
        this.isAutoFetching = false;
        return existingChannels;
      }

      const masterMap = new Map<string, Channel>();
      for (const ch of MASTER_CHANNELS_CATALOG) {
        masterMap.set(ch.id, ch);
      }

      const syncedChannels: Channel[] = [];
      for (const raw of rawList) {
        const cid = raw.id;
        if (!cid || cid === 'sky-sports-f1-4k') continue;

        const existing = masterMap.get(cid);
        if (existing) {
          syncedChannels.push(existing);
          continue;
        }

        const name = raw.name || cid;
        const cat = resolveCategory(raw);
        const logo = resolveNetworkLogo(cid, name);
        const quality = raw.quality || 'FHD';

        syncedChannels.push({
          id: cid,
          name,
          category: cat,
          logoUrl: logo,
          network: raw.sport || 'Live TV',
          isTop: quality === '4K' || name.toLowerCase().includes('premier'),
          sources: [
            {
              id: `src_${cid}_direct`,
              label: 'Server 1 (Direct Live)',
              url: `https://zlive.st/embed/${cid}?radius=7&frame=0&brand=0`,
              priority: 1,
              protocol: 'embed',
              requiresProxy: false,
              state: 'HEALTHY',
            },
          ],
          currentProgram: {
            id: `epg_${cid}`,
            title: `${name} Live Broadcast`,
            description: `${quality} • Dedicated Live Transmission`,
            startTime: Date.now() - 1000 * 60 * 15,
            endTime: Date.now() + 1000 * 60 * 75,
          },
          updatedAt: Date.now(),
        });
      }

      if (syncedChannels.length > 0) {
        await this.cache.saveChannels(syncedChannels, 4);
        this.isAutoFetching = false;
        this.listeners.forEach((l) =>
          l(syncedChannels, {
            total: syncedChannels.length,
            newlyAdded: Math.max(0, syncedChannels.length - existingChannels.length),
            source: 'zlive.st',
          })
        );
        return syncedChannels;
      }

      this.isAutoFetching = false;
      return existingChannels;
    } catch (err) {
      console.warn('[CatalogManager] Background zlive.st sync skipped:', err);
      this.isAutoFetching = false;
      return existingChannels;
    }
  }
}

export const catalogManager = new CatalogManager();
