/**
 * CatalogManager
 * Automated Stale-While-Revalidate Ingest Engine.
 * Ingests live channels across both providers (IPTV-org and embed feeds / catalog.json),
 * assigns authentic network logos, deduplicates, and caches to IndexedDB for 0ms startup.
 */

import type { Channel, StreamSource } from '../types/index.ts';
import { fastCache, FastCacheManager } from '../cache/FastCacheManager.ts';
import { iptvOrgService, IPTV_ORG_ENDPOINTS } from './iptvOrg.ts';
import { INITIAL_MOCK_CHANNELS } from '../mockData.ts';

export type CatalogUpdateListener = (
  channels: Channel[],
  stats: { total: number; newlyAdded: number; source: string }
) => void;

/**
 * Resolves an authentic vector or high-resolution logo for known television networks.
 */
function resolveNetworkLogo(name: string, network = '', group = ''): string {
  const n = `${name} ${network} ${group}`.toLowerCase();
  if (n.includes('sky sport') || n.includes('sky premier') || n.includes('sky main')) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png';
  }
  if (n.includes('supersport')) {
    return 'https://upload.wikimedia.org/wikipedia/en/thumb/6/66/SuperSport_logo.svg/512px-SuperSport_logo.svg.png';
  }
  if (n.includes('tnt sport')) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/TNT_Sports_logo.svg/512px-TNT_Sports_logo.svg.png';
  }
  if (n.includes('bein')) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png';
  }
  if (n.includes('astro')) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Astro_SuperSport_logo_%282021%29.svg/512px-Astro_SuperSport_logo_%282021%29.svg.png';
  }
  if (n.includes('arena sport')) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Arena_Sport_logo.svg/512px-Arena_Sport_logo.svg.png';
  }
  if (n.includes('espn')) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/ESPN_logo.svg/512px-ESPN_logo.svg.png';
  }
  if (n.includes('fox sport') || n.includes('fs1') || n.includes('fs2')) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Fox_Sports_logo.svg/512px-Fox_Sports_logo.svg.png';
  }
  if (n.includes('f1') || n.includes('formula')) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/512px-F1.svg.png';
  }
  if (n.includes('ufc')) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/UFC_logo.svg/512px-UFC_logo.svg.png';
  }
  if (n.includes('nba')) {
    return 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/315px-National_Basketball_Association_logo.svg.png';
  }
  if (n.includes('premier league') || n.includes('epl')) {
    return 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/512px-Premier_League_Logo.svg.png';
  }
  if (n.includes('laliga')) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/LaLiga_logo_2023.svg/512px-LaLiga_logo_2023.svg.png';
  }
  if (n.includes('bbc')) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/BBC_Logo_2021.svg/512px-BBC_Logo_2021.svg.png';
  }
  if (n.includes('cnn')) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/512px-CNN.svg.png';
  }
  if (n.includes('al jazeera')) {
    return 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Al_Jazeera_English_logo.svg/512px-Al_Jazeera_English_logo.svg.png';
  }
  if (n.includes('euro') || n.includes('euronews')) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Euronews_2016_logo.svg/512px-Euronews_2016_logo.svg.png';
  }
  if (n.includes('disney')) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney_Channel_logo.svg/512px-Disney_Channel_logo.svg.png';
  }
  if (n.includes('cartoon') || n.includes('toon') || n.includes('animation')) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/512px-Cartoon_Network_2010_logo.svg.png';
  }
  if (n.includes('nickelodeon') || n.includes('nick')) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Nickelodeon_2009_logo.svg/512px-Nickelodeon_2009_logo.svg.png';
  }
  if (n.includes('abc')) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/ABC_logo_2021.svg/512px-ABC_logo_2021.svg.png';
  }
  if (n.includes('cbs')) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/CBS_logo.svg/512px-CBS_logo.svg.png';
  }
  if (n.includes('nbc')) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/NBC_logo_2022.svg/512px-NBC_logo_2022.svg.png';
  }
  if (n.includes('cinema') || n.includes('movie') || n.includes('film')) {
    return 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=200&q=80';
  }
  if (n.includes('sport')) {
    return 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=200&q=80';
  }
  return 'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=200&q=80';
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
   * 0ms Instant Load (Cache Once)
   * If channels are already cached in IndexedDB, returns immediately.
   */
  public async loadInstantCache(): Promise<{ channels: Channel[]; isFresh: boolean }> {
    const cached = await this.cache.loadFastCache();

    if (cached.channels.length > 30) {
      // Catalog is already cached locally with a rich channel set!
      return { channels: cached.channels, isFresh: true };
    }

    // First launch or sparse cache: seed with baseline mock channels
    await this.cache.saveChannels(INITIAL_MOCK_CHANNELS, 1);
    return { channels: INITIAL_MOCK_CHANNELS, isFresh: false };
  }

  /**
   * Background Auto-Fetch across both providers:
   * 1. Official IPTV-org M3U playlists across all categories
   * 2. Curated 79 premier sports & movie channels from catalog.json + embed streams (zlive auto-abc)
   */
  public async autoFetchAllProviders(
    existingChannels: Channel[]
  ): Promise<Channel[]> {
    if (this.isAutoFetching) return existingChannels;
    this.isAutoFetching = true;

    console.info('[CatalogManager] Starting comprehensive background ingest across both providers...');

    try {
      const channelMap = new Map<string, Channel>();

      // 1. Keep existing / cached channels
      for (const ch of existingChannels) {
        channelMap.set(ch.id, ch);
      }

      // Ensure bundled base channels are always present
      for (const ch of INITIAL_MOCK_CHANNELS) {
        if (!channelMap.has(ch.id)) {
          channelMap.set(ch.id, ch);
        }
      }

      // 2. Add Direct Embed Channels (Provider 2: zlive.st feeds without external branding)
      const embedFeeds: Channel[] = [
        {
          id: 'embed_auto_abc',
          name: 'ABC Live HD Network',
          category: 'Entertainment',
          logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/ABC_logo_2021.svg/512px-ABC_logo_2021.svg.png',
          network: 'ABC Network',
          isTop: true,
          sources: [
            {
              id: 'src_embed_auto_abc',
              label: 'Server 1 (High Definition Live)',
              url: 'https://zlive.st/embed/auto-abc?radius=7&frame=0&brand=0',
              priority: 1,
              protocol: 'embed',
              requiresProxy: false,
              state: 'HEALTHY',
            },
          ],
          currentProgram: {
            id: 'epg_auto_abc',
            title: 'ABC Primetime Live Broadcast',
            description: 'Live continuous network television broadcast.',
            startTime: Date.now() - 1000 * 60 * 30,
            endTime: Date.now() + 1000 * 60 * 90,
          },
          updatedAt: Date.now(),
        },
      ];

      for (const ch of embedFeeds) {
        channelMap.set(ch.id, ch);
      }

      // 3. Fetch catalog.json channels (79 curated Premier Sports, Cinema & News feeds)
      try {
        const catalogRes = await fetch('/catalog.json');
        if (catalogRes.ok) {
          const catalogData = (await catalogRes.json()) as { channels?: any[] };
          const catalogList = Array.isArray(catalogData.channels) ? catalogData.channels : [];

          for (const raw of catalogList) {
            const chId = `cat_${raw.id}`;
            const isEmbed =
              raw.url?.includes('/embed/') ||
              raw.url?.includes('.st/embed') ||
              raw.url?.includes('embedsports');

            const groupLower = (raw.group || '').toLowerCase();
            let category: Channel['category'] = 'Sports';
            if (groupLower.includes('news')) {
              category = 'News';
            } else if (groupLower.includes('cinema') || groupLower.includes('movie') || groupLower.includes('docs')) {
              category = 'Movies';
            } else if (groupLower.includes('kids') || groupLower.includes('animation')) {
              category = 'Kids';
            } else if (groupLower.includes('entertainment')) {
              category = 'Entertainment';
            } else {
              category = 'Sports';
            }

            const logo = raw.logo || resolveNetworkLogo(raw.name, raw.network, raw.group);
            const isTop = Boolean(raw.isTopTen || raw.name?.includes('Premier League') || raw.name?.includes('Main Event'));

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
              category,
              logoUrl: logo,
              network: raw.network,
              isTop,
              sources: [source],
              currentProgram: {
                id: `epg_${chId}`,
                title: raw.eventSubtitle || `${raw.name} Live Matchday`,
                description: `${raw.qualityBadge || '1080p HD'} • ${raw.group || 'Live Transmission'}`,
                startTime: Date.now() - 1000 * 60 * 15,
                endTime: Date.now() + 1000 * 60 * 75,
              },
              updatedAt: Date.now(),
            });
          }
        }
      } catch (err) {
        console.warn('[CatalogManager] catalog.json auto-fetch skipped:', err);
      }

      // 4. Ingest IPTV-org Categories in parallel (Sports, Movies, Kids, News, Entertainment, Documentary)
      const iptvPromises = IPTV_ORG_ENDPOINTS.map((endpoint) =>
        iptvOrgService.fetchCategoryChannels(endpoint, 80)
      );

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

      // 5. Atomically persist enriched catalog to IndexedDB
      const currentRev = await this.cache.getActiveRevision();
      const nextRev = newlyAdded > 0 ? currentRev + 1 : currentRev;
      await this.cache.saveChannels(mergedChannels, nextRev);

      console.info(
        `[CatalogManager] Ingest complete! Total channels available: ${mergedChannels.length} (+${newlyAdded} new)`
      );

      this.isAutoFetching = false;
      this.listeners.forEach((l) =>
        l(mergedChannels, {
          total: mergedChannels.length,
          newlyAdded,
          source: 'All-Providers',
        })
      );

      return mergedChannels;
    } catch (err) {
      console.error('[CatalogManager] Auto-fetch error:', err);
      this.isAutoFetching = false;
      return existingChannels;
    }
  }
}

export const catalogManager = new CatalogManager();
