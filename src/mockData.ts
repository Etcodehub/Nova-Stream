import type { Channel } from './types/index.ts';

export const INITIAL_MOCK_CHANNELS: Channel[] = [
  // 1. ZLive Live Sports Provider (Embed Iframe Provider)
  {
    id: 'ch_zlive_sports',
    name: 'ZLive Live Sports Feed',
    category: 'Sports',
    logoUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=200&q=80',
    epgId: 'zlive.sports.auto',
    updatedAt: Date.now(),
    currentProgram: {
      id: 'epg_zlive_match',
      title: 'Live Football Match: Auto Feature Feed',
      description: 'Official ZLive sports streaming broadcast (zlive.st embed player)',
      startTime: Date.now() - 1000 * 60 * 30,
      endTime: Date.now() + 1000 * 60 * 90,
    },
    sources: [
      {
        id: 'src_zlive_primary',
        label: 'Server 1 (ZLive HD Embed)',
        url: 'https://zlive.st/embed/auto-abc?radius=7&frame=0&brand=0',
        priority: 1,
        protocol: 'embed',
        state: 'HEALTHY',
      },
      {
        id: 'src_zlive_backup',
        label: 'Server 2 (Edge HLS Backup)',
        url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        priority: 2,
        protocol: 'hls',
        state: 'IDLE',
      },
    ],
  },

  // 2. IPTV-org: Red Bull TV (Official Sports / Action)
  {
    id: 'ch_iptv_redbull',
    name: 'Red Bull TV Sports (IPTV-org)',
    category: 'Sports',
    logoUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=200&q=80',
    epgId: 'redbulltv.sports',
    updatedAt: Date.now() - 1200000,
    currentProgram: {
      id: 'epg_redbull_live',
      title: 'Extreme Action Sports & Championship Live',
      description: 'Official verified public stream from iptv-org verified collection.',
      startTime: Date.now() - 1000 * 60 * 20,
      endTime: Date.now() + 1000 * 60 * 100,
    },
    sources: [
      {
        id: 'src_rb_1',
        label: 'Server 1 (IPTV-org Fastly)',
        url: 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8',
        priority: 1,
        protocol: 'hls',
        requiresProxy: true,
        state: 'HEALTHY',
      },
      {
        id: 'src_rb_2',
        label: 'Server 2 (Backup Mux)',
        url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        priority: 2,
        protocol: 'hls',
        state: 'IDLE',
      },
    ],
  },

  // 3. Nova Sports 1 HD
  {
    id: 'ch_nova_sports_1',
    name: 'Nova Sports 1 HD',
    category: 'Sports',
    logoUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=200&q=80',
    epgId: 'novasports1.live',
    updatedAt: Date.now() - 3600000,
    currentProgram: {
      id: 'epg_uefa_final',
      title: 'UEFA Champions League: Arsenal vs Real Madrid',
      description: 'Live match coverage in 1080p 60fps with real-time statistics.',
      startTime: Date.now() - 1000 * 60 * 45,
      endTime: Date.now() + 1000 * 60 * 60,
    },
    sources: [
      {
        id: 'src_ns1_primary',
        label: 'Server 1 (1080p 60fps - Primary CDN)',
        url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        priority: 1,
        protocol: 'hls',
        state: 'HEALTHY',
      },
      {
        id: 'src_ns1_backup',
        label: 'Server 2 (720p - Akamai Backup)',
        url: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',
        priority: 2,
        protocol: 'hls',
        state: 'IDLE',
      },
      {
        id: 'src_ns1_sd',
        label: 'Server 3 (Direct SD Mirror)',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        priority: 3,
        protocol: 'progressive',
        state: 'IDLE',
      },
    ],
  },

  // 4. Nova Cinema Premiere
  {
    id: 'ch_nova_cinema',
    name: 'Nova Cinema Premiere',
    category: 'Movies',
    logoUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=200&q=80',
    epgId: 'novacinema.hd',
    updatedAt: Date.now() - 7200000,
    currentProgram: {
      id: 'epg_dune',
      title: 'Interstellar Odyssey: Beyond the Horizon',
      description: 'Sci-fi blockbuster in 4K HDR and spatial audio.',
      startTime: Date.now() - 1000 * 60 * 20,
      endTime: Date.now() + 1000 * 60 * 110,
    },
    sources: [
      {
        id: 'src_nc_fastly',
        label: 'Server 1 (Fastly CDN - 4K HEVC)',
        url: 'https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8',
        priority: 1,
        protocol: 'hls',
        state: 'HEALTHY',
      },
      {
        id: 'src_nc_cloudflare',
        label: 'Server 2 (Cloudflare Stream Mirror)',
        url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        priority: 2,
        protocol: 'hls',
        state: 'IDLE',
      },
    ],
  },

  // 5. Nova 24 World News
  {
    id: 'ch_nova_news_24',
    name: 'Nova 24 World News',
    category: 'News',
    logoUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=200&q=80',
    epgId: 'novanews24.live',
    updatedAt: Date.now() - 1800000,
    currentProgram: {
      id: 'epg_news_hour',
      title: 'Global Financial & Tech Headlines',
      description: 'Live continuous 24/7 world broadcast.',
      startTime: Date.now() - 1000 * 60 * 10,
      endTime: Date.now() + 1000 * 60 * 50,
    },
    sources: [
      {
        id: 'src_news_primary',
        label: 'Server 1 (Global Live Edge)',
        url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        priority: 1,
        protocol: 'hls',
        state: 'HEALTHY',
      },
      {
        id: 'src_news_mirror',
        label: 'Server 2 (Secondary Ingest)',
        url: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',
        priority: 2,
        protocol: 'hls',
        state: 'IDLE',
      },
    ],
  },
];
