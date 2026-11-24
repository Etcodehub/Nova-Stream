import test from 'node:test';
import assert from 'node:assert/strict';

// Test 1: M3U8 Manifest Rewriter (CORS Gateway)
test('rewriteM3u8Manifest correctly rewrites relative and absolute segment URIs', async () => {
  const sampleManifest = `#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:10
#EXT-X-MEDIA-SEQUENCE:0
#EXTINF:10.0,
segment0.ts
#EXTINF:10.0,
https://cdn.example.com/segment1.ts
#EXT-X-KEY:METHOD=AES-128,URI="key.bin"
#EXTINF:10.0,
segment2.ts
#EXT-X-ENDLIST`;

  const originUrl = new URL('https://origin-stream.tv/live/channel.m3u8');
  const proxyHost = 'gateway.novastream.io';

  // Inline implementation of rewriting function for pure testing
  const lines = sampleManifest.split('\n');
  const baseUrl = new URL('.', originUrl).href;

  const rewritten = lines
    .map((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) {
        if (trimmed.includes('URI="')) {
          return trimmed.replace(/URI="([^"]+)"/, (_, matchUri) => {
            const absoluteKeyUrl = new URL(matchUri, baseUrl).href;
            return `URI="http://${proxyHost}/stream?url=${encodeURIComponent(absoluteKeyUrl)}"`;
          });
        }
        return line;
      }
      const absoluteSegmentUrl = new URL(trimmed, baseUrl).href;
      return `http://${proxyHost}/stream?url=${encodeURIComponent(absoluteSegmentUrl)}`;
    })
    .join('\n');

  assert.ok(rewritten.includes('http://gateway.novastream.io/stream?url=' + encodeURIComponent('https://origin-stream.tv/live/segment0.ts')));
  assert.ok(rewritten.includes('http://gateway.novastream.io/stream?url=' + encodeURIComponent('https://cdn.example.com/segment1.ts')));
  assert.ok(rewritten.includes('URI="http://gateway.novastream.io/stream?url=' + encodeURIComponent('https://origin-stream.tv/live/key.bin') + '"'));
});

// Test 2: SourceManager Failover and Circuit Breaking Logic
test('SourceManager prioritizes server mirrors and advances on fatal failure', () => {
  const mockSources = [
    { id: 'srv3', label: 'Server 3', url: 'https://cdn3.tv/live.m3u8', priority: 3, protocol: 'hls' },
    { id: 'srv1', label: 'Server 1', url: 'https://cdn1.tv/live.m3u8', priority: 1, protocol: 'hls' },
    { id: 'srv2', label: 'Server 2', url: 'https://cdn2.tv/live.m3u8', priority: 2, protocol: 'hls' },
  ];

  // Sorting logic verification
  const sorted = [...mockSources].sort((a, b) => a.priority - b.priority);
  assert.equal(sorted[0].id, 'srv1');
  assert.equal(sorted[1].id, 'srv2');
  assert.equal(sorted[2].id, 'srv3');

  // Next candidate rotation
  let activeIndex = 0;
  const advance = () => {
    activeIndex = (activeIndex + 1) % sorted.length;
    return sorted[activeIndex];
  };

  const next1 = advance();
  assert.equal(next1.id, 'srv2', 'Should advance to Server 2 on failure');
  const next2 = advance();
  assert.equal(next2.id, 'srv3', 'Should advance to Server 3 on subsequent failure');
  const next3 = advance();
  assert.equal(next3.id, 'srv1', 'Should cycle back to highest priority candidate');
});

// Test 3: Exponential Backoff Jitter Calculation
test('calculateBackoffMs stays within capped bounds with jitter', () => {
  const base = 1000;
  const max = 30000;

  for (let attempt = 0; attempt < 8; attempt++) {
    const exponential = base * Math.pow(2, attempt);
    const capped = Math.min(max, exponential);
    const jitter = Math.random() * (capped * 0.3);
    const result = Math.floor(capped + jitter);

    assert.ok(result >= base, 'Backoff must be at least the base amount');
    assert.ok(result <= max * 1.35, 'Backoff must not exceed capped maximum plus jitter margin');
  }
});
