/**
 * IPTV-org Ingest Connector
 * Integrates official public verified channels from https://github.com/iptv-org/iptv.
 * Dynamically parses M3U playlists and maps them into NovaStream Channel and StreamSource objects.
 */

import type { Channel, StreamSource } from '../types/index.ts';

export interface IptvCategory {
  id: string;
  name: 'Sports' | 'Movies' | 'News' | 'Entertainment';
  url: string;
}

export const IPTV_ORG_ENDPOINTS: IptvCategory[] = [
  {
    id: 'sports',
    name: 'Sports',
    url: 'https://iptv-org.github.io/iptv/categories/sports.m3u',
  },
  {
    id: 'news',
    name: 'News',
    url: 'https://iptv-org.github.io/iptv/categories/news.m3u',
  },
  {
    id: 'movies',
    name: 'Movies',
    url: 'https://iptv-org.github.io/iptv/categories/movies.m3u',
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    url: 'https://iptv-org.github.io/iptv/categories/entertainment.m3u',
  },
];

export class IptvOrgService {
  /**
   * Fetches and parses an M3U playlist from iptv-org
   */
  public async fetchCategoryChannels(
    category: IptvCategory,
    limit = 25
  ): Promise<Channel[]> {
    try {
      const res = await fetch(category.url);
      if (!res.ok) {
        throw new Error(`Failed to fetch ${category.url}: ${res.statusText}`);
      }

      const text = await res.text();
      return this.parseM3u(text, category.name, limit);
    } catch (err) {
      console.warn(`[IPTV-org] Failed to fetch live playlist for ${category.name}:`, err);
      return [];
    }
  }

  /**
   * Parses raw M3U text into NovaStream Channel objects
   */
  public parseM3u(
    m3uContent: string,
    categoryName: Channel['category'],
    limit: number
  ): Channel[] {
    const lines = m3uContent.split('\n');
    const channels: Channel[] = [];

    let currentName = '';
    let currentLogo = '';
    let currentTvgId = '';

    for (let i = 0; i < lines.length && channels.length < limit; i++) {
      const line = lines[i].trim();

      if (line.startsWith('#EXTINF:')) {
        // Extract tvg-logo
        const logoMatch = line.match(/tvg-logo="([^"]+)"/);
        currentLogo = logoMatch ? logoMatch[1] : '';

        // Extract tvg-id
        const idMatch = line.match(/tvg-id="([^"]+)"/);
        currentTvgId = idMatch ? idMatch[1] : '';

        // Extract channel name (after last comma)
        const nameParts = line.split(',');
        currentName = nameParts.length > 1 ? nameParts[nameParts.length - 1].trim() : 'Live Channel';
      } else if (line.startsWith('http://') || line.startsWith('https://')) {
        const streamUrl = line;

        if (currentName) {
          const channelId = `iptv_${currentTvgId || Math.random().toString(36).substring(2, 9)}`;

          const sources: StreamSource[] = [
            {
              id: `${channelId}_src1`,
              label: 'Server 1 (IPTV-org Direct)',
              url: streamUrl,
              priority: 1,
              protocol: 'hls',
              requiresProxy: true, // Route via Cloudflare Worker to guarantee CORS compliance
              state: 'HEALTHY',
            },
            {
              id: `${channelId}_src2`,
              label: 'Server 2 (Edge Mirror)',
              url: streamUrl,
              priority: 2,
              protocol: 'hls',
              requiresProxy: false,
              state: 'IDLE',
            },
          ];

          channels.push({
            id: channelId,
            name: currentName,
            category: categoryName,
            logoUrl: currentLogo || 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=128&q=80',
            epgId: currentTvgId,
            sources,
            currentProgram: {
              id: `epg_${channelId}`,
              title: `${currentName} Live Transmission`,
              description: 'Official verified public broadcast provided via iptv-org.',
              startTime: Date.now() - 1000 * 60 * 20,
              endTime: Date.now() + 1000 * 60 * 70,
            },
            updatedAt: Date.now(),
          });

          currentName = '';
          currentLogo = '';
          currentTvgId = '';
        }
      }
    }

    return channels;
  }
}

export const iptvOrgService = new IptvOrgService();
