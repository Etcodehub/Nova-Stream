import type { Channel } from './types/index.ts';

export const INITIAL_MOCK_CHANNELS: Channel[] = [
  // ==========================================
  // 1. SPORTS CATEGORY
  // ==========================================
  {
    id: 'ch_nova_sports_premier',
    name: 'Nova Sports Premier Feed',
    category: 'Sports',
    logoUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80',
    epgId: 'novasports.premier.auto',
    updatedAt: Date.now(),
    currentProgram: {
      id: 'epg_premier_match',
      title: 'UEFA & Premier League Live Matchday',
      description: 'Ultra HD feature match broadcast with continuous commentary',
      startTime: Date.now() - 1000 * 60 * 30,
      endTime: Date.now() + 1000 * 60 * 90,
    },
    sources: [
      {
        id: 'src_nsp_primary',
        label: 'Server 1 (FHD Live Stream)',
        url: 'https://zlive.st/embed/auto-abc?radius=7&frame=0&brand=0',
        priority: 1,
        protocol: 'embed',
        state: 'HEALTHY',
      },
      {
        id: 'src_nsp_backup',
        label: 'Server 2 (Backup Mirror)',
        url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        priority: 2,
        protocol: 'hls',
        state: 'IDLE',
      },
    ],
  },
  {
    id: 'ch_nova_sports_1',
    name: 'Nova Sports 1 HD',
    category: 'Sports',
    logoUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=300&q=80',
    epgId: 'novasports1.live',
    updatedAt: Date.now() - 3600000,
    currentProgram: {
      id: 'epg_uefa_final',
      title: 'Champions League: Arsenal vs Real Madrid',
      description: 'Live match broadcast in 1080p 60fps with real-time stats.',
      startTime: Date.now() - 1000 * 60 * 45,
      endTime: Date.now() + 1000 * 60 * 60,
    },
    sources: [
      {
        id: 'src_ns1_primary',
        label: 'Server 1 (1080p 60fps)',
        url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        priority: 1,
        protocol: 'hls',
        state: 'HEALTHY',
      },
      {
        id: 'src_ns1_backup',
        label: 'Server 2 (720p Backup)',
        url: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',
        priority: 2,
        protocol: 'hls',
        state: 'IDLE',
      },
    ],
  },
  {
    id: 'ch_iptv_redbull',
    name: 'Red Bull TV Sports',
    category: 'Sports',
    logoUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=300&q=80',
    epgId: 'redbulltv.sports',
    updatedAt: Date.now() - 1200000,
    currentProgram: {
      id: 'epg_redbull_live',
      title: 'Action Sports World Tour & Cliff Diving',
      description: 'Global outdoor adrenaline and championship highlights.',
      startTime: Date.now() - 1000 * 60 * 20,
      endTime: Date.now() + 1000 * 60 * 100,
    },
    sources: [
      {
        id: 'src_rb_1',
        label: 'Server 1 (Primary Akamai)',
        url: 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8',
        priority: 1,
        protocol: 'hls',
        requiresProxy: true,
        state: 'HEALTHY',
      },
      {
        id: 'src_rb_2',
        label: 'Server 2 (Edge Mirror)',
        url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        priority: 2,
        protocol: 'hls',
        state: 'IDLE',
      },
    ],
  },

  // ==========================================
  // 2. MOVIES CATEGORY
  // ==========================================
  {
    id: 'ch_nova_cinema',
    name: 'Nova Cinema Premiere',
    category: 'Movies',
    logoUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=300&q=80',
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
        label: 'Server 1 (Fastly CDN 4K)',
        url: 'https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8',
        priority: 1,
        protocol: 'hls',
        state: 'HEALTHY',
      },
      {
        id: 'src_nc_cloudflare',
        label: 'Server 2 (Cloudflare Stream)',
        url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        priority: 2,
        protocol: 'hls',
        state: 'IDLE',
      },
    ],
  },
  {
    id: 'ch_cinema_classics',
    name: 'Nova Classic Action',
    category: 'Movies',
    logoUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=300&q=80',
    epgId: 'novaclassic.action',
    updatedAt: Date.now() - 4000000,
    currentProgram: {
      id: 'epg_action_block',
      title: 'The Great Heist: Retribution',
      description: 'Award-winning action thriller in 1080p surround sound.',
      startTime: Date.now() - 1000 * 60 * 10,
      endTime: Date.now() + 1000 * 60 * 85,
    },
    sources: [
      {
        id: 'src_ca_1',
        label: 'Server 1 (FHD Master)',
        url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        priority: 1,
        protocol: 'hls',
        state: 'HEALTHY',
      },
    ],
  },

  // ==========================================
  // 3. KIDS & FAMILY CATEGORY (Requested by User)
  // ==========================================
  {
    id: 'ch_kids_toonami',
    name: 'Nova Kids Animation Hub',
    category: 'Kids',
    logoUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=300&q=80',
    epgId: 'novakids.animation',
    updatedAt: Date.now(),
    currentProgram: {
      id: 'epg_kids_adventures',
      title: 'Legend of the Dragon Riders: Season 4',
      description: 'Animated adventure series for kids and families.',
      startTime: Date.now() - 1000 * 60 * 15,
      endTime: Date.now() + 1000 * 60 * 45,
    },
    sources: [
      {
        id: 'src_kids_1',
        label: 'Server 1 (Kids HD Stream)',
        url: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',
        priority: 1,
        protocol: 'hls',
        state: 'HEALTHY',
      },
      {
        id: 'src_kids_2',
        label: 'Server 2 (Backup Mirror)',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        priority: 2,
        protocol: 'progressive',
        state: 'IDLE',
      },
    ],
  },
  {
    id: 'ch_kids_ducktv',
    name: 'Junior Toons & Fun',
    category: 'Kids',
    logoUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=300&q=80',
    epgId: 'juniortoons.fun',
    updatedAt: Date.now() - 1500000,
    currentProgram: {
      id: 'epg_jr_magic',
      title: 'Magic Forest Tales & Sing-Along',
      description: 'Fun educational songs and colorful cartoon stories.',
      startTime: Date.now() - 1000 * 60 * 5,
      endTime: Date.now() + 1000 * 60 * 35,
    },
    sources: [
      {
        id: 'src_jr_1',
        label: 'Server 1 (Junior 1080p)',
        url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        priority: 1,
        protocol: 'hls',
        state: 'HEALTHY',
      },
    ],
  },

  // ==========================================
  // 4. NEWS & WORLD CATEGORY
  // ==========================================
  {
    id: 'ch_nova_news_24',
    name: 'Nova 24 World News',
    category: 'News',
    logoUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=300&q=80',
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
