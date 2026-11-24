# NovaStream Web

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Bundler-Vite_6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

> **High-performance, fault-tolerant web media streaming architecture.** Engineered with zero-latency IndexedDB caching, V3 monotonic delta synchronization, dynamic multi-source failover, ClearKey DRM support, and edge CORS manifest rewriting.

---

## 🏗️ Architectural Overview

NovaStream adapts battle-tested media streaming engineering patterns into a modern, pure-browser ecosystem:

```mermaid
flowchart TD
    subgraph BrowserClient [NovaStream Web Client]
        UI["Modern Web Interface"]
        Cache["IndexedDB FastCache (0ms Startup)"]
        Reconciler["V3 Delta Sync Reconciler"]
        PlayerEngine["NovaPlayer (MSE / EME Engine)"]
        SourceMgr["SourceManager (Multi-Mirror Failover)"]
        
        UI <--> Cache
        UI --> PlayerEngine
        PlayerEngine --> SourceMgr
        Reconciler <-->|Monotonic Revision Check| Cache
    end

    subgraph EdgeLayer [Edge Routing & Gateway]
        Gateway["Edge CORS Proxy (Worker / Node.js)"]
        AuthOrigin["Origin Authentication / Referer Header"]
    end

    subgraph MediaOrigins [Live Media Origins & CDNs]
        PrimaryCDN["Primary CDN (FHD 60FPS)"]
        BackupCDN["Backup CDN (720p Mirror)"]
        SDMirror["Tertiary SD Fallback"]
    end

    Reconciler -->|1. Sync Delta (304 / Patch)| UI
    SourceMgr -->|2. Request Stream (Active Mirror)| Gateway
    Gateway -->|3. Manifest Rewrite & CORS Injection| PrimaryCDN
    SourceMgr -.->|Auto-Failover on 404/Stall| BackupCDN
```

---

## 🌟 Core Features

### 1. Multi-Source Failover Engine (`src/player/SourceManager.ts`)
* Replicates enterprise player failover (`PlayerLiveSourceManager`).
* Each channel defines multiple redundant mirrors (`sources[]`) sorted by priority.
* **Intelligent Circuit Breaker:** Detects fatal segment drops (404, 502, network errors, or buffer stalls > 6s) and instantly rotates playback to the next healthy candidate mirror without tearing down player UI.
* **Automatic Quarantine:** Temporarily quarantines failing servers with exponential backoff cooldowns before re-testing.

### 2. Zero-Latency Startup Cache (`src/cache/FastCacheManager.ts`)
* Implements browser IndexedDB persistence (`NovaStream_FastCache`).
* Channels and EPG metadata are restored **instantaneously (0ms)** from local storage on app boot, rendering UI grids before making any network requests.

### 3. V3 Monotonic Delta Sync Protocol (`src/sync/DeltaSyncService.ts`)
* Eliminates heavy full-catalog payload downloads.
* Exchanges only incremental deltas using a monotonic `activeRevision` integer:
  * Returns `HTTP 304 Not Modified` if local revision is current.
  * Delivers atomic `UPSERT` and `DELETE` delta patches when revisions bump.
* Features decorrelated exponential backoff with jitter for network fault resilience.

### 4. Edge CORS Media Gateway (`src/gateway/`)
* Standard web browsers enforce strict CORS and origin restrictions on HLS playlists (`.m3u8`) and transport streams (`.ts`, `.m4s`).
* NovaStream provides two production gateway implementations:
  1. **Node.js Gateway (`src/gateway/corsProxy.ts`):** Native HTTP/HTTPS streaming proxy that dynamically rewrites relative/absolute playlist URLs to route chunks through the proxy and injects `Access-Control-Allow-Origin: *`.
  2. **Cloudflare Worker (`src/gateway/worker.ts`):** Serverless edge proxy ready for global distribution via Wrangler.

### 5. ClearKey DRM Integration (`src/player/NovaPlayer.ts`)
* Fully compliant with W3C Encrypted Media Extensions (EME).
* Converts 16-byte key and key ID pairs into JSON Web Key (JWK) sets and binds them directly to media key sessions.

---

## 🚀 Quickstart

### Prerequisites
* Node.js `v18+` or `v20+` (tested on Node v26)
* npm `v9+`

### 1. Installation
```bash
git clone <your-repo-url> novastream
cd novastream
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Standalone Edge CORS Proxy (Optional)
```bash
npm run gateway
```
The CORS proxy will run on `http://localhost:8080`.

### 4. Run Unit Test Suite
```bash
npm test
```

### 5. Production Build
```bash
npm run build
```

---

## 📁 Repository Layout

```text
novastream/
├── src/
│   ├── types/
│   │   └── index.ts               # Core domain models (Channel, StreamSource, Delta)
│   ├── cache/
│   │   └── FastCacheManager.ts    # 0ms IndexedDB local persistence engine
│   ├── sync/
│   │   └── DeltaSyncService.ts    # V3 monotonic delta sync reconciler
│   ├── player/
│   │   ├── SourceManager.ts       # Multi-server failover & circuit breaker
│   │   └── NovaPlayer.ts          # Hls.js wrapper + ClearKey EME integration
│   ├── gateway/
│   │   ├── corsProxy.ts           # Standalone Node.js CORS & manifest rewriter
│   │   └── worker.ts              # Cloudflare Worker edge streaming gateway
│   ├── mockData.ts                # Verified live test streams & sample channels
│   ├── style.css                  # Modern dark-mode streaming UI
│   └── main.ts                    # UI entrypoint and orchestrator
├── test/
│   └── streaming_core.test.js     # Unit test suite for manifest rewriting & failover
├── wrangler.jsonc                 # Cloudflare Worker configuration
├── vite.config.ts                 # Vite bundler configuration
├── tsconfig.json                  # TypeScript compiler settings
└── package.json
```

---

## 🔗 Pushing to Your GitHub Repository

To connect and push this code to a remote GitHub repository:

```bash
# 1. Add your GitHub remote URL
git remote add origin https://github.com/<your-username>/novastream.git

# 2. Stage and commit all files
git add .
git commit -m "feat: initial commit of NovaStream web streaming core"

# 3. Push to main branch
git branch -M main
git push -u origin main
```

---

## 📄 License
This project is licensed under the MIT License.
