/**
 * NovaStream Edge Media Gateway (Cloudflare Worker)
 * Production Edge Worker script for serverless media proxying and CORS injection.
 */

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    // 1. Handle CORS Preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
          'Access-Control-Allow-Headers': 'Range, Origin, Accept, Content-Type, Authorization',
          'Access-Control-Expose-Headers': 'Content-Length, Content-Range, Accept-Ranges',
        },
      });
    }

    // Health check
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'HEALTHY', edge: 'Cloudflare' }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    // Proxy endpoint: /stream?url=<targetUrl>
    if (url.pathname === '/stream') {
      const targetUrlStr = url.searchParams.get('url');
      if (!targetUrlStr) {
        return new Response('Missing "url" query parameter', { status: 400 });
      }

      let targetUrl: URL;
      try {
        targetUrl = new URL(targetUrlStr);
      } catch {
        return new Response('Invalid target URL', { status: 400 });
      }

      const forwardHeaders = new Headers(request.headers);
      forwardHeaders.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) NovaStream/1.0');
      forwardHeaders.set('Referer', `${targetUrl.protocol}//${targetUrl.host}/`);
      forwardHeaders.set('Origin', `${targetUrl.protocol}//${targetUrl.host}`);
      forwardHeaders.delete('host');

      try {
        const originResponse = await fetch(targetUrl.href, {
          method: request.method,
          headers: forwardHeaders,
        });

        const contentType = originResponse.headers.get('content-type') || '';
        const isM3U8 = targetUrl.pathname.endsWith('.m3u8') || contentType.includes('mpegurl');

        if (isM3U8 && originResponse.ok) {
          const originalManifest = await originResponse.text();
          const baseUrl = new URL('.', targetUrl).href;
          const rewrittenLines = originalManifest.split('\n').map((line) => {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith('#')) return line;
            const absoluteSegmentUrl = new URL(trimmed, baseUrl).href;
            return `${url.origin}/stream?url=${encodeURIComponent(absoluteSegmentUrl)}`;
          });

          return new Response(rewrittenLines.join('\n'), {
            status: originResponse.status,
            headers: {
              'Content-Type': 'application/vnd.apple.mpegurl',
              'Access-Control-Allow-Origin': '*',
              'Cache-Control': 'no-cache, no-store',
            },
          });
        }

        // Direct chunk or segment stream
        const responseHeaders = new Headers(originResponse.headers);
        responseHeaders.set('Access-Control-Allow-Origin', '*');
        responseHeaders.set('Access-Control-Expose-Headers', 'Content-Length, Content-Range, Accept-Ranges');

        return new Response(originResponse.body, {
          status: originResponse.status,
          headers: responseHeaders,
        });
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        return new Response(`Gateway Fetch Error: ${message}`, {
          status: 502,
          headers: { 'Access-Control-Allow-Origin': '*' },
        });
      }
    }

    return new Response('NovaStream Edge Gateway Active', {
      headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' },
    });
  },
};
