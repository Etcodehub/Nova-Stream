/**
 * NovaPlayer
 * Production-ready web video player engine integrating Hls.js, ClearKey EME,
 * automated multi-server failover via SourceManager, and sandboxed iframe embeds.
 */

import Hls from 'hls.js';
import type { Channel, StreamSource, PlayerPlaybackState, ClearKeyConfig } from '../types/index.ts';
import { SourceManager } from './SourceManager.ts';

export type PlayerStateListener = (state: PlayerPlaybackState) => void;

export class NovaPlayer {
  private videoElement: HTMLVideoElement;
  private iframeElement: HTMLIFrameElement | null = null;
  private hls: Hls | null = null;
  private sourceManager: SourceManager;
  private currentChannel: Channel | null = null;
  private playbackState: PlayerPlaybackState;
  private listeners: Set<PlayerStateListener> = new Set();
  private stallCheckInterval: number | null = null;
  private lastPlaybackTime = 0;
  private stallCounter = 0;
  private proxyGatewayBase = '';

  constructor(videoElement: HTMLVideoElement, proxyGatewayBase = '', iframeElement?: HTMLIFrameElement) {
    this.videoElement = videoElement;
    this.iframeElement = iframeElement || null;
    this.proxyGatewayBase = proxyGatewayBase;
    this.sourceManager = new SourceManager([]);

    this.playbackState = {
      currentSource: null,
      state: 'idle',
      isLive: true,
      currentTime: 0,
      duration: 0,
      bufferedEnd: 0,
      activeQuality: 'Auto',
      availableQualities: ['Auto'],
      candidateSources: [],
      failoverHistory: [],
    };

    this.initEventListeners();
  }

  public setProxyGateway(gatewayUrl: string): void {
    this.proxyGatewayBase = gatewayUrl;
  }

  public subscribe(listener: PlayerStateListener): () => void {
    this.listeners.add(listener);
    listener(this.getState());
    return () => this.listeners.delete(listener);
  }

  public getState(): PlayerPlaybackState {
    return {
      ...this.playbackState,
      candidateSources: this.sourceManager.getSources(),
    };
  }

  public getSourceManager(): SourceManager {
    return this.sourceManager;
  }

  public getCurrentChannel(): Channel | null {
    return this.currentChannel;
  }

  /**
   * Loads a Channel and initiates playback from highest priority source
   */
  public async loadChannel(channel: Channel): Promise<void> {
    this.currentChannel = channel;
    this.sourceManager.setSources(channel.sources);
    const primarySource = this.sourceManager.getActiveSource();

    if (!primarySource) {
      this.updateState({ state: 'error' });
      return;
    }

    await this.mountSource(primarySource);
  }

  /**
   * Switches to a specific mirror manually (e.g. user selected Server 2)
   */
  public async selectSource(sourceId: string): Promise<void> {
    const selected = this.sourceManager.manuallySelectSource(sourceId);
    if (selected) {
      await this.mountSource(selected);
    }
  }

  /**
   * Retries the current channel stream
   */
  public async retry(): Promise<void> {
    if (this.currentChannel) {
      console.info('[NovaPlayer] Retrying channel playback for:', this.currentChannel.name);
      await this.loadChannel(this.currentChannel);
    }
  }

  /**
   * Simulates a server failure to test and demonstrate automatic failover
   */
  public triggerSimulatedFailure(): void {
    console.warn('[NovaPlayer] Simulating live server crash for testing...');
    this.handleSourceFailure('Simulated Server Failure');
  }

