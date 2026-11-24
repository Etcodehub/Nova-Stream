/**
 * NovaStream Edge Media Gateway & CORS Proxy
 * Node.js Native HTTP Proxy for Live & VOD Media Streams
 * Rewrites .m3u8 playlists on the fly to bypass browser CORS restrictions and forward chunk streams.
 */

import http from 'node:http';
import https from 'node:https';
import { URL } from 'node:url';

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

export function createCorsProxyServer(): http.Server {
  const server = http.createServer((req, res) => {
    // 1. Handle CORS Preflight
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Range, Origin, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Length, Content-Range, Accept-Ranges');

    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      res.end();
      return;
    }

    const parsedReqUrl = new URL(req.url || '/', `http://${req.headers.host}`);

    // Healthcheck endpoint
    if (parsedReqUrl.pathname === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'HEALTHY', timestamp: Date.now() }));
      return;
    }

    // Stream proxy endpoint
    if (parsedReqUrl.pathname === '/stream' || parsedReqUrl.pathname === '/') {
      const targetUrlString = parsedReqUrl.searchParams.get('url');
      if (!targetUrlString) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Missing required "url" query parameter. Example: /stream?url=https://example.com/live.m3u8');
        return;
      }

      let targetUrl: URL;
      try {
        targetUrl = new URL(targetUrlString);
      } catch {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Invalid target URL provided');
        return;
      }

      forwardStreamRequest(targetUrl, req, res);
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  });

  return server;
}

function forwardStreamRequest(targetUrl: URL, clientReq: http.IncomingMessage, clientRes: http.ServerResponse): void {
  const clientProtocol = targetUrl.protocol === 'https:' ? https : http;

  const proxyHeaders: Record<string, string> = {
    'User-Agent': clientReq.headers['user-agent'] || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) NovaStream/1.0',
    Accept: clientReq.headers['accept'] || '*/*',
    Host: targetUrl.host,
  };

  if (clientReq.headers['range']) {
    proxyHeaders['Range'] = clientReq.headers['range'] as string;
  }

  // Spoof Referer / Origin matching target host to bypass strict hotlink protections
  proxyHeaders['Referer'] = `${targetUrl.protocol}//${targetUrl.host}/`;
  proxyHeaders['Origin'] = `${targetUrl.protocol}//${targetUrl.host}`;

  const requestOptions: https.RequestOptions = {
    method: clientReq.method,
    headers: proxyHeaders,
  };

  const proxyReq = clientProtocol.request(targetUrl, requestOptions, (originRes) => {
    const statusCode = originRes.statusCode || 200;
    const contentType = originRes.headers['content-type'] || '';

    // Check if response is an HLS playlist (.m3u8) that requires rewriting
    const isM3U8 =
      targetUrl.pathname.endsWith('.m3u8') ||
      contentType.includes('application/vnd.apple.mpegurl') ||
      contentType.includes('application/x-mpegurl');

    if (isM3U8 && statusCode >= 200 && statusCode < 300) {
      let body = '';
      originRes.setEncoding('utf8');
      originRes.on('data', (chunk) => {
        body += chunk;
      });
      originRes.on('end', () => {
        const rewrittenManifest = rewriteM3u8Manifest(body, targetUrl, clientReq.headers.host || `localhost:${PORT}`);
        clientRes.writeHead(statusCode, {
          'Content-Type': 'application/vnd.apple.mpegurl',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache, no-store',
        });
        clientRes.end(rewrittenManifest);
      });
      return;
    }

    // Direct binary stream piping (.ts chunks, fMP4 .m4s, etc.)
    const forwardHeaders: http.OutgoingHttpHeaders = {
      ...originRes.headers,
      'access-control-allow-origin': '*',
      'access-control-expose-headers': 'Content-Length, Content-Range, Accept-Ranges',
    };
    delete forwardHeaders['access-control-allow-credentials'];

    clientRes.writeHead(statusCode, forwardHeaders);
    originRes.pipe(clientRes);
  });

  proxyReq.on('error', (err) => {
    console.error(`[CORS Proxy Error] Failed to fetch ${targetUrl.href}:`, err.message);
    if (!clientRes.headersSent) {
      clientRes.writeHead(502, { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' });
      clientRes.end(`Gateway Error: ${err.message}`);
    }
  });

  clientReq.pipe(proxyReq);
}

/**
 * Rewrites relative and absolute segment URLs in an HLS manifest to pass through the proxy
 */
export function rewriteM3u8Manifest(manifest: string, originUrl: URL, proxyHost: string): string {
  const lines = manifest.split('\n');
  const baseUrl = new URL('.', originUrl).href;

  return lines
    .map((line) => {
      const trimmed = line.trim();
      // Skip comments and directives (lines starting with #)
      if (!trimmed || trimmed.startsWith('#')) {
        // Handle URI attribute in tags like #EXT-X-KEY:METHOD=AES-128,URI="..."
        if (trimmed.includes('URI="')) {
          return trimmed.replace(/URI="([^"]+)"/, (_, matchUri) => {
            const absoluteKeyUrl = new URL(matchUri, baseUrl).href;
            const proxiedKeyUrl = `http://${proxyHost}/stream?url=${encodeURIComponent(absoluteKeyUrl)}`;
            return `URI="${proxiedKeyUrl}"`;
          });
        }
        return line;
      }

      // Segment URL or sub-manifest URL
      const absoluteSegmentUrl = new URL(trimmed, baseUrl).href;
      return `http://${proxyHost}/stream?url=${encodeURIComponent(absoluteSegmentUrl)}`;
    })
    .join('\n');
}

// Start standalone server when executed directly
if (import.meta.url === `file:///${process.argv[1].replace(/\\/g, '/')}`) {
  const server = createCorsProxyServer();
  server.listen(PORT, () => {
    console.log(`[NovaStream CORS Proxy] Running on http://localhost:${PORT}`);
  });
}
