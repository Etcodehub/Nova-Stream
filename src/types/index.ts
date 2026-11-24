/**
 * NovaStream Core Domain Types
 * Production architecture modeled after high-performance live and VOD streaming engines.
 */

export type StreamProtocol = 'hls' | 'dash' | 'mp4' | 'progressive' | 'embed';

export type ExtractionState = 'IDLE' | 'CHECKING' | 'HEALTHY' | 'DEGRADED' | 'FAILED';

export interface ClearKeyConfig {
  keyId: string; // 16-byte hex or base64
  key: string;   // 16-byte hex or base64
}

export interface StreamSource {
  id: string;
  label: string; // e.g. "Server 1 (FHD - Primary CDN)", "Server 2 (Backup)"
  url: string;
  priority: number; // 1 is highest priority
  protocol: StreamProtocol;
  drm?: ClearKeyConfig;
  requiresProxy?: boolean; // Set true when origin requires Edge CORS injection or Referer spoofing
  headers?: Record<string, string>;
  state?: ExtractionState;
  failureCount?: number;
  lastCheckedAt?: number;
  latencyMs?: number;
}

export interface EPGProgram {
  id: string;
  title: string;
  description?: string;
  startTime: number; // Unix timestamp in ms
  endTime: number;   // Unix timestamp in ms
}

export interface Channel {
  id: string;
  name: string;
  category: 'Sports' | 'Movies' | 'Kids' | 'News' | 'Entertainment' | 'Documentary' | 'General';
  logoUrl: string;
  epgId?: string;
  network?: string;
  isTop?: boolean;
  flag?: string;
  quality?: string;
  tagline?: string;
  region?: string;
  sources: StreamSource[];
  currentProgram?: EPGProgram;
  updatedAt: number;
}

export type DeltaAction = 'UPSERT' | 'DELETE';

export interface DeltaItem {
  action: DeltaAction;
  channelId: string;
  channel?: Channel; // Provided when action is 'UPSERT'
}

export interface DeltaSyncResponse {
  activeRevision: number;
  previousRevision: number;
  deltas: DeltaItem[];
  serverTime: number;
}

export interface FastCacheMetadata {
  activeRevision: number;
  lastSyncTimestamp: number;
  schemaVersion: number;
  totalChannels: number;
}

export interface PlayerPlaybackState {
  currentSource: StreamSource | null;
  state: 'idle' | 'loading' | 'playing' | 'paused' | 'buffering' | 'error';
  isLive: boolean;
  currentTime: number;
  duration: number;
  bufferedEnd: number;
  activeQuality: string;
  availableQualities: string[];
  candidateSources: StreamSource[];
  failoverHistory: Array<{
    sourceId: string;
    label: string;
    reason: string;
    timestamp: number;
  }>;
}
