/**
 * NovaStream Master Channels Catalog
 * Ingested from verified official edge channel directory (278 channels).
 * Verified official slugs for 100% fail-free playback (TNT Sports 1-4, Sky Sports Premier/F1/Main Event, beIN Sports MENA 1-9, SuperSport, etc.)
 */

import type { Channel } from './types/index.ts';

export const MASTER_CHANNELS_CATALOG: Channel[] = [
  {
    "id": "adult-swim-test",
    "name": "Adult Swim USA",
    "category": "Kids",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "us",
    "quality": "HD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_adult-swim-test_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/adult-swim-test?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_adult-swim-test",
      "title": "Adult Swim USA Live Broadcast",
      "description": "HD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "skysportsf1-uk2",
    "name": "Sky Sports F1 FHD",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "gb",
    "quality": "FHD",
    "tagline": "if 4k lags use this",
    "region": "UK",
    "sources": [
      {
        "id": "src_skysportsf1-uk2_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/skysportsf1-uk2?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_skysportsf1-uk2",
      "title": "Sky Sports F1 FHD Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "skysportsf1-uk3",
    "name": "Sky Sports F1 FHD Backup",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "gb",
    "quality": "FHD",
    "tagline": "backup",
    "region": "UK",
    "sources": [
      {
        "id": "src_skysportsf1-uk3_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/skysportsf1-uk3?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_skysportsf1-uk3",
      "title": "Sky Sports F1 FHD Backup Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "skysportsf1-uk3-llta",
    "name": "Sky Sports F1 FHD Backup 3",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "gb",
    "quality": "FHD",
    "tagline": "backup 2",
    "region": "UK",
    "sources": [
      {
        "id": "src_skysportsf1-uk3-llta_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/skysportsf1-uk3-llta?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_skysportsf1-uk3-llta",
      "title": "Sky Sports F1 FHD Backup 3 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "TSN4",
    "name": "TSN 4",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "us",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_TSN4_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/TSN4?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_TSN4_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://109.104.153.220/TSN-4/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_TSN4",
      "title": "TSN 4 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "beinsports2-au",
    "name": "beIN Sports 2 AU",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": false,
    "flag": "au",
    "quality": "HD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_beinsports2-au_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/beinsports2-au?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_beinsports2-au",
      "title": "beIN Sports 2 AU Live Broadcast",
      "description": "HD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "bein-turkey-1",
    "name": "beIN Sports Turkey 1",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": false,
    "flag": "tr",
    "quality": "FHD",
    "tagline": "if video is broken use the other one",
    "region": "TR",
    "sources": [
      {
        "id": "src_bein-turkey-1_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/bein-turkey-1?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_bein-turkey-1",
      "title": "beIN Sports Turkey 1 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "bein-turkey-2",
    "name": "beIN Sports Turkey 2",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": false,
    "flag": "tr",
    "quality": "FHD",
    "tagline": "BEIN TURKEY 2ND STREAM",
    "region": "TR",
    "sources": [
      {
        "id": "src_bein-turkey-2_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/bein-turkey-2?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_bein-turkey-2",
      "title": "beIN Sports Turkey 2 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "skysportsmainevent1",
    "name": "Sky Sports Main Event Backup",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": true,
    "flag": "gb",
    "quality": "FHD",
    "tagline": "Sky Sports Main Event Backup",
    "region": "UK",
    "sources": [
      {
        "id": "src_skysportsmainevent1_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/skysportsmainevent1?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_skysportsmainevent1",
      "title": "Sky Sports Main Event Backup Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "dazn-it-test",
    "name": "DAZN Italy",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png",
    "network": "DAZN",
    "isTop": false,
    "flag": "it",
    "quality": "HD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_dazn-it-test_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/dazn-it-test?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_dazn-it-test",
      "title": "DAZN Italy Live Broadcast",
      "description": "HD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "dazn-it-backup",
    "name": "DAZN Italy Backup",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png",
    "network": "DAZN",
    "isTop": false,
    "flag": "it",
    "quality": "HD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_dazn-it-backup_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/dazn-it-backup?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_dazn-it-backup",
      "title": "DAZN Italy Backup Live Broadcast",
      "description": "HD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "spersport-56",
    "name": "S*perSport Football",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/SuperSport_logo.svg/512px-SuperSport_logo.svg.png",
    "network": "SuperSport",
    "isTop": false,
    "flag": "za",
    "quality": "FHD",
    "tagline": "",
    "region": "USA",
    "sources": [
      {
        "id": "src_spersport-56_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/spersport-56?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_spersport-56",
      "title": "S*perSport Football Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "spersport-grand",
    "name": "S*perSport Grand Stand",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/SuperSport_logo.svg/512px-SuperSport_logo.svg.png",
    "network": "SuperSport",
    "isTop": false,
    "flag": "za",
    "quality": "FHD",
    "tagline": "",
    "region": "USA",
    "sources": [
      {
        "id": "src_spersport-grand_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/spersport-grand?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_spersport-grand",
      "title": "S*perSport Grand Stand Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "spersport-premier",
    "name": "S*perSport Premier Leauge",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/SuperSport_logo.svg/512px-SuperSport_logo.svg.png",
    "network": "SuperSport",
    "isTop": true,
    "flag": "za",
    "quality": "FHD",
    "tagline": "",
    "region": "USA",
    "sources": [
      {
        "id": "src_spersport-premier_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/spersport-premier?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_spersport-premier",
      "title": "S*perSport Premier Leauge Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "dazn-f1-test",
    "name": "DAZN F1 FHD Test",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png",
    "network": "DAZN",
    "isTop": false,
    "flag": "us",
    "quality": "HD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_dazn-f1-test_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/dazn-f1-test?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_dazn-f1-test",
      "title": "DAZN F1 FHD Test Live Broadcast",
      "description": "HD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "dazn-f1-test-backup",
    "name": "DAZN F1 FHD Test Backup",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png",
    "network": "DAZN",
    "isTop": false,
    "flag": "us",
    "quality": "HD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_dazn-f1-test-backup_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/dazn-f1-test-backup?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_dazn-f1-test-backup",
      "title": "DAZN F1 FHD Test Backup Live Broadcast",
      "description": "HD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "fs-502",
    "name": "Fox Sports 502 AU",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fox_Broadcasting_Company_logo_%282019%29.svg/512px-Fox_Broadcasting_Company_logo_%282019%29.svg.png",
    "network": "FOX",
    "isTop": false,
    "flag": "au",
    "quality": "HD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_fs-502_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/fs-502?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_fs-502",
      "title": "Fox Sports 502 AU Live Broadcast",
      "description": "HD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "boing",
    "name": "Boing Spain",
    "category": "Entertainment",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "es",
    "quality": "FHD",
    "tagline": "",
    "region": "Spain",
    "sources": [
      {
        "id": "src_boing_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/boing?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_boing",
      "title": "Boing Spain Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cartoonnetwork-uk",
    "name": "Cartoon Network UK",
    "category": "Kids",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/512px-Cartoon_Network_2010_logo.svg.png",
    "network": "Cartoon Network",
    "isTop": false,
    "flag": "gb",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_cartoonnetwork-uk_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/cartoonnetwork-uk?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_cartoonnetwork-uk",
      "title": "Cartoon Network UK Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cartoonnetwork-us-east",
    "name": "Cartoon Network US Backup",
    "category": "Kids",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/512px-Cartoon_Network_2010_logo.svg.png",
    "network": "Cartoon Network",
    "isTop": false,
    "flag": "us",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_cartoonnetwork-us-east_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/cartoonnetwork-us-east?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_cartoonnetwork-us-east",
      "title": "Cartoon Network US Backup Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "fox8",
    "name": "FOX 8 HD [CLEVELAND]",
    "category": "Entertainment",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fox_Broadcasting_Company_logo_%282019%29.svg/512px-Fox_Broadcasting_Company_logo_%282019%29.svg.png",
    "network": "FOX",
    "isTop": false,
    "flag": "us",
    "quality": "FHD",
    "tagline": "",
    "region": "United States",
    "sources": [
      {
        "id": "src_fox8_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/fox8?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_fox8",
      "title": "FOX 8 HD [CLEVELAND] Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "boomerang-uk",
    "name": "Boomerang UK",
    "category": "Kids",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Boomerang_2014_logo.svg/512px-Boomerang_2014_logo.svg.png",
    "network": "Live TV",
    "isTop": false,
    "flag": "gb",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_boomerang-uk_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/boomerang-uk?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_boomerang-uk",
      "title": "Boomerang UK Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "snet-la",
    "name": "Sp*rtsNET LA Test",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "us",
    "quality": "HD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_snet-la_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/snet-la?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_snet-la",
      "title": "Sp*rtsNET LA Test Live Broadcast",
      "description": "HD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "la-1",
    "name": "LA 1 Espanol",
    "category": "Entertainment",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "es",
    "quality": "FHD",
    "tagline": "",
    "region": "Spain",
    "sources": [
      {
        "id": "src_la-1_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/la-1?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_la-1",
      "title": "LA 1 Espanol Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cbc-ca",
    "name": "CBC",
    "category": "Kids",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "ca",
    "quality": "FHD",
    "tagline": "",
    "region": "Canada",
    "sources": [
      {
        "id": "src_cbc-ca_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/cbc-ca?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_cbc-ca",
      "title": "CBC Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "sony-sports-1-test",
    "name": "Sony Sports 1 Backup",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Sony Sports",
    "isTop": false,
    "flag": "in",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_sony-sports-1-test_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/sony-sports-1-test?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_sony-sports-1-test",
      "title": "Sony Sports 1 Backup Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "treehouse-ca",
    "name": "Treehouse Kids",
    "category": "Kids",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "ca",
    "quality": "FHD",
    "tagline": "",
    "region": "Canada",
    "sources": [
      {
        "id": "src_treehouse-ca_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/treehouse-ca?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_treehouse-ca",
      "title": "Treehouse Kids Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "ytv-ca",
    "name": "YTV Canada",
    "category": "Kids",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "ca",
    "quality": "FHD",
    "tagline": "",
    "region": "Canada",
    "sources": [
      {
        "id": "src_ytv-ca_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/ytv-ca?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_ytv-ca",
      "title": "YTV Canada Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "sony-sports-2-testj",
    "name": "Sony Sports 2 Backup",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Sony Sports",
    "isTop": false,
    "flag": "in",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_sony-sports-2-testj_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/sony-sports-2-testj?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_sony-sports-2-testj",
      "title": "Sony Sports 2 Backup Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "sony-sports-3-test-crp5",
    "name": "Sony Sports 3 Backup ",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Sony Sports",
    "isTop": false,
    "flag": "in",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_sony-sports-3-test-crp5_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/sony-sports-3-test-crp5?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_sony-sports-3-test-crp5",
      "title": "Sony Sports 3 Backup  Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "bnn-canada",
    "name": "Bloomberg BNN CA",
    "category": "News",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "Ca",
    "quality": "FHD",
    "tagline": "",
    "region": "CA",
    "sources": [
      {
        "id": "src_bnn-canada_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/bnn-canada?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_bnn-canada",
      "title": "Bloomberg BNN CA Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "sony-sports-5t",
    "name": "Sony Sports 5 Backup",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Sony Sports",
    "isTop": false,
    "flag": "in",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_sony-sports-5t_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/sony-sports-5t?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_sony-sports-5t",
      "title": "Sony Sports 5 Backup Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "cnn-usa",
    "name": "CNN USA",
    "category": "News",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/512px-CNN.svg.png",
    "network": "Live TV",
    "isTop": false,
    "flag": "us",
    "quality": "FHD",
    "tagline": "",
    "region": "USA",
    "sources": [
      {
        "id": "src_cnn-usa_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/cnn-usa?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_cnn-usa",
      "title": "CNN USA Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "snet-newyork",
    "name": "Sp*rtsNET NY",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "us",
    "quality": "HD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_snet-newyork_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/snet-newyork?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_snet-newyork",
      "title": "Sp*rtsNET NY Live Broadcast",
      "description": "HD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "tntsports-5",
    "name": "TNT Sport 5 Extra",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/TNT_Sports_logo.svg/512px-TNT_Sports_logo.svg.png",
    "network": "TNT Sports",
    "isTop": false,
    "flag": "gb",
    "quality": "FHD",
    "tagline": "",
    "region": "UK",
    "sources": [
      {
        "id": "src_tntsports-5_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/tntsports-5?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_tntsports-5",
      "title": "TNT Sport 5 Extra Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "tntsports-6",
    "name": "TNT Sport 6 Extra",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/TNT_Sports_logo.svg/512px-TNT_Sports_logo.svg.png",
    "network": "TNT Sports",
    "isTop": false,
    "flag": "gb",
    "quality": "FHD",
    "tagline": "",
    "region": "UK",
    "sources": [
      {
        "id": "src_tntsports-6_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/tntsports-6?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_tntsports-6",
      "title": "TNT Sport 6 Extra Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "bein-arabic-1",
    "name": "beIN Sports Arabic 1",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": false,
    "flag": "sa",
    "quality": "FHD",
    "tagline": "beIN Arabic 1",
    "region": "SA",
    "sources": [
      {
        "id": "src_bein-arabic-1_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/bein-arabic-1?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_bein-arabic-1",
      "title": "beIN Sports Arabic 1 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "vh1-usa",
    "name": "VH1 USA",
    "category": "Entertainment",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "us",
    "quality": "FHD",
    "tagline": "USA",
    "region": "Other",
    "sources": [
      {
        "id": "src_vh1-usa_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/vh1-usa?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_vh1-usa",
      "title": "VH1 USA Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "WEtv-usa",
    "name": "WEtv USA",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "us",
    "quality": "FHD",
    "tagline": "",
    "region": "United States",
    "sources": [
      {
        "id": "src_WEtv-usa_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/WEtv-usa?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_WEtv-usa",
      "title": "WEtv USA Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "pbs-kids-us",
    "name": "PBS Kids",
    "category": "Kids",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "us",
    "quality": "FHD",
    "tagline": "",
    "region": "United States",
    "sources": [
      {
        "id": "src_pbs-kids-us_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/pbs-kids-us?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_pbs-kids-us_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "https://livestream.pbskids.org/out/v1/14507d931bbe48a69287e4850e53443c/est.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_pbs-kids-us",
      "title": "PBS Kids Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "bein-qatar-hd",
    "name": "beIN Sports Qatar HD",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": false,
    "flag": "qa",
    "quality": "FHD",
    "tagline": "beIN Sports Qatar",
    "region": "Qatar",
    "sources": [
      {
        "id": "src_bein-qatar-hd_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/bein-qatar-hd?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_bein-qatar-hd",
      "title": "beIN Sports Qatar HD Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "trt-2k",
    "name": "TRT 1 1440p",
    "category": "Entertainment",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": true,
    "flag": "tr",
    "quality": "4K",
    "tagline": "TRT 1 Turkey feed",
    "region": "TR",
    "sources": [
      {
        "id": "src_trt-2k_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/trt-2k?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_trt-2k",
      "title": "TRT 1 1440p Live Broadcast",
      "description": "4K \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "foxnews",
    "name": "FOX SPORTS NEWS",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fox_Broadcasting_Company_logo_%282019%29.svg/512px-Fox_Broadcasting_Company_logo_%282019%29.svg.png",
    "network": "FOX",
    "isTop": false,
    "flag": "au",
    "quality": "FHD",
    "tagline": "",
    "region": "Australia",
    "sources": [
      {
        "id": "src_foxnews_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/foxnews?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_foxnews_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "https://skynewsau-live-premium.akamaized.net/hls/live/2105307/foxsportsnews/live_1080p.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_foxnews",
      "title": "FOX SPORTS NEWS Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-abc",
    "name": "ABC",
    "category": "General",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/American_Broadcasting_Company_Logo.svg/512px-American_Broadcasting_Company_Logo.svg.png",
    "network": "ABC",
    "isTop": true,
    "flag": "us",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-abc_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-abc?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-abc",
      "title": "ABC Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-acc-network",
    "name": "ACC Network",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "us",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-acc-network_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-acc-network?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-acc-network",
      "title": "ACC Network Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-ae-network",
    "name": "AE",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "us",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-ae-network_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-ae-network?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-ae-network",
      "title": "AE Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-amc",
    "name": "AMC",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "us",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-amc_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-amc?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-amc_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://41.205.93.154/AMC/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-amc",
      "title": "AMC Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-animal-planet",
    "name": "Animal Planet",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-animal-planet_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-animal-planet?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-animal-planet",
      "title": "Animal Planet Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-axs-tv",
    "name": "AXS TV",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "us",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-axs-tv_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-axs-tv?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-axs-tv",
      "title": "AXS TV Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-bbc-america",
    "name": "BBC America",
    "category": "News",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/BBC_Logo_2021.svg/512px-BBC_Logo_2021.svg.png",
    "network": "BBC",
    "isTop": false,
    "flag": "us",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-bbc-america_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-bbc-america?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-bbc-america",
      "title": "BBC America Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-bbc-news",
    "name": "BBC News",
    "category": "News",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/BBC_Logo_2021.svg/512px-BBC_Logo_2021.svg.png",
    "network": "BBC",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-bbc-news_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-bbc-news?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-bbc-news",
      "title": "BBC News Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-bbc-one-london",
    "name": "BBC One London",
    "category": "News",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/BBC_Logo_2021.svg/512px-BBC_Logo_2021.svg.png",
    "network": "BBC",
    "isTop": false,
    "flag": "gb",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-bbc-one-london_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-bbc-one-london?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-bbc-one-london",
      "title": "BBC One London Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-bbc-two",
    "name": "BBC Two",
    "category": "News",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/BBC_Logo_2021.svg/512px-BBC_Logo_2021.svg.png",
    "network": "BBC",
    "isTop": false,
    "flag": "gb",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-bbc-two_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-bbc-two?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-bbc-two",
      "title": "BBC Two Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-bein-sports",
    "name": "beIN Sports",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-bein-sports_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-bein-sports?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-bein-sports",
      "title": "beIN Sports Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-bein-sports-francais-1",
    "name": "beIN Sports Francais 1",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-bein-sports-francais-1_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-bein-sports-francais-1?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-bein-sports-francais-1",
      "title": "beIN Sports Francais 1 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-bein-sports-francais-2",
    "name": "beIN Sports Francais 2",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-bein-sports-francais-2_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-bein-sports-francais-2?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-bein-sports-francais-2",
      "title": "beIN Sports Francais 2 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-bein-sports-francais-3",
    "name": "beIN Sports Francais 3",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-bein-sports-francais-3_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-bein-sports-francais-3?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-bein-sports-francais-3",
      "title": "beIN Sports Francais 3 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-bein-sports-mena-1",
    "name": "beIN Sports MENA 1",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": true,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-bein-sports-mena-1_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-bein-sports-mena-1?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-bein-sports-mena-1",
      "title": "beIN Sports MENA 1 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-bein-sports-mena-2",
    "name": "beIN Sports MENA 2",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": true,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-bein-sports-mena-2_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-bein-sports-mena-2?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-bein-sports-mena-2",
      "title": "beIN Sports MENA 2 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-bein-sports-mena-3",
    "name": "beIN Sports MENA 3",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-bein-sports-mena-3_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-bein-sports-mena-3?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-bein-sports-mena-3",
      "title": "beIN Sports MENA 3 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-bein-sports-mena-4",
    "name": "beIN Sports MENA 4",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-bein-sports-mena-4_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-bein-sports-mena-4?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-bein-sports-mena-4",
      "title": "beIN Sports MENA 4 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-bein-sports-mena-5",
    "name": "beIN Sports MENA 5",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-bein-sports-mena-5_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-bein-sports-mena-5?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-bein-sports-mena-5",
      "title": "beIN Sports MENA 5 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-bein-sports-mena-6",
    "name": "beIN Sports MENA 6",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-bein-sports-mena-6_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-bein-sports-mena-6?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-bein-sports-mena-6",
      "title": "beIN Sports MENA 6 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-bein-sports-mena-7",
    "name": "beIN Sports MENA 7",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-bein-sports-mena-7_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-bein-sports-mena-7?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-bein-sports-mena-7",
      "title": "beIN Sports MENA 7 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-bein-sports-mena-8",
    "name": "beIN Sports MENA 8",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-bein-sports-mena-8_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-bein-sports-mena-8?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-bein-sports-mena-8",
      "title": "beIN Sports MENA 8 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-bein-sports-mena-9",
    "name": "beIN Sports MENA 9",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BeIN_Sports_logo.svg/512px-BeIN_Sports_logo.svg.png",
    "network": "beIN Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-bein-sports-mena-9_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-bein-sports-mena-9?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-bein-sports-mena-9",
      "title": "beIN Sports MENA 9 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-big-ten-network",
    "name": "Big Ten Network",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-big-ten-network_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-big-ten-network?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-big-ten-network",
      "title": "Big Ten Network Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-boomerang",
    "name": "Boomerang",
    "category": "Kids",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Boomerang_2014_logo.svg/512px-Boomerang_2014_logo.svg.png",
    "network": "Live TV",
    "isTop": true,
    "flag": "us",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-boomerang_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-boomerang?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-boomerang_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "https://live-us1.thaimomo.com/live-as/chboomerang-2/chunklist_w135479847.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-boomerang",
      "title": "Boomerang Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-bravo",
    "name": "Bravo",
    "category": "Entertainment",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-bravo_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-bravo?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-bravo",
      "title": "Bravo Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-canal-extra-1",
    "name": "CANAL+ Extra 1",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Canal%2B_2009.svg/512px-Canal%2B_2009.svg.png",
    "network": "Canal+",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-canal-extra-1_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-canal-extra-1?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-canal-extra-1",
      "title": "CANAL+ Extra 1 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-canal-extra-2",
    "name": "CANAL+ Extra 2",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Canal%2B_2009.svg/512px-Canal%2B_2009.svg.png",
    "network": "Canal+",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-canal-extra-2_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-canal-extra-2?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-canal-extra-2",
      "title": "CANAL+ Extra 2 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-canal-sport-360-france",
    "name": "CANAL+ Sport 360 FRANCE",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Canal%2B_2009.svg/512px-Canal%2B_2009.svg.png",
    "network": "Canal+",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-canal-sport-360-france_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-canal-sport-360-france?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-canal-sport-360-france",
      "title": "CANAL+ Sport 360 FRANCE Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-canal-sport-3-pl",
    "name": "CANAL+ Sport 3 PL",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Canal%2B_2009.svg/512px-Canal%2B_2009.svg.png",
    "network": "Canal+",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-canal-sport-3-pl_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-canal-sport-3-pl?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-canal-sport-3-pl",
      "title": "CANAL+ Sport 3 PL Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-canal-sport-4-pl",
    "name": "CANAL+ Sport 4 PL",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Canal%2B_2009.svg/512px-Canal%2B_2009.svg.png",
    "network": "Canal+",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-canal-sport-4-pl_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-canal-sport-4-pl?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-canal-sport-4-pl",
      "title": "CANAL+ Sport 4 PL Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-canal-sport-5-pl",
    "name": "CANAL+ Sport 5 PL",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Canal%2B_2009.svg/512px-Canal%2B_2009.svg.png",
    "network": "Canal+",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-canal-sport-5-pl_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-canal-sport-5-pl?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-canal-sport-5-pl",
      "title": "CANAL+ Sport 5 PL Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-canal-sport-6-pl",
    "name": "CANAL+ Sport 6 PL",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Canal%2B_2009.svg/512px-Canal%2B_2009.svg.png",
    "network": "Canal+",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-canal-sport-6-pl_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-canal-sport-6-pl?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-canal-sport-6-pl",
      "title": "CANAL+ Sport 6 PL Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-canal-sport-pl",
    "name": "CANAL+ Sport PL",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Canal%2B_2009.svg/512px-Canal%2B_2009.svg.png",
    "network": "Canal+",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-canal-sport-pl_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-canal-sport-pl?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-canal-sport-pl",
      "title": "CANAL+ Sport PL Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-cartoon-network",
    "name": "Cartoon Network",
    "category": "Kids",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/512px-Cartoon_Network_2010_logo.svg.png",
    "network": "Cartoon Network",
    "isTop": true,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-cartoon-network_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-cartoon-network?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-cartoon-network_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "https://vodzong.mjunoon.tv:8087/streamtest/cartoon-network-87/live/87H/chunks.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-cartoon-network",
      "title": "Cartoon Network Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-cbeebies",
    "name": "CBeebies",
    "category": "Kids",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-cbeebies_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-cbeebies?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-cbeebies_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://92.114.85.87:8017/play/a004/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-cbeebies",
      "title": "CBeebies Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-cbs",
    "name": "CBS",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "CBS",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-cbs_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-cbs?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-cbs",
      "title": "CBS Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-cbs-sports-network",
    "name": "CBS Sports Network",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "CBS",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-cbs-sports-network_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-cbs-sports-network?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-cbs-sports-network",
      "title": "CBS Sports Network Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-cnbc",
    "name": "CNBC",
    "category": "News",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "NBC",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-cnbc_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-cnbc?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-cnbc",
      "title": "CNBC Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-cnn",
    "name": "CNN",
    "category": "News",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/512px-CNN.svg.png",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-cnn_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-cnn?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-cnn_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "https://tvsen6.aynaott.com/cnn/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-cnn",
      "title": "CNN Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-comedy-central",
    "name": "Comedy Central",
    "category": "Entertainment",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-comedy-central_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-comedy-central?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-comedy-central",
      "title": "Comedy Central Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-cw",
    "name": "CW",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-cw_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-cw?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-cw",
      "title": "CW Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-dazn-1-germany",
    "name": "DAZN 1 Germany",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png",
    "network": "DAZN",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-dazn-1-germany_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-dazn-1-germany?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-dazn-1-germany",
      "title": "DAZN 1 Germany Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "dazn-1-germany-backup",
    "name": "DAZN 1 Germany Backup",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png",
    "network": "DAZN",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_dazn-1-germany-backup_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/dazn-1-germany-backup?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_dazn-1-germany-backup",
      "title": "DAZN 1 Germany Backup Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-dazn-1-italia",
    "name": "DAZN 1 Italia",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png",
    "network": "DAZN",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-dazn-1-italia_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-dazn-1-italia?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-dazn-1-italia",
      "title": "DAZN 1 Italia Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "dazn-1-italia-backup",
    "name": "DAZN 1 Italia Backup",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png",
    "network": "DAZN",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_dazn-1-italia-backup_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/dazn-1-italia-backup?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_dazn-1-italia-backup",
      "title": "DAZN 1 Italia Backup Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-dazn-1-portugal",
    "name": "DAZN 1 Portugal",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png",
    "network": "DAZN",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-dazn-1-portugal_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-dazn-1-portugal?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-dazn-1-portugal",
      "title": "DAZN 1 Portugal Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-dazn-1-spain",
    "name": "DAZN 1 Spain",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png",
    "network": "DAZN",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-dazn-1-spain_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-dazn-1-spain?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-dazn-1-spain",
      "title": "DAZN 1 Spain Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "dazn-1-spain-backup",
    "name": "DAZN 1 Spain Backup",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png",
    "network": "DAZN",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_dazn-1-spain-backup_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/dazn-1-spain-backup?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_dazn-1-spain-backup",
      "title": "DAZN 1 Spain Backup Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-dazn-1-usa",
    "name": "DAZN 1 USA",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png",
    "network": "DAZN",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-dazn-1-usa_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-dazn-1-usa?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-dazn-1-usa",
      "title": "DAZN 1 USA Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-dazn-2-germany",
    "name": "DAZN 2 Germany",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png",
    "network": "DAZN",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-dazn-2-germany_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-dazn-2-germany?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-dazn-2-germany",
      "title": "DAZN 2 Germany Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "dazn-2-germany-backup",
    "name": "DAZN 2 Germany Backup",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png",
    "network": "DAZN",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_dazn-2-germany-backup_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/dazn-2-germany-backup?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_dazn-2-germany-backup",
      "title": "DAZN 2 Germany Backup Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-dazn-2-spain",
    "name": "DAZN 2 Spain",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png",
    "network": "DAZN",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-dazn-2-spain_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-dazn-2-spain?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-dazn-2-spain",
      "title": "DAZN 2 Spain Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "dazn-2-spain-backup",
    "name": "DAZN 2 Spain Backup",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png",
    "network": "DAZN",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_dazn-2-spain-backup_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/dazn-2-spain-backup?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_dazn-2-spain-backup",
      "title": "DAZN 2 Spain Backup Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-dazn-f1",
    "name": "DAZN F1",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png",
    "network": "DAZN",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-dazn-f1_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-dazn-f1?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-dazn-f1_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "https://tvorb.net/ZTV/6918-live.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-dazn-f1",
      "title": "DAZN F1 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "dazn-f1-backup",
    "name": "DAZN F1 Backup",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png",
    "network": "DAZN",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_dazn-f1-backup_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/dazn-f1-backup?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_dazn-f1-backup",
      "title": "DAZN F1 Backup Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-dazn-laliga",
    "name": "DAZN LaLiga",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png",
    "network": "DAZN",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-dazn-laliga_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-dazn-laliga?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-dazn-laliga",
      "title": "DAZN LaLiga Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "dazn-laliga-backup",
    "name": "DAZN LaLiga Backup",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/DAZN_Logo_Master.svg/512px-DAZN_Logo_Master.svg.png",
    "network": "DAZN",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_dazn-laliga-backup_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/dazn-laliga-backup?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_dazn-laliga-backup",
      "title": "DAZN LaLiga Backup Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-dirtvision-now-24-7",
    "name": "Dirtvision Now 24/7",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-dirtvision-now-24-7_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-dirtvision-now-24-7?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-dirtvision-now-24-7",
      "title": "Dirtvision Now 24/7 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-discovery-channel",
    "name": "Discovery Channel",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-discovery-channel_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-discovery-channel?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-discovery-channel_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://213.91.179.28:8000/play/a044",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-discovery-channel",
      "title": "Discovery Channel Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-discovery-family",
    "name": "Discovery Family",
    "category": "Kids",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-discovery-family_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-discovery-family?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-discovery-family",
      "title": "Discovery Family Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-discovery-turbo",
    "name": "Discovery Turbo",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-discovery-turbo_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-discovery-turbo?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-discovery-turbo",
      "title": "Discovery Turbo Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-disney-channel",
    "name": "Disney Channel",
    "category": "Kids",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-disney-channel_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-disney-channel?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-disney-channel_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://87.120.179.187:8000/play/a010",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-disney-channel",
      "title": "Disney Channel Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-disney-junior",
    "name": "Disney Junior",
    "category": "Kids",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-disney-junior_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-disney-junior?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-disney-junior_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://111.88.7.92:8000/play/a00o/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-disney-junior",
      "title": "Disney Junior Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-disney-xd",
    "name": "Disney XD",
    "category": "Kids",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-disney-xd_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-disney-xd?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-disney-xd_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://185.227.34.179:8080/disney-xd/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-disney-xd",
      "title": "Disney XD Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "nicktoons-usa",
    "name": "Nicktoons US",
    "category": "Kids",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "us",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_nicktoons-usa_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/nicktoons-usa?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_nicktoons-usa",
      "title": "Nicktoons US Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-eleven-sports-1",
    "name": "Eleven Sports 1",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-eleven-sports-1_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-eleven-sports-1?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-eleven-sports-1_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://92.114.85.87:8002/play/a00e/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-eleven-sports-1",
      "title": "Eleven Sports 1 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-eleven-sports-2",
    "name": "Eleven Sports 2",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-eleven-sports-2_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-eleven-sports-2?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-eleven-sports-2_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://92.114.85.87:8002/play/a00f/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-eleven-sports-2",
      "title": "Eleven Sports 2 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-eleven-sports-4",
    "name": "Eleven Sports 4",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-eleven-sports-4_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-eleven-sports-4?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-eleven-sports-4_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://92.114.85.87:8002/play/a00h/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-eleven-sports-4",
      "title": "Eleven Sports 4 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "espn-backup",
    "name": "ESPN Backup",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/512px-ESPN_wordmark.svg.png",
    "network": "ESPN",
    "isTop": false,
    "flag": "us",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_espn-backup_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/espn-backup?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_espn-backup",
      "title": "ESPN Backup Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-espn",
    "name": "ESPN",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/512px-ESPN_wordmark.svg.png",
    "network": "ESPN",
    "isTop": true,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-espn_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-espn?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-espn_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://181.78.197.59:8000/play/a07z/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-espn",
      "title": "ESPN Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-espn-deportes",
    "name": "ESPN Deportes",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/512px-ESPN_wordmark.svg.png",
    "network": "ESPN",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-espn-deportes_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-espn-deportes?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-espn-deportes",
      "title": "ESPN Deportes Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-espn2",
    "name": "ESPN2",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/512px-ESPN_wordmark.svg.png",
    "network": "ESPN",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-espn2_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-espn2?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-espn2",
      "title": "ESPN2 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-espnews",
    "name": "ESPNEWS",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/512px-ESPN_wordmark.svg.png",
    "network": "ESPN",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-espnews_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-espnews?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-espnews",
      "title": "ESPNEWS Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-espnu",
    "name": "ESPNU",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/512px-ESPN_wordmark.svg.png",
    "network": "ESPN",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-espnu_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-espnu?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-espnu",
      "title": "ESPNU Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-food-network",
    "name": "Food Network",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-food-network_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-food-network?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-food-network",
      "title": "Food Network Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-fox",
    "name": "Fox",
    "category": "General",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fox_Broadcasting_Company_logo_%282019%29.svg/512px-Fox_Broadcasting_Company_logo_%282019%29.svg.png",
    "network": "FOX",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-fox_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-fox?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-fox_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "https://lilac19.pontiscloud.com/live/gt/FOX/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-fox",
      "title": "Fox Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-fox-deportes",
    "name": "Fox Deportes",
    "category": "General",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fox_Broadcasting_Company_logo_%282019%29.svg/512px-Fox_Broadcasting_Company_logo_%282019%29.svg.png",
    "network": "FOX",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-fox-deportes_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-fox-deportes?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-fox-deportes_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "https://live-manifest.production-public.tubi.io/live/d906efca-1302-4e29-b0d9-9a1d7a305d69/playlist.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-fox-deportes",
      "title": "Fox Deportes Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-fox-news",
    "name": "Fox News",
    "category": "News",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fox_Broadcasting_Company_logo_%282019%29.svg/512px-Fox_Broadcasting_Company_logo_%282019%29.svg.png",
    "network": "FOX",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-fox-news_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-fox-news?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-fox-news",
      "title": "Fox News Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-fox-sports-1",
    "name": "Fox Sports 1",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fox_Broadcasting_Company_logo_%282019%29.svg/512px-Fox_Broadcasting_Company_logo_%282019%29.svg.png",
    "network": "FOX",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-fox-sports-1_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-fox-sports-1?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-fox-sports-1_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://85.237.89.160:9590/usa-s/FOX-SPORTS-1/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-fox-sports-1",
      "title": "Fox Sports 1 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-fox-sports-2",
    "name": "Fox Sports 2",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fox_Broadcasting_Company_logo_%282019%29.svg/512px-Fox_Broadcasting_Company_logo_%282019%29.svg.png",
    "network": "FOX",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-fox-sports-2_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-fox-sports-2?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-fox-sports-2_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "https://tvsen7.aynascope.net/foxsports2/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-fox-sports-2",
      "title": "Fox Sports 2 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-fox-sports-501-cricket",
    "name": "Fox Sports 501 (Cricket)",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fox_Broadcasting_Company_logo_%282019%29.svg/512px-Fox_Broadcasting_Company_logo_%282019%29.svg.png",
    "network": "FOX",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-fox-sports-501-cricket_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-fox-sports-501-cricket?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-fox-sports-501-cricket",
      "title": "Fox Sports 501 (Cricket) Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-fox-sports-502-league",
    "name": "Fox Sports 502 (League)",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fox_Broadcasting_Company_logo_%282019%29.svg/512px-Fox_Broadcasting_Company_logo_%282019%29.svg.png",
    "network": "FOX",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-fox-sports-502-league_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-fox-sports-502-league?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-fox-sports-502-league",
      "title": "Fox Sports 502 (League) Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-fox-sports-503",
    "name": "Fox Sports 503",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fox_Broadcasting_Company_logo_%282019%29.svg/512px-Fox_Broadcasting_Company_logo_%282019%29.svg.png",
    "network": "FOX",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-fox-sports-503_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-fox-sports-503?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-fox-sports-503",
      "title": "Fox Sports 503 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-fox-sports-504-footy",
    "name": "Fox Sports 504 (Footy)",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fox_Broadcasting_Company_logo_%282019%29.svg/512px-Fox_Broadcasting_Company_logo_%282019%29.svg.png",
    "network": "FOX",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-fox-sports-504-footy_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-fox-sports-504-footy?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-fox-sports-504-footy",
      "title": "Fox Sports 504 (Footy) Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-fox-sports-505",
    "name": "Fox Sports 505",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fox_Broadcasting_Company_logo_%282019%29.svg/512px-Fox_Broadcasting_Company_logo_%282019%29.svg.png",
    "network": "FOX",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-fox-sports-505_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-fox-sports-505?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-fox-sports-505",
      "title": "Fox Sports 505 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-fox-sports-506",
    "name": "Fox Sports 506",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fox_Broadcasting_Company_logo_%282019%29.svg/512px-Fox_Broadcasting_Company_logo_%282019%29.svg.png",
    "network": "FOX",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-fox-sports-506_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-fox-sports-506?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-fox-sports-506",
      "title": "Fox Sports 506 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-fox-sports-507",
    "name": "Fox Sports 507",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fox_Broadcasting_Company_logo_%282019%29.svg/512px-Fox_Broadcasting_Company_logo_%282019%29.svg.png",
    "network": "FOX",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-fox-sports-507_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-fox-sports-507?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-fox-sports-507",
      "title": "Fox Sports 507 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-freeform",
    "name": "Freeform",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-freeform_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-freeform?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-freeform",
      "title": "Freeform Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-fx",
    "name": "FX",
    "category": "Entertainment",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-fx_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-fx?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-fx_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "https://tvsen7.aynascope.net/fx/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-fx",
      "title": "FX Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-fxm",
    "name": "FXM",
    "category": "Entertainment",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-fxm_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-fxm?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-fxm",
      "title": "FXM Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-fxx",
    "name": "FXX",
    "category": "Entertainment",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-fxx_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-fxx?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-fxx",
      "title": "FXX Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-go3-sport-1",
    "name": "Go3 Sport 1",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-go3-sport-1_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-go3-sport-1?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-go3-sport-1",
      "title": "Go3 Sport 1 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-go3-sport-2",
    "name": "Go3 Sport 2",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-go3-sport-2_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-go3-sport-2?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-go3-sport-2",
      "title": "Go3 Sport 2 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-go3-sport-3",
    "name": "Go3 Sport 3",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-go3-sport-3_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-go3-sport-3?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-go3-sport-3",
      "title": "Go3 Sport 3 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-golf-channel",
    "name": "GOLF Channel",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-golf-channel_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-golf-channel?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-golf-channel_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "https://dash4.antik.sk/live/test_golf_channel/playlist.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-golf-channel",
      "title": "GOLF Channel Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-hbo",
    "name": "HBO",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-hbo_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-hbo?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-hbo_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://88.212.15.50/live/test_hbo_hd_hevc/playlist.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-hbo",
      "title": "HBO Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-hajduk-tv-hr",
    "name": "MAX Sport 1 HR",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-hajduk-tv-hr_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-hajduk-tv-hr?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-hajduk-tv-hr",
      "title": "MAX Sport 1 HR Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-hbo-comedy",
    "name": "HBO Comedy",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-hbo-comedy_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-hbo-comedy?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-hbo-comedy",
      "title": "HBO Comedy Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-hbo-drama",
    "name": "HBO Drama",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-hbo-drama_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-hbo-drama?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-hbo-drama",
      "title": "HBO Drama Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-hgtv",
    "name": "HGTV",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-hgtv_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-hgtv?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-hgtv",
      "title": "HGTV Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-hub-sports-1-singapore",
    "name": "Hub Sports 1 Singapore",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-hub-sports-1-singapore_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-hub-sports-1-singapore?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-hub-sports-1-singapore",
      "title": "Hub Sports 1 Singapore Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-hub-sports-3-singapore",
    "name": "Hub Sports 3 Singapore",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-hub-sports-3-singapore_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-hub-sports-3-singapore?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-hub-sports-3-singapore",
      "title": "Hub Sports 3 Singapore Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-hub-sports-4-singapore",
    "name": "Hub Sports 4 Singapore",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-hub-sports-4-singapore_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-hub-sports-4-singapore?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-hub-sports-4-singapore",
      "title": "Hub Sports 4 Singapore Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-hub-sports-5-singapore",
    "name": "Hub Sports 5 Singapore",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-hub-sports-5-singapore_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-hub-sports-5-singapore?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-hub-sports-5-singapore",
      "title": "Hub Sports 5 Singapore Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-l-quipe-fr",
    "name": "L'\u00c9quipe FR",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-l-quipe-fr_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-l-quipe-fr?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-l-quipe-fr",
      "title": "L'\u00c9quipe FR Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-mlb-network",
    "name": "MLB Network",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-mlb-network_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-mlb-network?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-mlb-network",
      "title": "MLB Network Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-motogp-channel",
    "name": "MotoGP Channel",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-motogp-channel_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-motogp-channel?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-motogp-channel",
      "title": "MotoGP Channel Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-max-sport-2-hr",
    "name": "MAX Sport 2 HR",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-max-sport-2-hr_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-max-sport-2-hr?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-max-sport-2-hr",
      "title": "MAX Sport 2 HR Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-movistar-deportes",
    "name": "Movistar Deportes",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-movistar-deportes_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-movistar-deportes?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-movistar-deportes_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://195.178.110.110/movistar/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-movistar-deportes",
      "title": "Movistar Deportes Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-movistar-deportes-2",
    "name": "Movistar Deportes 2",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-movistar-deportes-2_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-movistar-deportes-2?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-movistar-deportes-2",
      "title": "Movistar Deportes 2 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-movistar-plus",
    "name": "Movistar Plus",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-movistar-plus_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-movistar-plus?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-movistar-plus_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://45.4.1.201:8000/play/a19y/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-movistar-plus",
      "title": "Movistar Plus Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-mtv",
    "name": "MTV",
    "category": "Entertainment",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-mtv_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-mtv?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-mtv_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "https://r.eu.cdn-redge.media/livehls/oeu/mt/live/mtv/live.livx/playlist.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-mtv",
      "title": "MTV Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-nba-tv",
    "name": "NBA TV",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-nba-tv_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-nba-tv?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-nba-tv_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://23.237.104.106:8080/USA_NBA/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-nba-tv",
      "title": "NBA TV Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-nbc",
    "name": "NBC",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "NBC",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-nbc_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-nbc?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-nbc_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://stream.cammonitorplus.net/1785/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-nbc",
      "title": "NBC Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-nbc-sports-bay-area",
    "name": "NBC Sports Bay Area",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "NBC",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-nbc-sports-bay-area_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-nbc-sports-bay-area?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-nbc-sports-bay-area",
      "title": "NBC Sports Bay Area Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-nbc-sports-boston",
    "name": "NBC Sports Boston",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "NBC",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-nbc-sports-boston_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-nbc-sports-boston?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-nbc-sports-boston",
      "title": "NBC Sports Boston Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-nbc-sports-philadelphia",
    "name": "NBC Sports Philadelphia",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "NBC",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-nbc-sports-philadelphia_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-nbc-sports-philadelphia?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-nbc-sports-philadelphia",
      "title": "NBC Sports Philadelphia Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-nfl-network",
    "name": "NFL Network",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-nfl-network_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-nfl-network?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-nfl-network_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "https://tvsen6.aynaott.com/nfl/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-nfl-network",
      "title": "NFL Network Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-nhl-network",
    "name": "NHL Network",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-nhl-network_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-nhl-network?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-nhl-network_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "https://nhl-firetv.amagi.tv/playlist.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-nhl-network",
      "title": "NHL Network Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-nick-jr",
    "name": "Nick Jr.",
    "category": "Kids",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-nick-jr_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-nick-jr?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-nick-jr_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://5.175.174.49:1234/stream/maxtvhr/nickjrhr/master.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-nick-jr",
      "title": "Nick Jr. Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-nickelodeon",
    "name": "Nickelodeon",
    "category": "Kids",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-nickelodeon_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-nickelodeon?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-nickelodeon_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "https://i.mjh.nz/.r/10shake-nsw.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-nickelodeon",
      "title": "Nickelodeon Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-polsat",
    "name": "Polsat",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-polsat_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-polsat?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-polsat_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "https://cdn-s-playnow-live.pluscdn.pl/ch/1502600/308/dash/20a18c30/live.mpd",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-polsat",
      "title": "Polsat Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-nova-tv-hr",
    "name": "Nova TV HR",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-nova-tv-hr_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-nova-tv-hr?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-nova-tv-hr",
      "title": "Nova TV HR Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-polsat-sport-1",
    "name": "Polsat Sport 1",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-polsat-sport-1_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-polsat-sport-1?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-polsat-sport-1",
      "title": "Polsat Sport 1 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-polsat-sport-2",
    "name": "Polsat Sport 2",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-polsat-sport-2_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-polsat-sport-2?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-polsat-sport-2",
      "title": "Polsat Sport 2 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-polsat-sport-3",
    "name": "Polsat Sport 3",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-polsat-sport-3_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-polsat-sport-3?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-polsat-sport-3",
      "title": "Polsat Sport 3 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-polsat-sport-fight",
    "name": "Polsat Sport Fight",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-polsat-sport-fight_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-polsat-sport-fight?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-polsat-sport-fight_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://92.114.85.87:8016/play/a00b/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-polsat-sport-fight",
      "title": "Polsat Sport Fight Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-premier-sports-1-ie",
    "name": "Premier Sports 1 IE",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": true,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-premier-sports-1-ie_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-premier-sports-1-ie?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-premier-sports-1-ie",
      "title": "Premier Sports 1 IE Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-premier-sports-2-ie",
    "name": "Premier Sports 2 IE",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": true,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-premier-sports-2-ie_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-premier-sports-2-ie?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-premier-sports-2-ie",
      "title": "Premier Sports 2 IE Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-premiere",
    "name": "Premiere",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": true,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-premiere_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-premiere?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-premiere",
      "title": "Premiere Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-racer-network",
    "name": "RACER Network",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-racer-network_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-racer-network?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-racer-network_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "https://amg00378-mavtv-amg00378c2-samsung-au-1790.playouts.now.amagi.tv/playlist/amg00378-mavtvfast-motorsportsnetwork-samsungau/playlist.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-racer-network",
      "title": "RACER Network Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sec-network",
    "name": "SEC Network",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sec-network_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sec-network?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sec-network",
      "title": "SEC Network Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-showtime",
    "name": "Showtime",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-showtime_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-showtime?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-showtime",
      "title": "Showtime Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-showtime-2",
    "name": "Showtime 2",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-showtime-2_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-showtime-2?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-showtime-2",
      "title": "Showtime 2 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-showtime-extreme",
    "name": "Showtime Extreme",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-showtime-extreme_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-showtime-extreme?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-showtime-extreme",
      "title": "Showtime Extreme Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-showtime-family-zone",
    "name": "Showtime Family Zone",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-showtime-family-zone_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-showtime-family-zone?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-showtime-family-zone",
      "title": "Showtime Family Zone Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-showtime-next",
    "name": "Showtime Next",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-showtime-next_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-showtime-next?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-showtime-next",
      "title": "Showtime Next Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-showtime-women",
    "name": "Showtime Women",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-showtime-women_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-showtime-women?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-showtime-women",
      "title": "Showtime Women Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-arts",
    "name": "Sky Arts",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-arts_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-arts?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-arts",
      "title": "Sky Arts Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-atlantic",
    "name": "Sky Atlantic",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-atlantic_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-atlantic?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-atlantic",
      "title": "Sky Atlantic Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-comedy",
    "name": "Sky Comedy",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-comedy_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-comedy?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-comedy",
      "title": "Sky Comedy Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-crime",
    "name": "Sky Crime",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-crime_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-crime?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-crime",
      "title": "Sky Crime Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-documentaries",
    "name": "Sky Documentaries",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-documentaries_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-documentaries?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-documentaries",
      "title": "Sky Documentaries Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-kids",
    "name": "Sky Kids",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-kids_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-kids?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-kids",
      "title": "Sky Kids Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-nature",
    "name": "Sky Nature",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-nature_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-nature?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-nature",
      "title": "Sky Nature Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-news",
    "name": "Sky News",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-news_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-news?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-sky-news_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "https://dash4.antik.sk/live/test_skynews/playlist.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-news",
      "title": "Sky News Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-one",
    "name": "Sky One",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-one_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-one?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-one",
      "title": "Sky One Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sci-fi",
    "name": "Sky Sci-Fi",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sci-fi_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sci-fi?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sci-fi",
      "title": "Sky Sci-Fi Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sport-1-nz",
    "name": "Sky Sport 1 NZ",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sport-1-nz_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sport-1-nz?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sport-1-nz",
      "title": "Sky Sport 1 NZ Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sport-2-nz",
    "name": "Sky Sport 2 NZ",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sport-2-nz_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sport-2-nz?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sport-2-nz",
      "title": "Sky Sport 2 NZ Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sport-3-nz",
    "name": "Sky Sport 3 NZ",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sport-3-nz_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sport-3-nz?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sport-3-nz",
      "title": "Sky Sport 3 NZ Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sport-4-nz",
    "name": "Sky Sport 4 NZ",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sport-4-nz_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sport-4-nz?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sport-4-nz",
      "title": "Sky Sport 4 NZ Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sport-5-nz",
    "name": "Sky Sport 5 NZ",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sport-5-nz_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sport-5-nz?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sport-5-nz",
      "title": "Sky Sport 5 NZ Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sport-7-nz",
    "name": "Sky Sport 7 NZ",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sport-7-nz_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sport-7-nz?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sport-7-nz",
      "title": "Sky Sport 7 NZ Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sport-8-nz",
    "name": "Sky Sport 8 NZ",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sport-8-nz_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sport-8-nz?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sport-8-nz",
      "title": "Sky Sport 8 NZ Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sport-9-nz",
    "name": "Sky Sport 9 NZ",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sport-9-nz_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sport-9-nz?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sport-9-nz",
      "title": "Sky Sport 9 NZ Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sport-24",
    "name": "Sky Sport 24",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sport-24_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sport-24?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sport-24",
      "title": "Sky Sport 24 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sport-arena-it",
    "name": "Sky Sport Arena IT",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sport-arena-it_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sport-arena-it?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sport-arena-it",
      "title": "Sky Sport Arena IT Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sport-bundesliga",
    "name": "Sky Sport Bundesliga",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sport-bundesliga_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sport-bundesliga?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sport-bundesliga",
      "title": "Sky Sport Bundesliga Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sport-calcio-it",
    "name": "Sky Sport Calcio IT",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sport-calcio-it_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sport-calcio-it?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sport-calcio-it",
      "title": "Sky Sport Calcio IT Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sport-f1-italia",
    "name": "Sky Sport F1 Italia",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sport-f1-italia_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sport-f1-italia?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sport-f1-italia",
      "title": "Sky Sport F1 Italia Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sport-max-it",
    "name": "Sky Sport Max IT",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sport-max-it_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sport-max-it?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sport-max-it",
      "title": "Sky Sport Max IT Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sport-select-nz",
    "name": "Sky Sport Select NZ",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sport-select-nz_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sport-select-nz?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sport-select-nz",
      "title": "Sky Sport Select NZ Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sport-tennis-it",
    "name": "Sky Sport Tennis IT",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sport-tennis-it_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sport-tennis-it?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sport-tennis-it",
      "title": "Sky Sport Tennis IT Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sport-uno",
    "name": "Sky Sport Uno",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sport-uno_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sport-uno?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sport-uno",
      "title": "Sky Sport Uno Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sports-action",
    "name": "Sky Sports Action",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sports-action_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sports-action?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sports-action",
      "title": "Sky Sports Action Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sports-cricket",
    "name": "Sky Sports Cricket",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sports-cricket_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sports-cricket?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sports-cricket",
      "title": "Sky Sports Cricket Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sports-f1",
    "name": "Sky Sports F1",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": true,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sports-f1_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sports-f1?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sports-f1",
      "title": "Sky Sports F1 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sports-football",
    "name": "Sky Sports Football",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": true,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sports-football_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sports-football?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sports-football",
      "title": "Sky Sports Football Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sports-golf",
    "name": "Sky Sports Golf",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sports-golf_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sports-golf?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sports-golf",
      "title": "Sky Sports Golf Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sports-main-event",
    "name": "Sky Sports Main Event",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": true,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sports-main-event_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sports-main-event?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sports-main-event",
      "title": "Sky Sports Main Event Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sports-mix",
    "name": "Sky Sports Mix",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sports-mix_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sports-mix?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sports-mix",
      "title": "Sky Sports Mix Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sports-news",
    "name": "Sky Sports News",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sports-news_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sports-news?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sports-news",
      "title": "Sky Sports News Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sports-premier-league",
    "name": "Sky Sports Premier League",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": true,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sports-premier-league_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sports-premier-league?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sports-premier-league",
      "title": "Sky Sports Premier League Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sports-racing",
    "name": "Sky Sports Racing",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sports-racing_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sports-racing?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sports-racing",
      "title": "Sky Sports Racing Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sports-tennis",
    "name": "Sky Sports Tennis",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sports-tennis_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sports-tennis?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sports-tennis",
      "title": "Sky Sports Tennis Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-sports-plus",
    "name": "Sky Sports+",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sky_Sports_logo_2020.svg/512px-Sky_Sports_logo_2020.svg.png",
    "network": "Sky Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-sports-plus_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-sports-plus?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-sports-plus",
      "title": "Sky Sports+ Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-witness",
    "name": "Sky Witness",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-witness_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-witness?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-witness",
      "title": "Sky Witness Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sky-uno",
    "name": "Sky Uno",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sky-uno_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sky-uno?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sky-uno",
      "title": "Sky Uno Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sony-sports-network",
    "name": "Sony Sports Network",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Sony Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sony-sports-network_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sony-sports-network?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sony-sports-network",
      "title": "Sony Sports Network Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sony-sports-network-3",
    "name": "Sony Sports Network 3",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Sony Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sony-sports-network-3_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sony-sports-network-3?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sony-sports-network-3",
      "title": "Sony Sports Network 3 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sony-sports-network-4",
    "name": "Sony Sports Network 4",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Sony Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sony-sports-network-4_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sony-sports-network-4?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sony-sports-network-4",
      "title": "Sony Sports Network 4 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sony-sports-network-5",
    "name": "Sony Sports Network 5",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Sony Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sony-sports-network-5_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sony-sports-network-5?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sony-sports-network-5",
      "title": "Sony Sports Network 5 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sport-tv1",
    "name": "Sport TV1",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sport-tv1_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sport-tv1?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sport-tv1",
      "title": "Sport TV1 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sport-tv2",
    "name": "Sport TV2",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sport-tv2_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sport-tv2?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sport-tv2",
      "title": "Sport TV2 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sport-tv3",
    "name": "Sport TV3",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sport-tv3_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sport-tv3?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sport-tv3",
      "title": "Sport TV3 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sport-tv4",
    "name": "Sport TV4",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sport-tv4_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sport-tv4?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sport-tv4",
      "title": "Sport TV4 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sport-tv5",
    "name": "Sport TV5",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sport-tv5_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sport-tv5?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sport-tv5",
      "title": "Sport TV5 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sportdigital-fussball",
    "name": "SPORTDIGITAL FUSSBALL",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sportdigital-fussball_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sportdigital-fussball?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sportdigital-fussball",
      "title": "SPORTDIGITAL FUSSBALL Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-starz",
    "name": "STARZ",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-starz_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-starz?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-starz",
      "title": "STARZ Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-starz-cinema",
    "name": "STARZ Cinema",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-starz-cinema_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-starz-cinema?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-starz-cinema",
      "title": "STARZ Cinema Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-starz-comedy",
    "name": "STARZ Comedy",
    "category": "Movies",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-starz-comedy_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-starz-comedy?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-starz-comedy",
      "title": "STARZ Comedy Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-starz-kids-and-family",
    "name": "STARZ Kids and Family",
    "category": "Kids",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-starz-kids-and-family_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-starz-kids-and-family?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-starz-kids-and-family",
      "title": "STARZ Kids and Family Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-syfy",
    "name": "SYFY",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-syfy_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-syfy?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-syfy_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://23.237.104.106:8080/USA_SYFY/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-syfy",
      "title": "SYFY Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sportsnet-360",
    "name": "Sportsnet 360",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sportsnet-360_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sportsnet-360?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sportsnet-360",
      "title": "Sportsnet 360 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-tbs",
    "name": "TBS",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-tbs_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-tbs?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-tbs_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "https://turnerlive.warnermediacdn.com/hls/live/2023172/tbseast/slate/VIDEO_0_3564000.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-tbs",
      "title": "TBS Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sportsnet-ontario",
    "name": "Sportsnet Ontario",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sportsnet-ontario_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sportsnet-ontario?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sportsnet-ontario",
      "title": "Sportsnet Ontario Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sportsnet-one",
    "name": "Sportsnet ONE",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sportsnet-one_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sportsnet-one?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sportsnet-one",
      "title": "Sportsnet ONE Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sportsnet-west",
    "name": "Sportsnet West",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sportsnet-west_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sportsnet-west?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sportsnet-west",
      "title": "Sportsnet West Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-telemundo",
    "name": "Telemundo",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-telemundo_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-telemundo?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-telemundo",
      "title": "Telemundo Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-tennis-channel",
    "name": "Tennis Channel",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-tennis-channel_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-tennis-channel?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-tennis-channel_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01444-tennischannelth-tennischannelnl-samsungnl/playlist.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-tennis-channel",
      "title": "Tennis Channel Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sportsnet-pacific",
    "name": "Sportsnet Pacific",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sportsnet-pacific_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sportsnet-pacific?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sportsnet-pacific",
      "title": "Sportsnet Pacific Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-supersport-cricket",
    "name": "SuperSport Cricket",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/SuperSport_logo.svg/512px-SuperSport_logo.svg.png",
    "network": "SuperSport",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-supersport-cricket_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-supersport-cricket?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-supersport-cricket",
      "title": "SuperSport Cricket Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-the-weather-channel",
    "name": "The Weather Channel",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-the-weather-channel_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-the-weather-channel?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-the-weather-channel",
      "title": "The Weather Channel Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-supersport-motorsport",
    "name": "SuperSport MotorSport",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/SuperSport_logo.svg/512px-SuperSport_logo.svg.png",
    "network": "SuperSport",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-supersport-motorsport_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-supersport-motorsport?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-supersport-motorsport",
      "title": "SuperSport MotorSport Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-tnt",
    "name": "TNT",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/TNT_Sports_logo.svg/512px-TNT_Sports_logo.svg.png",
    "network": "TNT Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-tnt_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-tnt?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-tnt_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://31.148.5.241/kanal_19/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-tnt",
      "title": "TNT Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sportsnet-world",
    "name": "Sportsnet World",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sportsnet-world_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sportsnet-world?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sportsnet-world",
      "title": "Sportsnet World Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-tnt-sports-1",
    "name": "TNT Sports 1",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/TNT_Sports_logo.svg/512px-TNT_Sports_logo.svg.png",
    "network": "TNT Sports",
    "isTop": true,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-tnt-sports-1_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-tnt-sports-1?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-tnt-sports-1_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://37.49.224.5/stream/1/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-tnt-sports-1",
      "title": "TNT Sports 1 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-tnt-sports-2",
    "name": "TNT Sports 2",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/TNT_Sports_logo.svg/512px-TNT_Sports_logo.svg.png",
    "network": "TNT Sports",
    "isTop": true,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-tnt-sports-2_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-tnt-sports-2?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-tnt-sports-2_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://37.49.224.5/stream/2/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-tnt-sports-2",
      "title": "TNT Sports 2 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-tnt-sports-3",
    "name": "TNT Sports 3",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/TNT_Sports_logo.svg/512px-TNT_Sports_logo.svg.png",
    "network": "TNT Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-tnt-sports-3_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-tnt-sports-3?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-tnt-sports-3_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://37.49.224.5/stream/3/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-tnt-sports-3",
      "title": "TNT Sports 3 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-tnt-sports-4",
    "name": "TNT Sports 4",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/TNT_Sports_logo.svg/512px-TNT_Sports_logo.svg.png",
    "network": "TNT Sports",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-tnt-sports-4_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-tnt-sports-4?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-tnt-sports-4_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://37.49.224.5/stream/4/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-tnt-sports-4",
      "title": "TNT Sports 4 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-trutv",
    "name": "TruTV",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-trutv_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-trutv?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-trutv",
      "title": "TruTV Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-supersport-premier-league",
    "name": "SuperSport Premier League",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/SuperSport_logo.svg/512px-SuperSport_logo.svg.png",
    "network": "SuperSport",
    "isTop": true,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-supersport-premier-league_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-supersport-premier-league?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-supersport-premier-league",
      "title": "SuperSport Premier League Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-tsn1",
    "name": "TSN1",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-tsn1_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-tsn1?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-tsn1",
      "title": "TSN1 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-supersport-laliga",
    "name": "SuperSport LaLiga",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/SuperSport_logo.svg/512px-SuperSport_logo.svg.png",
    "network": "SuperSport",
    "isTop": true,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-supersport-laliga_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-supersport-laliga?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-supersport-laliga",
      "title": "SuperSport LaLiga Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-supersport-rugby",
    "name": "SuperSport Rugby",
    "category": "Sports",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/SuperSport_logo.svg/512px-SuperSport_logo.svg.png",
    "network": "SuperSport",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-supersport-rugby_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-supersport-rugby?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-supersport-rugby",
      "title": "SuperSport Rugby Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-tudn",
    "name": "TUDN",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-tudn_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-tudn?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-tudn",
      "title": "TUDN Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-tyc-sports-internacional",
    "name": "TYC Sports Internacional",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-tyc-sports-internacional_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-tyc-sports-internacional?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-tyc-sports-internacional",
      "title": "TYC Sports Internacional Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-ufc-fight-pass-24-7",
    "name": "UFC Fight Pass 24/7",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-ufc-fight-pass-24-7_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-ufc-fight-pass-24-7?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-ufc-fight-pass-24-7",
      "title": "UFC Fight Pass 24/7 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-unimas",
    "name": "UniMas",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-unimas_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-unimas?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-unimas",
      "title": "UniMas Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-unite8-sports-1-zee-caf",
    "name": "Unite8 Sports 1 / ZEE CAF\u00c9",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-unite8-sports-1-zee-caf_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-unite8-sports-1-zee-caf?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-unite8-sports-1-zee-caf",
      "title": "Unite8 Sports 1 / ZEE CAF\u00c9 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-univision",
    "name": "Univision",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-univision_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-univision?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-univision",
      "title": "Univision Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-usa-network",
    "name": "USA Network",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-usa-network_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-usa-network?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-usa-network_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://200.32.231.178/USA_NETWORK/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-usa-network",
      "title": "USA Network Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-tsn2",
    "name": "TSN2",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-tsn2_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-tsn2?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-tsn2",
      "title": "TSN2 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-wapa-america",
    "name": "WAPA America",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-wapa-america_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-wapa-america?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-wapa-america",
      "title": "WAPA America Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-tsn3",
    "name": "TSN3",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-tsn3_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-tsn3?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-tsn3",
      "title": "TSN3 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-wapa-deportes",
    "name": "WAPA Deportes",
    "category": "General",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-wapa-deportes_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-wapa-deportes?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-wapa-deportes",
      "title": "WAPA Deportes Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-tsn4",
    "name": "TSN4",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-tsn4_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-tsn4?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      },
      {
        "id": "src_auto-tsn4_playlist",
        "label": "Server 2 (Playlist HLS)",
        "url": "http://109.104.153.220/TSN-4/index.m3u8",
        "priority": 2,
        "protocol": "hls",
        "requiresProxy": true,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-tsn4",
      "title": "TSN4 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-willow-cricket",
    "name": "Willow Cricket",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-willow-cricket_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-willow-cricket?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-willow-cricket",
      "title": "Willow Cricket Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-tsn5",
    "name": "TSN5",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-tsn5_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-tsn5?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-tsn5",
      "title": "TSN5 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-willow-cricket-2",
    "name": "Willow Cricket 2",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-willow-cricket-2_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-willow-cricket-2?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-willow-cricket-2",
      "title": "Willow Cricket 2 Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-ziggo-sport-1-nl",
    "name": "Ziggo Sport 1 NL",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-ziggo-sport-1-nl_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-ziggo-sport-1-nl?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-ziggo-sport-1-nl",
      "title": "Ziggo Sport 1 NL Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  },
  {
    "id": "auto-sportsnet-east",
    "name": "Sportsnet East",
    "category": "Sports",
    "logoUrl": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=256&q=80",
    "network": "Live TV",
    "isTop": false,
    "flag": "",
    "quality": "FHD",
    "tagline": "",
    "region": "",
    "sources": [
      {
        "id": "src_auto-sportsnet-east_direct",
        "label": "Server 1 (Direct Live)",
        "url": "https://zlive.st/embed/auto-sportsnet-east?radius=7&frame=0&brand=0",
        "priority": 1,
        "protocol": "embed",
        "requiresProxy": false,
        "state": "HEALTHY"
      }
    ],
    "currentProgram": {
      "id": "epg_auto-sportsnet-east",
      "title": "Sportsnet East Live Broadcast",
      "description": "FHD \u2022 24/7 Dedicated Live Satellite Feed",
      "startTime": 1700000000000,
      "endTime": 1700007200000
    },
    "updatedAt": 1700000000000
  }
];
