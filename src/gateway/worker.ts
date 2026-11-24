/**
 * NovaStream Edge Media Gateway (Cloudflare Worker)
 * Production Edge Worker script for serverless media proxying and CORS injection.
 * Handles manifest rewriting, relative segment expansion, key/map URI proxying,
 * redirect resolution, and header cleanup.
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
          'Access-Control-Allow-Headers': 'Range, Origin, Accept, Content-Type, Authorization, X-Requested-With',
          'Access-Control-Expose-Headers': 'Content-Length, Content-Range, Accept-Ranges',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    // Health check
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'HEALTHY', edge: 'Cloudflare', timestamp: Date.now() }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    // Embed HTML Gateway: proxy /embed/* directly while preserving pathname for SPA routing
    if (url.pathname.startsWith('/embed/')) {
      const embedUrl = `https://zlive.st${url.pathname}${url.search}`;
      try {
        const originResp = await fetch(embedUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
            'Referer': 'https://zlive.st/',
            'Origin': 'https://zlive.st',
          },
        });
        let html = await originResp.text();
        if (html.includes('<head>')) {
          html = html.replace('<head>', `<head><base href="https://zlive.st/">`);
        }
        const headers = new Headers(originResp.headers);
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Content-Type', 'text/html; charset=utf-8');
        headers.delete('content-encoding');
        headers.delete('content-length');
        headers.delete('x-frame-options');
        headers.delete('content-security-policy');
        headers.delete('cross-origin-resource-policy');
        headers.delete('cross-origin-embedder-policy');

        return new Response(html, {
          status: originResp.status,
          headers,
        });
      } catch (err: unknown) {
        return new Response(`Embed Proxy Error: ${String(err)}`, { status: 502 });
      }
    }

    // Embed Assets Gateway: proxy scripts, fonts, modules from zlive.st
    if (url.pathname.startsWith('/assets/')) {
      const assetUrl = `https://zlive.st${url.pathname}${url.search}`;
      try {
        const assetResp = await fetch(assetUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
            'Referer': 'https://zlive.st/',
            'Origin': 'https://zlive.st',
          },
        });
        const headers = new Headers(assetResp.headers);
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Cache-Control', 'public, max-age=86400');
        headers.delete('content-encoding');
        headers.delete('content-length');

        return new Response(assetResp.body, {
          status: assetResp.status,
          headers,
        });
      } catch (err: unknown) {
        return new Response(`Asset Proxy Error: ${String(err)}`, { status: 502 });
      }
    }

    // Proxy endpoint: /stream?url=<targetUrl>
    if (url.pathname === '/stream') {
      const targetUrlStr = url.searchParams.get('url');
      if (!targetUrlStr) {
        return new Response('Missing "url" query parameter', {
          status: 400,
          headers: { 'Access-Control-Allow-Origin': '*' },
        });
      }

      let targetUrl: URL;
      try {
        targetUrl = new URL(targetUrlStr);
      } catch {
        return new Response('Invalid target URL', {
          status: 400,
          headers: { 'Access-Control-Allow-Origin': '*' },
        });
      }

      const forwardHeaders = new Headers(request.headers);
      forwardHeaders.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36');
      forwardHeaders.set('Referer', `${targetUrl.protocol}//${targetUrl.host}/`);
      forwardHeaders.set('Origin', `${targetUrl.protocol}//${targetUrl.host}`);
      forwardHeaders.set('Accept', '*/*');
      forwardHeaders.delete('host');

      try {
        const originResponse = await fetch(targetUrl.href, {
          method: request.method,
          headers: forwardHeaders,
          redirect: 'follow',
        });

        // Compute base URL from the final URL after any redirects
        const finalUrl = new URL(originResponse.url || targetUrl.href);
        const baseUrl = new URL('.', finalUrl).href;

        const contentType = originResponse.headers.get('content-type') || '';
        const isM3U8 =
          targetUrl.pathname.includes('.m3u8') ||
          targetUrl.pathname.includes('.m3u') ||
          contentType.includes('mpegurl') ||
          contentType.includes('application/x-mpegURL');

        if (isM3U8 && originResponse.ok) {
          const originalManifest = await originResponse.text();

          // Rewrite lines: both plain segment URLs and tag URIs (e.g. URI="key.bin")
          const rewrittenLines = originalManifest.split('\n').map((line) => {
            const trimmed = line.trim();
            if (!trimmed) return line;

            // Handle tag lines with URI attributes (e.g. #EXT-X-KEY, #EXT-X-MAP, #EXT-X-MEDIA)
            if (trimmed.startsWith('#')) {
              if (trimmed.includes('URI="')) {
                return trimmed.replace(/URI="([^"]+)"/g, (_, matchUri) => {
                  try {
                    const absKeyUrl = new URL(matchUri, baseUrl).href;
                    return `URI="${url.origin}/stream?url=${encodeURIComponent(absKeyUrl)}"`;
                  } catch {
                    return `URI="${matchUri}"`;
                  }
                });
              }
              return line;
            }

            // Normal segment or nested child playlist URL
            try {
              const absoluteSegmentUrl = new URL(trimmed, baseUrl).href;
              return `${url.origin}/stream?url=${encodeURIComponent(absoluteSegmentUrl)}`;
            } catch {
              return line;
            }
          });

          return new Response(rewrittenLines.join('\n'), {
            status: originResponse.status,
            headers: {
              'Content-Type': 'application/vnd.apple.mpegurl',
              'Access-Control-Allow-Origin': '*',
              'Cache-Control': 'no-cache, no-store, must-revalidate',
            },
          });
        }

        // HTML Embed Proxying: Inject base href, strip frame blocking headers, and enable CORS
        if (contentType.includes('text/html') && originResponse.ok) {
          let html = await originResponse.text();
          if (html.includes('<head>')) {
            html = html.replace('<head>', `<head><base href="${finalUrl.origin}/">`);
          }
          const responseHeaders = new Headers(originResponse.headers);
          responseHeaders.set('Access-Control-Allow-Origin', '*');
          responseHeaders.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
          responseHeaders.delete('content-encoding');
          responseHeaders.delete('content-length');
          responseHeaders.delete('x-frame-options');
          responseHeaders.delete('content-security-policy');

          return new Response(html, {
            status: originResponse.status,
            headers: responseHeaders,
          });
        }

        // Direct TS chunk, segment or binary stream
        const responseHeaders = new Headers(originResponse.headers);
        responseHeaders.set('Access-Control-Allow-Origin', '*');
        responseHeaders.set('Access-Control-Expose-Headers', 'Content-Length, Content-Range, Accept-Ranges');
        responseHeaders.set('Access-Control-Allow-Headers', 'Range, Origin, Accept, Content-Type');
        responseHeaders.delete('content-encoding');
        responseHeaders.delete('content-length');
        responseHeaders.delete('transfer-encoding');

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
