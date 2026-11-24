import type { Channel } from './types/index.ts';

/**
 * Master Bundled Channels Catalog
 * Clean, non-hybrid live feeds with Edge Geo-Bypass & Direct fallback.
 */
export const MASTER_CHANNELS_CATALOG: Channel[] = [
  {
    "id": "cat_ss_prem",
    "name": "SuperSport Premier League",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/SuperSport_logo.svg/512px-SuperSport_logo.svg.png",
    "network": "SuperSport",
    "isTop": true,
    "sources": [
      {
        "id": "src_ss_prem_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-supersport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_ss_prem_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-supersport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ss_prem",
      "title": "Premier League Live \u2022 Feature Match",
      "description": "4K \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_sky_prem",
    "name": "Sky Sports Premier League",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": true,
    "sources": [
      {
        "id": "src_sky_prem_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-premier?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_sky_prem_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-premier?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_sky_prem",
      "title": "Super Sunday & EPL 24/7 Matchday",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_sky_main",
    "name": "Sky Sports Main Event",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": true,
    "sources": [
      {
        "id": "src_sky_main_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-skymain?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_sky_main_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-skymain?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_sky_main",
      "title": "Flagship Matchday & Big Events",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_tnt_1",
    "name": "TNT Sports 1",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/TNT_Sports_logo.svg/512px-TNT_Sports_logo.svg.png",
    "network": "TNT Sports",
    "isTop": true,
    "sources": [
      {
        "id": "src_tnt_1_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-tnt1?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_tnt_1_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-tnt1?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_tnt_1",
      "title": "UEFA Champions League & EPL Live",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_tnt_2",
    "name": "TNT Sports 2",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/TNT_Sports_logo.svg/512px-TNT_Sports_logo.svg.png",
    "network": "TNT Sports",
    "isTop": true,
    "sources": [
      {
        "id": "src_tnt_2_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-tnt2?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_tnt_2_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-tnt2?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_tnt_2",
      "title": "UEFA Europa League & Serie A",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_bein_1",
    "name": "beIN Sports 1 English",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": true,
    "sources": [
      {
        "id": "src_bein_1_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-bein?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_bein_1_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-bein?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_bein_1",
      "title": "Premier League & UCL Prime Feed",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_bein_2",
    "name": "beIN Sports 2 English",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": true,
    "sources": [
      {
        "id": "src_bein_2_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-bein?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_bein_2_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-bein?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_bein_2",
      "title": "La Liga & Ligue 1 Live Action",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_ss_foot",
    "name": "SuperSport Football",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/SuperSport_logo.svg/512px-SuperSport_logo.svg.png",
    "network": "SuperSport",
    "isTop": true,
    "sources": [
      {
        "id": "src_ss_foot_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_ss_foot_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ss_foot",
      "title": "Serie A, AFCON & European Cup Ties",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_cbs_golazo",
    "name": "CBS Sports Golazo",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "CBS Sports",
    "isTop": true,
    "sources": [
      {
        "id": "src_cbs_golazo_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_cbs_golazo_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_cbs_golazo",
      "title": "24/7 Football & UEFA Champions League",
      "description": "1080p \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_tv_varzesh",
    "name": "TV Varzesh",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "Varzesh",
    "isTop": true,
    "sources": [
      {
        "id": "src_tv_varzesh_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_tv_varzesh_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_tv_varzesh",
      "title": "World Football & International Tournaments",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_espn_usa",
    "name": "ESPN USA",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/ESPN_logo.svg/512px-ESPN_logo.svg.png",
    "network": "ESPN",
    "isTop": false,
    "sources": [
      {
        "id": "src_espn_usa_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_espn_usa_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_espn_usa",
      "title": "Live Sports Center, La Liga & MLS",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_espn_2",
    "name": "ESPN 2",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/ESPN_logo.svg/512px-ESPN_logo.svg.png",
    "network": "ESPN",
    "isTop": false,
    "sources": [
      {
        "id": "src_espn_2_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-espn?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_espn_2_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-espn?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_espn_2",
      "title": "FA Cup, Bundesliga & Top Football",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_dazn_1",
    "name": "DAZN 1 HD",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "DAZN",
    "isTop": false,
    "sources": [
      {
        "id": "src_dazn_1_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_dazn_1_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_dazn_1",
      "title": "Serie A, La Liga & Boxing Matchday",
      "description": "1080p \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_dazn_2",
    "name": "DAZN 2 HD",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "DAZN",
    "isTop": false,
    "sources": [
      {
        "id": "src_dazn_2_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_dazn_2_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_dazn_2",
      "title": "Champions League & Global Combat",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_eurosport_1",
    "name": "Eurosport 1 HD",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "Eurosport",
    "isTop": false,
    "sources": [
      {
        "id": "src_eurosport_1_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_eurosport_1_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_eurosport_1",
      "title": "Tennis Grand Slams & World Championship",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_eurosport_2",
    "name": "Eurosport 2 HD",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "Eurosport",
    "isTop": false,
    "sources": [
      {
        "id": "src_eurosport_2_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_eurosport_2_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_eurosport_2",
      "title": "Cycling, Winter Sports & Live Feeds",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_canal_sport",
    "name": "Canal+ Sport 1",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "Canal+",
    "isTop": false,
    "sources": [
      {
        "id": "src_canal_sport_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_canal_sport_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_canal_sport",
      "title": "Premier League, Ligue 1 & Top Rugby",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_movistar_laliga",
    "name": "Movistar LaLiga",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "Movistar",
    "isTop": false,
    "sources": [
      {
        "id": "src_movistar_laliga_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_movistar_laliga_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_movistar_laliga",
      "title": "Spanish La Liga Live Broadcasts",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_movistar_ucl",
    "name": "Movistar Liga de Campeones",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "Movistar",
    "isTop": false,
    "sources": [
      {
        "id": "src_movistar_ucl_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_movistar_ucl_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_movistar_ucl",
      "title": "UEFA Champions League & Europa Live",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_rmc_sport",
    "name": "RMC Sport 1",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "RMC",
    "isTop": false,
    "sources": [
      {
        "id": "src_rmc_sport_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_rmc_sport_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_rmc_sport",
      "title": "UFC, European Football & Kickboxing",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_astro_ss1",
    "name": "Astro SuperSport 1",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/SuperSport_logo.svg/512px-SuperSport_logo.svg.png",
    "network": "Astro",
    "isTop": false,
    "sources": [
      {
        "id": "src_astro_ss1_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_astro_ss1_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_astro_ss1",
      "title": "Premier League HD Multi-Camera",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_astro_ss2",
    "name": "Astro SuperSport 2",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/SuperSport_logo.svg/512px-SuperSport_logo.svg.png",
    "network": "Astro",
    "isTop": false,
    "sources": [
      {
        "id": "src_astro_ss2_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_astro_ss2_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_astro_ss2",
      "title": "La Liga, Cup Matches & Asian Football",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_optus_sport",
    "name": "Optus Sport 1",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/512px-Premier_League_Logo.svg.png",
    "network": "Optus",
    "isTop": false,
    "sources": [
      {
        "id": "src_optus_sport_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_optus_sport_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_optus_sport",
      "title": "Premier League, WSL & International Football",
      "description": "1080p \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_sony_ten1",
    "name": "Sony Sports Ten 1",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "Sony",
    "isTop": false,
    "sources": [
      {
        "id": "src_sony_ten1_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_sony_ten1_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_sony_ten1",
      "title": "UEFA Champions League, WWE & Tennis",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_sony_ten2",
    "name": "Sony Sports Ten 2",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "Sony",
    "isTop": false,
    "sources": [
      {
        "id": "src_sony_ten2_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_sony_ten2_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_sony_ten2",
      "title": "European Football Leagues & Athletics",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_tyc_sports",
    "name": "TyC Sports",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "TyC",
    "isTop": false,
    "sources": [
      {
        "id": "src_tyc_sports_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_tyc_sports_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_tyc_sports",
      "title": "Argentine Primera, Copa & South America",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_gol_play",
    "name": "Gol Play",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "Gol",
    "isTop": false,
    "sources": [
      {
        "id": "src_gol_play_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_gol_play_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_gol_play",
      "title": "Free Live Football & Highlights",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_polsat_sport",
    "name": "Polsat Sport 1",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "Polsat",
    "isTop": false,
    "sources": [
      {
        "id": "src_polsat_sport_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_polsat_sport_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_polsat_sport",
      "title": "European Football & Volleyball Nations",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_ss_grandstand",
    "name": "SuperSport Grandstand",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/SuperSport_logo.svg/512px-SuperSport_logo.svg.png",
    "network": "SuperSport",
    "isTop": false,
    "sources": [
      {
        "id": "src_ss_grandstand_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_ss_grandstand_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ss_grandstand",
      "title": "Premier Stadium Broadcast & Big Clashes",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_ss_var1",
    "name": "SuperSport Variety 1",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/SuperSport_logo.svg/512px-SuperSport_logo.svg.png",
    "network": "SuperSport",
    "isTop": false,
    "sources": [
      {
        "id": "src_ss_var1_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_ss_var1_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ss_var1",
      "title": "Multi-League Football & Rugby Union",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_ss_var2",
    "name": "SuperSport Variety 2",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/SuperSport_logo.svg/512px-SuperSport_logo.svg.png",
    "network": "SuperSport",
    "isTop": false,
    "sources": [
      {
        "id": "src_ss_var2_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_ss_var2_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ss_var2",
      "title": "European Football Matches & Athletics",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_ss_var3",
    "name": "SuperSport Variety 3",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/SuperSport_logo.svg/512px-SuperSport_logo.svg.png",
    "network": "SuperSport",
    "isTop": false,
    "sources": [
      {
        "id": "src_ss_var3_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_ss_var3_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ss_var3",
      "title": "Athletics, Boxing & Live Racing",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_ss_var4",
    "name": "SuperSport Variety 4",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/SuperSport_logo.svg/512px-SuperSport_logo.svg.png",
    "network": "SuperSport",
    "isTop": false,
    "sources": [
      {
        "id": "src_ss_var4_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_ss_var4_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ss_var4",
      "title": "Tennis Grand Slam, Golf & Action Sports",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_ss_action",
    "name": "SuperSport Action",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/SuperSport_logo.svg/512px-SuperSport_logo.svg.png",
    "network": "SuperSport",
    "isTop": false,
    "sources": [
      {
        "id": "src_ss_action_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-supersport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_ss_action_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-supersport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ss_action",
      "title": "Extreme Sports, MMA & High Octane Action",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_sky_foot",
    "name": "Sky Sports Football",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "sources": [
      {
        "id": "src_sky_foot_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_sky_foot_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_sky_foot",
      "title": "EFL, SPFL, Bundesliga Live Matches",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_sky_arena",
    "name": "Sky Sports Arena",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "sources": [
      {
        "id": "src_sky_arena_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_sky_arena_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_sky_arena",
      "title": "Boxing World Titles, Darts & Rugby",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_sky_action",
    "name": "Sky Sports Action",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "sources": [
      {
        "id": "src_sky_action_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_sky_action_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_sky_action",
      "title": "NFL Sunday Night, Athletics & Tennis",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_sky_1",
    "name": "Sky Sports 1",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "sources": [
      {
        "id": "src_sky_1_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_sky_1_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_sky_1",
      "title": "Live Sky Event Broadcast 1",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_sky_2",
    "name": "Sky Sports 2",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "sources": [
      {
        "id": "src_sky_2_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_sky_2_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_sky_2",
      "title": "Live Sky Event Broadcast 2",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_sky_3",
    "name": "Sky Sports 3",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "sources": [
      {
        "id": "src_sky_3_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_sky_3_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_sky_3",
      "title": "Live Sky Event Broadcast 3",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_sky_4",
    "name": "Sky Sports 4",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "sources": [
      {
        "id": "src_sky_4_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_sky_4_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_sky_4",
      "title": "Live Sky Event Broadcast 4",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_tnt_3",
    "name": "TNT Sports 3",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/TNT_Sports_logo.svg/512px-TNT_Sports_logo.svg.png",
    "network": "TNT Sports",
    "isTop": false,
    "sources": [
      {
        "id": "src_tnt_3_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-tnt?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_tnt_3_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-tnt?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_tnt_3",
      "title": "MotoGP, Boxing & Football Highlights",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_tnt_4",
    "name": "TNT Sports 4",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/TNT_Sports_logo.svg/512px-TNT_Sports_logo.svg.png",
    "network": "TNT Sports",
    "isTop": false,
    "sources": [
      {
        "id": "src_tnt_4_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-tnt?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_tnt_4_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-tnt?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_tnt_4",
      "title": "Rugby Premiership, UFC & Live Sports",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_tnt_ultimate",
    "name": "TNT Sports Ultimate",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/TNT_Sports_logo.svg/512px-TNT_Sports_logo.svg.png",
    "network": "TNT Sports",
    "isTop": false,
    "sources": [
      {
        "id": "src_tnt_ultimate_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_tnt_ultimate_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_tnt_ultimate",
      "title": "Ultra HD 4K HDR Sports Broadcast",
      "description": "4K \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_bein_3",
    "name": "beIN Sports 3 English",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": false,
    "sources": [
      {
        "id": "src_bein_3_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-bein?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_bein_3_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-bein?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_bein_3",
      "title": "Bundesliga & International Football",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_bein_4",
    "name": "beIN Sports 4 English",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": false,
    "sources": [
      {
        "id": "src_bein_4_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-bein?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_bein_4_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-bein?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_bein_4",
      "title": "French Ligue 1 & World Tournaments",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_bein_xtra",
    "name": "beIN Sports XTRA",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": false,
    "sources": [
      {
        "id": "src_bein_xtra_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_bein_xtra_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_bein_xtra",
      "title": "Live Free Sports & Highlights",
      "description": "720p \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_sky_f1",
    "name": "Sky Sports F1 HD",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "sources": [
      {
        "id": "src_sky_f1_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-f1?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_sky_f1_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-f1?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_sky_f1",
      "title": "Formula 1 Practice, Quali & Grand Prix",
      "description": "4K \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_f1_live",
    "name": "Formula 1 World Feed",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/512px-F1.svg.png",
    "network": "F1",
    "isTop": false,
    "sources": [
      {
        "id": "src_f1_live_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_f1_live_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_f1_live",
      "title": "Pit Lane & On-board Camera Feeds",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_ufc_live",
    "name": "UFC Fight Pass Live",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/UFC_logo.svg/512px-UFC_logo.svg.png",
    "network": "UFC",
    "isTop": false,
    "sources": [
      {
        "id": "src_ufc_live_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_ufc_live_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ufc_live",
      "title": "Championship MMA & Fight Night",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_wwe_net",
    "name": "WWE Network Live",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "WWE",
    "isTop": false,
    "sources": [
      {
        "id": "src_wwe_net_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_wwe_net_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_wwe_net",
      "title": "RAW, SmackDown & Premium Live Events",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_redbull_tv",
    "name": "Red Bull TV HD",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "Red Bull",
    "isTop": false,
    "sources": [
      {
        "id": "src_redbull_tv_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_redbull_tv_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_redbull_tv",
      "title": "Extreme Sports, Rally, Biking & Surfing",
      "description": "1080p \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_motortrend",
    "name": "MotorTrend Network",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "MotorTrend",
    "isTop": false,
    "sources": [
      {
        "id": "src_motortrend_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_motortrend_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_motortrend",
      "title": "Supercars, Live Road Racing & Garage",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_fightbox",
    "name": "FightBox HD",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/UFC_logo.svg/512px-UFC_logo.svg.png",
    "network": "FightBox",
    "isTop": false,
    "sources": [
      {
        "id": "src_fightbox_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_fightbox_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_fightbox",
      "title": "Kickboxing, Muay Thai & MMA Worldwide",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_nba_tv",
    "name": "NBA TV 24/7 Live",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/315px-National_Basketball_Association_logo.svg.png",
    "network": "NBA",
    "isTop": false,
    "sources": [
      {
        "id": "src_nba_tv_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-nba?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_nba_tv_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-nba?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_nba_tv",
      "title": "NBA Live Games, Highlights & Analysis",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_nfl_net",
    "name": "NFL Network Live",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/320px-National_Football_League_logo.svg.png",
    "network": "NFL",
    "isTop": false,
    "sources": [
      {
        "id": "src_nfl_net_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-nfl?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_nfl_net_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-nfl?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_nfl_net",
      "title": "Thursday Night Football & NFL RedZone",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_mlb_net",
    "name": "MLB Network",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "MLB",
    "isTop": false,
    "sources": [
      {
        "id": "src_mlb_net_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-mlb?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_mlb_net_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-mlb?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_mlb_net",
      "title": "Major League Baseball Game of the Day",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_fs1_usa",
    "name": "Fox Sports 1 (FS1",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Fox_Sports_logo.svg/512px-Fox_Sports_logo.svg.png",
    "network": "Live",
    "isTop": false,
    "sources": [
      {
        "id": "src_fs1_usa_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_fs1_usa_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_fs1_usa",
      "title": "Live Broadcast",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_fs2_usa",
    "name": "Fox Sports 2 (FS2",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Fox_Sports_logo.svg/512px-Fox_Sports_logo.svg.png",
    "network": "Live",
    "isTop": false,
    "sources": [
      {
        "id": "src_fs2_usa_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_fs2_usa_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_fs2_usa",
      "title": "Live Broadcast",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_cbs_net",
    "name": "CBS Sports Network",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "CBS Sports",
    "isTop": false,
    "sources": [
      {
        "id": "src_cbs_net_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_cbs_net_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_cbs_net",
      "title": "College Football, NWSL & World League Play",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_tennis_ch",
    "name": "Tennis Channel HD",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "Tennis",
    "isTop": false,
    "sources": [
      {
        "id": "src_tennis_ch_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_tennis_ch_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_tennis_ch",
      "title": "ATP, WTA & Grand Slam Tournament Live",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_golf_ch",
    "name": "Golf Channel HD",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "Golf",
    "isTop": false,
    "sources": [
      {
        "id": "src_golf_ch_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_golf_ch_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_golf_ch",
      "title": "PGA Tour, European Tour & The Open Live",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_aljazeera_en",
    "name": "Al Jazeera English HD",
    "category": "News",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Al_Jazeera_English_logo.svg/512px-Al_Jazeera_English_logo.svg.png",
    "network": "Al Jazeera",
    "isTop": false,
    "sources": [
      {
        "id": "src_aljazeera_en_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_aljazeera_en_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_aljazeera_en",
      "title": "Live Global News & In-depth Reporting",
      "description": "1080p \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_skynews_live",
    "name": "Sky News UK Live",
    "category": "News",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky News",
    "isTop": false,
    "sources": [
      {
        "id": "src_skynews_live_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_skynews_live_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_skynews_live",
      "title": "Breaking News Live Around the Clock",
      "description": "1080p \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_bbc_news",
    "name": "BBC News HD",
    "category": "News",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/BBC_Logo_2021.svg/512px-BBC_Logo_2021.svg.png",
    "network": "BBC",
    "isTop": false,
    "sources": [
      {
        "id": "src_bbc_news_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-cnn?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_bbc_news_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-cnn?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_bbc_news",
      "title": "Trusted World News & Live Reports",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_cnn_intl",
    "name": "CNN International",
    "category": "News",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/512px-CNN.svg.png",
    "network": "CNN",
    "isTop": false,
    "sources": [
      {
        "id": "src_cnn_intl_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-cnn?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_cnn_intl_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-cnn?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_cnn_intl",
      "title": "Global Headlines & Live Coverage",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_bloomberg_tv",
    "name": "Bloomberg Global TV",
    "category": "News",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "Bloomberg",
    "isTop": false,
    "sources": [
      {
        "id": "src_bloomberg_tv_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_bloomberg_tv_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_bloomberg_tv",
      "title": "Live Stock Markets, Finance & Economics",
      "description": "1080p \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_cnbc_live",
    "name": "CNBC Live",
    "category": "News",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "CNBC",
    "isTop": false,
    "sources": [
      {
        "id": "src_cnbc_live_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_cnbc_live_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_cnbc_live",
      "title": "Business News, Wall Street & Tech",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_dw_news",
    "name": "DW News English",
    "category": "News",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "DW",
    "isTop": false,
    "sources": [
      {
        "id": "src_dw_news_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_dw_news_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_dw_news",
      "title": "European Perspective on World News",
      "description": "1080p \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_france24_en",
    "name": "France 24 English",
    "category": "News",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "France 24",
    "isTop": false,
    "sources": [
      {
        "id": "src_france24_en_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_france24_en_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_france24_en",
      "title": "International Breaking News Live",
      "description": "720p \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_euronews_en",
    "name": "Euronews World",
    "category": "News",
    "logoUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80",
    "network": "Euronews",
    "isTop": false,
    "sources": [
      {
        "id": "src_euronews_en_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_euronews_en_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_euronews_en",
      "title": "Pan-European News & Analysis",
      "description": "1080p \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_natgeo_wild",
    "name": "Nat Geo Wild HD",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=300&q=80",
    "network": "Nat Geo",
    "isTop": false,
    "sources": [
      {
        "id": "src_natgeo_wild_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_natgeo_wild_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_natgeo_wild",
      "title": "Wildlife & Planet Earth Expeditions",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_discovery_sci",
    "name": "Discovery Science",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=300&q=80",
    "network": "Discovery",
    "isTop": false,
    "sources": [
      {
        "id": "src_discovery_sci_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_discovery_sci_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_discovery_sci",
      "title": "Exploration, Technology & Science",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_history_ch",
    "name": "History Channel HD",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=300&q=80",
    "network": "History",
    "isTop": false,
    "sources": [
      {
        "id": "src_history_ch_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_history_ch_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_history_ch",
      "title": "Ancient Civilizations & World History",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_nasa_tv",
    "name": "NASA TV HD",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=300&q=80",
    "network": "NASA",
    "isTop": false,
    "sources": [
      {
        "id": "src_nasa_tv_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_nasa_tv_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_nasa_tv",
      "title": "Live Space Station & Rocket Launches",
      "description": "1080p \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_sky_cinema",
    "name": "Sky Cinema Action",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=300&q=80",
    "network": "Sky Cinema",
    "isTop": false,
    "sources": [
      {
        "id": "src_sky_cinema_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_sky_cinema_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_sky_cinema",
      "title": "Blockbuster Hollywood Action 24/7",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_hbo_premiere",
    "name": "HBO Premiere Cinema",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=300&q=80",
    "network": "HBO",
    "isTop": false,
    "sources": [
      {
        "id": "src_hbo_premiere_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_hbo_premiere_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_hbo_premiere",
      "title": "Award Winning Feature Films & Series",
      "description": "4K \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_paramount_net",
    "name": "Paramount Network HD",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=300&q=80",
    "network": "Paramount",
    "isTop": false,
    "sources": [
      {
        "id": "src_paramount_net_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_paramount_net_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_paramount_net",
      "title": "Hit Dramas, Series & Classic Movies",
      "description": "HD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cat_warner_tv",
    "name": "Warner TV Cinema",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=300&q=80",
    "network": "Warner",
    "isTop": false,
    "sources": [
      {
        "id": "src_warner_tv_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "src_warner_tv_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-sport?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_warner_tv",
      "title": "Warner Bros Premier Movies & Classics",
      "description": "FHD \u2022 Dedicated Live TV Transmission",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "ch_kids_disney",
    "name": "Disney Channel HD",
    "category": "Kids",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney_Channel_logo.svg/512px-Disney_Channel_logo.svg.png",
    "isTop": true,
    "sources": [
      {
        "id": "ch_kids_disney_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-disney?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "ch_kids_disney_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-disney?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ch_kids_disney",
      "title": "Big City Greens & Animated Feature Marathon",
      "description": "1080p Full HD dedicated live broadcast",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "ch_kids_cartoon",
    "name": "Cartoon Network Live",
    "category": "Kids",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/512px-Cartoon_Network_2010_logo.svg.png",
    "isTop": true,
    "sources": [
      {
        "id": "ch_kids_cartoon_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-cartoon?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "ch_kids_cartoon_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-cartoon?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ch_kids_cartoon",
      "title": "Adventure Time & Classic Toons",
      "description": "1080p Full HD dedicated live broadcast",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "ch_kids_nickelodeon",
    "name": "Nickelodeon Animation",
    "category": "Kids",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Nickelodeon_2009_logo.svg/512px-Nickelodeon_2009_logo.svg.png",
    "isTop": true,
    "sources": [
      {
        "id": "ch_kids_nickelodeon_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-nick?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "ch_kids_nickelodeon_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-nick?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ch_kids_nickelodeon",
      "title": "SpongeBob SquarePants Live",
      "description": "1080p Full HD dedicated live broadcast",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "ch_movie_hbo",
    "name": "HBO East HD",
    "category": "Movies",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HBO_logo.svg/512px-HBO_logo.svg.png",
    "isTop": true,
    "sources": [
      {
        "id": "ch_movie_hbo_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-hbo?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "ch_movie_hbo_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-hbo?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ch_movie_hbo",
      "title": "Premiere Cinema: Blockbuster Feature Presentation",
      "description": "1080p Full HD dedicated live broadcast",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "ch_movie_paramount",
    "name": "Paramount Cinema",
    "category": "Movies",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Paramount_Network_2018_logo.svg/512px-Paramount_Network_2018_logo.svg.png",
    "isTop": false,
    "sources": [
      {
        "id": "ch_movie_paramount_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-paramount?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "ch_movie_paramount_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-paramount?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ch_movie_paramount",
      "title": "Hollywood Classic & Action Marathon",
      "description": "1080p Full HD dedicated live broadcast",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "ch_ent_abc",
    "name": "ABC Live HD Network",
    "category": "Entertainment",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/ABC_logo_2021.svg/512px-ABC_logo_2021.svg.png",
    "isTop": true,
    "sources": [
      {
        "id": "ch_ent_abc_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-abc?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "ch_ent_abc_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-abc?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ch_ent_abc",
      "title": "Primetime Live Network Broadcast",
      "description": "1080p Full HD dedicated live broadcast",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "ch_ent_cbs",
    "name": "CBS Television Network",
    "category": "Entertainment",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/CBS_logo.svg/512px-CBS_logo.svg.png",
    "isTop": false,
    "sources": [
      {
        "id": "ch_ent_cbs_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-cbs?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "ch_ent_cbs_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-cbs?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ch_ent_cbs",
      "title": "CBS Primetime Drama & News",
      "description": "1080p Full HD dedicated live broadcast",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "ch_ent_nbc",
    "name": "NBC Network Live",
    "category": "Entertainment",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/NBC_logo_2022.svg/512px-NBC_logo_2022.svg.png",
    "isTop": false,
    "sources": [
      {
        "id": "ch_ent_nbc_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-nbc?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "ch_ent_nbc_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-nbc?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ch_ent_nbc",
      "title": "The Tonight Show & NBC Primetime",
      "description": "1080p Full HD dedicated live broadcast",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "ch_ent_fox",
    "name": "FOX Broadcasting",
    "category": "Entertainment",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Fox_Sports_logo.svg/512px-Fox_Sports_logo.svg.png",
    "isTop": false,
    "sources": [
      {
        "id": "ch_ent_fox_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-fox?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "ch_ent_fox_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-fox?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ch_ent_fox",
      "title": "Animation Domination & Special Event",
      "description": "1080p Full HD dedicated live broadcast",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "ch_news_cnn",
    "name": "CNN International HD",
    "category": "News",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/512px-CNN.svg.png",
    "isTop": true,
    "sources": [
      {
        "id": "ch_news_cnn_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-cnn?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "ch_news_cnn_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-cnn?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ch_news_cnn",
      "title": "CNN Newsroom Live 24/7",
      "description": "1080p Full HD dedicated live broadcast",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "ch_doc_discovery",
    "name": "Discovery Channel HD",
    "category": "Documentary",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Discovery_Channel_2019.svg/512px-Discovery_Channel_2019.svg.png",
    "isTop": false,
    "sources": [
      {
        "id": "ch_doc_discovery_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-discovery?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "ch_doc_discovery_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-discovery?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ch_doc_discovery",
      "title": "Expedition Unknown & Nature Special",
      "description": "1080p Full HD dedicated live broadcast",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "ch_doc_natgeo",
    "name": "National Geographic Wild",
    "category": "Documentary",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/National_Geographic_Wild_logo.svg/512px-National_Geographic_Wild_logo.svg.png",
    "isTop": false,
    "sources": [
      {
        "id": "ch_doc_natgeo_geo_bypass",
        "label": "Feed 1 (Edge Geo-Bypass)",
        "url": "https://zlive.st/embed/auto-natgeo?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": true,
        "state": "HEALTHY"
      },
      {
        "id": "ch_doc_natgeo_direct",
        "label": "Feed 2 (Direct Feed)",
        "url": "https://zlive.st/embed/auto-natgeo?radius=7&frame=0&brand=0",
        "priority": 2,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ch_doc_natgeo",
      "title": "Predator Kingdom & Deep Ocean Mysteries",
      "description": "1080p Full HD dedicated live broadcast",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  }
];