  /**
   * Mounts a stream source into the video element or iframe embed
   */
  private async mountSource(source: StreamSource): Promise<void> {
    this.updateState({
      currentSource: source,
      state: 'loading',
    });

    this.destroyHls();

    // Check if the stream is an embed iframe provider
    const isEmbed =
      source.protocol === 'embed' ||
      source.url.includes('/embed/') ||
      source.url.includes('.st/embed') ||
      source.url.includes('embedsports');

    if (isEmbed && this.iframeElement) {
      console.info('[NovaPlayer] Activating responsive embed player for:', source.url);
      this.videoElement.pause();
      this.videoElement.removeAttribute('src');
      this.videoElement.load();
      this.videoElement.style.display = 'none';
      this.iframeElement.style.display = 'block';

      // Route via Cloudflare Edge Gateway if proxy requested to bypass geo-blocking & CORS
      let embedTargetUrl = source.url;
      if (source.requiresProxy && this.proxyGatewayBase && !source.url.startsWith(this.proxyGatewayBase)) {
        embedTargetUrl = `${this.proxyGatewayBase}/stream?url=${encodeURIComponent(source.url)}`;
      }

      this.iframeElement.src = embedTargetUrl;
      this.sourceManager.markSourceHealthy(source.id);
      this.updateState({
        state: 'playing',
        activeQuality: 'Embed HD Live',
        availableQualities: ['Embed HD Live'],
      });
      return;
    }

    // Switch back to standard video element for HLS / direct streams
    if (this.iframeElement) {
      this.iframeElement.src = 'about:blank';
      this.iframeElement.style.display = 'none';
    }
    this.videoElement.style.display = 'block';

    let targetUrl = source.url;
    if (source.requiresProxy && this.proxyGatewayBase) {
      targetUrl = `${this.proxyGatewayBase}/stream?url=${encodeURIComponent(source.url)}`;
    }

    // Configure ClearKey DRM if present
    if (source.drm) {
      await this.setupClearKey(source.drm);
    }

    if (source.protocol === 'hls' || targetUrl.includes('.m3u8')) {
      if (Hls.isSupported()) {
        this.hls = new Hls({
          enableWorker: true,
          autoStartLoad: true,
          lowLatencyMode: true,
          startFragPrefetch: true,
          backBufferLength: 10,
          maxBufferLength: 10,
          maxMaxBufferLength: 20,
          maxBufferHole: 0.3,
          liveSyncDurationCount: 1,
          liveMaxLatencyDurationCount: 3,
          maxFragLookUpTolerance: 0.15,
          nudgeOffset: 0.1,
          nudgeMaxRetry: 5,
          startLevel: -1,
          abrEwmaDefaultEstimate: 500_000,
          fragLoadPolicy: {
            default: {
              maxLoadTimeMs: 30_000,
              maxTimeToFirstByteMs: 30_000,
              errorRetry: {
                maxNumRetry: 10,
                retryDelayMs: 1000,
                maxRetryDelayMs: 10_000,
              },
              timeoutRetry: {
                maxNumRetry: 10,
                retryDelayMs: 0,
                maxRetryDelayMs: 0,
              },
            },
          },
          manifestLoadPolicy: {
            default: {
              maxLoadTimeMs: 15_000,
              maxTimeToFirstByteMs: 15_000,
              errorRetry: {
                maxNumRetry: 6,
                retryDelayMs: 800,
                maxRetryDelayMs: 8_000,
              },
              timeoutRetry: {
                maxNumRetry: 6,
                retryDelayMs: 500,
                maxRetryDelayMs: 5_000,
              },
            },
          },
        });

        this.hls.attachMedia(this.videoElement);

        this.hls.on(Hls.Events.MEDIA_ATTACHED, () => {
          this.hls?.loadSource(targetUrl);
        });

        this.hls.on(Hls.Events.MANIFEST_PARSED, (_, data) => {
          const qualities = ['Auto', ...data.levels.map((l) => `${l.height}p`)];
          this.updateState({
            availableQualities: qualities,
            state: 'playing',
          });
          this.sourceManager.markSourceHealthy(source.id);
          this.videoElement.play().catch(() => {
            // Autoplay might be muted by browser policy
            this.videoElement.muted = true;
            this.videoElement.play().catch(console.error);
          });
        });

        let mediaRecoveryAttempts = 0;
        let networkRecoveryAttempts = 0;
        this.hls.on(Hls.Events.ERROR, (_, data) => {
          if (data.fatal) {
            if (data.type === Hls.ErrorTypes.NETWORK_ERROR && networkRecoveryAttempts < 2) {
              networkRecoveryAttempts++;
              console.warn('[NovaPlayer] Network hiccup, attempting HLS reload:', data.details);
              this.hls?.startLoad();
              return;
            }
            if (data.type === Hls.ErrorTypes.MEDIA_ERROR && mediaRecoveryAttempts < 2) {
              mediaRecoveryAttempts++;
              console.warn('[NovaPlayer] Media error, attempting recovery:', data.details);
              this.hls?.recoverMediaError();
              return;
            }
            console.error('[NovaPlayer] Fatal HLS error encountered:', data.type, data.details);
            this.handleSourceFailure(`HLS Fatal: ${data.details}`);
          }
        });
      } else if (this.videoElement.canPlayType('application/vnd.apple.mpegurl')) {
        // Native Safari HLS
        this.videoElement.src = targetUrl;
        this.videoElement.play().catch(console.error);
        this.sourceManager.markSourceHealthy(source.id);
      } else {
        this.handleSourceFailure('HLS Not Supported in Browser');
      }
    } else {
      // Direct MP4 / Progressive stream
      this.videoElement.src = targetUrl;
      this.videoElement.play().catch(console.error);
      this.sourceManager.markSourceHealthy(source.id);
    }

    this.startStallWatchdog();
  }

  /**
   * Handles stream disruption and triggers failover to next candidate mirror
   */
  private handleSourceFailure(reason: string): void {
    const failedSource = this.playbackState.currentSource;
    const historyEntry = {
      sourceId: failedSource?.id || 'unknown',
      label: failedSource?.label || 'Unknown',
      reason,
      timestamp: Date.now(),
    };

    const nextSource = this.sourceManager.advanceToNextSource(reason);

    this.updateState({
      failoverHistory: [historyEntry, ...this.playbackState.failoverHistory].slice(0, 10),
    });

    if (nextSource) {
      console.info(`[NovaPlayer] Auto-failover: Switching to ${nextSource.label} (${nextSource.url})`);
      this.mountSource(nextSource);
    } else {
      console.error('[NovaPlayer] All stream sources exhausted.');
      this.updateState({ state: 'error' });
    }
  }

  /**
   * Browser ClearKey DRM Setup via W3C Encrypted Media Extensions (EME)
   */
  private async setupClearKey(drm: ClearKeyConfig): Promise<void> {
    if (!navigator.requestMediaKeySystemAccess) {
      console.warn('[NovaPlayer] Encrypted Media Extensions not supported.');
      return;
    }

    try {
      const config: MediaKeySystemConfiguration[] = [
        {
          initDataTypes: ['cenc', 'keyids'],
          videoCapabilities: [{ contentType: 'video/mp4; codecs="avc1.42E01E"' }],
        },
      ];

      const keySystemAccess = await navigator.requestMediaKeySystemAccess('org.w3.clearkey', config);
      const mediaKeys = await keySystemAccess.createMediaKeys();
      await this.videoElement.setMediaKeys(mediaKeys);

      const session = mediaKeys.createSession();

      // Convert hex/ascii keyId and key to JWK
      const jwkKey = {
        kty: 'oct',
        kid: btoa(drm.keyId).replace(/=/g, ''),
        k: btoa(drm.key).replace(/=/g, ''),
      };

      const licensePayload = new TextEncoder().encode(JSON.stringify({ keys: [jwkKey] }));
      await session.update(licensePayload);
      console.info('[NovaPlayer] ClearKey DRM configured successfully.');
    } catch (err) {
      console.warn('[NovaPlayer] ClearKey setup failed or skipped:', err);
    }
  }

  /**
   * Watchdog for live stream freeze / silent stall
   */
  private startStallWatchdog(): void {
    if (this.stallCheckInterval) clearInterval(this.stallCheckInterval);
    this.lastPlaybackTime = this.videoElement.currentTime;
    this.stallCounter = 0;

    this.stallCheckInterval = window.setInterval(() => {
      const state = this.playbackState.state;
      if (!this.videoElement.paused && (state === 'playing' || state === 'buffering')) {
        const currentTime = this.videoElement.currentTime;
        if (Math.abs(currentTime - this.lastPlaybackTime) < 0.05) {
          this.stallCounter++;
          if (this.stallCounter === 3 && this.hls) {
            console.warn('[NovaPlayer] Buffering >3s, nudging to live edge...');
            if (typeof this.hls.liveSyncPosition === 'number' && this.hls.liveSyncPosition > 0) {
              this.videoElement.currentTime = this.hls.liveSyncPosition;
            }
            this.hls.startLoad();
          } else if (this.stallCounter >= 7) {
            console.warn('[NovaPlayer] Watchdog detected prolonged buffering stall (7s).');
            this.handleSourceFailure('Stream Buffer Stall Timeout (7s)');
          }
        } else {
          this.stallCounter = 0;
          this.lastPlaybackTime = currentTime;
        }
      }
    }, 1000);
  }

  private initEventListeners(): void {
    this.videoElement.addEventListener('playing', () => this.updateState({ state: 'playing' }));
    this.videoElement.addEventListener('pause', () => this.updateState({ state: 'paused' }));
    this.videoElement.addEventListener('waiting', () => this.updateState({ state: 'buffering' }));
    this.videoElement.addEventListener('timeupdate', () => {
      const buffered = this.videoElement.buffered;
      const bufferedEnd = buffered.length > 0 ? buffered.end(buffered.length - 1) : 0;
      this.updateState({
        currentTime: this.videoElement.currentTime,
        duration: this.videoElement.duration || 0,
        bufferedEnd,
      });
    });
  }

  private destroyHls(): void {
    if (this.hls) {
      this.hls.destroy();
      this.hls = null;
    }
  }

  private updateState(partial: Partial<PlayerPlaybackState>): void {
    this.playbackState = {
      ...this.playbackState,
      ...partial,
      candidateSources: this.sourceManager.getSources(),
    };
    this.listeners.forEach((listener) => listener(this.playbackState));
  }

  public stop(): void {
    if (this.stallCheckInterval) clearInterval(this.stallCheckInterval);
    this.destroyHls();
    if (this.videoElement) {
      this.videoElement.pause();
      this.videoElement.removeAttribute('src');
      this.videoElement.load();
    }
    if (this.iframeElement) {
      this.iframeElement.src = 'about:blank';
    }
    this.updateState({ state: 'idle' });
  }

  public destroy(): void {
    if (this.stallCheckInterval) clearInterval(this.stallCheckInterval);
    this.destroyHls();
  }
}
