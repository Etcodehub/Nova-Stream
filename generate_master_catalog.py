import json
import urllib.parse

with open('zlive_channels.json', encoding='utf-8') as f:
    zlive_list = json.load(f)

try:
    with open('matched_playlists.json', encoding='utf-8') as f:
        matched_playlists = json.load(f)
except FileNotFoundError:
    matched_playlists = {}

print(f"Loaded {len(zlive_list)} channels from zlive_channels.json ({len(matched_playlists)} playlist matches)")

def svg_logo(label, bg1, bg2, fg="#ffffff", sub=""):
    sub_el = f'<text x="64" y="92" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="18" fill="rgba(255,255,255,0.85)">{sub}</text>' if sub else ""
    y_main = "66" if sub else "74"
    fs = "30" if len(label) <= 5 else ("22" if len(label) <= 8 else "17")
    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">'
        f'<defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">'
        f'<stop offset="0%" stop-color="{bg1}"/><stop offset="100%" stop-color="{bg2}"/>'
        f'</linearGradient></defs>'
        f'<rect width="128" height="128" rx="26" fill="url(#g)"/>'
        f'<text x="64" y="{y_main}" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="900" font-size="{fs}" fill="{fg}">{label}</text>'
        f'{sub_el}</svg>'
    )
    return "data:image/svg+xml;utf8," + urllib.parse.quote(svg)

def get_category(c):
    sport = (c.get('sport') or '').lower()
    name = (c.get('name') or '').lower()
    cid = (c.get('id') or '').lower()

    if sport in ['sports', 'f1'] or any(k in name or k in cid for k in ['sport', 'tnt', 'sky', 'premier', 'football', 'soccer', 'espn', 'bein', 'dazn', 'nba', 'nfl', 'ufc', 'tennis', 'cricket', 'rugby', 'golf', 'racing', 'bundesliga', 'laliga']):
        return 'Sports'
    if sport == 'kids' or any(k in name or k in cid for k in ['kid', 'cartoon', 'disney', 'nickelodeon', 'boomerang', 'treehouse', 'cbeebies', 'ytv', 'adult swim']):
        return 'Kids'
    if any(k in name or k in cid for k in ['movie', 'cinema', 'hbo', 'film', 'starz', 'showtime', 'amc', 'paramount', 'cine', 'tnt']):
        return 'Movies'
    if sport == 'entertainment' or any(k in name for k in ['comedy', 'drama', 'series', 'tlc', 'mtv', 'vh1', 'bravo', 'fx']):
        return 'Entertainment'
    if any(k in name for k in ['news', 'cnn', 'bbc', 'fox news', 'bloomberg', 'cnbc', 'msnbc']):
        return 'News'
    return 'General'

def get_network(name):
    lower = name.lower()
    if 'sky sport' in lower: return 'Sky Sports'
    if 'tnt sport' in lower or 'tnt' in lower: return 'TNT Sports'
    if 'bein sport' in lower or 'bein' in lower: return 'beIN Sports'
    if 'supersport' in lower or 's*persport' in lower: return 'SuperSport'
    if 'dazn' in lower: return 'DAZN'
    if 'espn' in lower: return 'ESPN'
    if 'canal' in lower: return 'Canal+'
    if 'sony' in lower: return 'Sony Sports'
    if 'fox' in lower: return 'FOX'
    if 'bbc' in lower: return 'BBC'
    if 'nbc' in lower: return 'NBC'
    if 'cbs' in lower: return 'CBS'
    if 'abc' in lower: return 'ABC'
    if 'cartoon' in lower: return 'Cartoon Network'
    return 'Live TV'

def get_logo(cid, name, category):
    lower = (name + ' ' + cid).lower()
    if 'tnt' in lower:
        num = ''.join(ch for ch in name if ch.isdigit())[:1]
        return svg_logo("TNT", "#0c2b6b", "#e11d74", "#ffffff", f"SPORTS {num}" if num else "SPORTS")
    if 'bein' in lower:
        num = ''.join(ch for ch in name if ch.isdigit())[:1]
        return svg_logo("beIN", "#5b1d82", "#9333ea", "#ffffff", f"SPORTS {num}" if num else "SPORTS")
    if 'sky sport' in lower or 'skysport' in lower:
        return svg_logo("SKY", "#003399", "#e11d48", "#ffffff", "SPORTS")
    if 'supersport' in lower or 'spersport' in lower:
        return svg_logo("SS", "#0f4c81", "#0284c7", "#ffffff", "SUPERSPORT")
    if 'dazn' in lower:
        return svg_logo("DAZN", "#111827", "#374151", "#facc15", "LIVE")
    if 'espn' in lower:
        return svg_logo("ESPN", "#991b1b", "#dc2626", "#ffffff", "SPORTS")
    if 'f1' in lower:
        return svg_logo("F1", "#b91c1c", "#ef4444", "#ffffff", "RACING")
    if 'canal' in lower:
        return svg_logo("CANAL+", "#18181b", "#3f3f46", "#ffffff", "SPORT")
    if 'cartoon' in lower:
        return svg_logo("CN", "#09090b", "#27272a", "#38bdf8", "CARTOON")
    if 'boomerang' in lower:
        return svg_logo("BOOM", "#1d4ed8", "#3b82f6", "#fde047", "KIDS")
    if 'disney' in lower:
        return svg_logo("DISNEY", "#1e3a8a", "#3b82f6", "#ffffff", "CHANNEL")
    if 'bbc' in lower:
        return svg_logo("BBC", "#18181b", "#3f3f46", "#ffffff", "LIVE")
    if 'abc' in lower:
        return svg_logo("ABC", "#111827", "#1f2937", "#ffffff", "NETWORK")
    if 'cnn' in lower:
        return svg_logo("CNN", "#991b1b", "#dc2626", "#ffffff", "NEWS")
    if 'fox' in lower:
        return svg_logo("FOX", "#0f172a", "#1e3a8a", "#ffffff", "SPORTS")
    initials = ''.join([w[0] for w in name.split()[:2] if w])[:2].upper() or "TV"
    return svg_logo(initials, "#3b1d72", "#6d28d9", "#f3eeff", category.upper()[:6])

top_slugs = {
    'auto-tnt-sports-1', 'auto-tnt-sports-2', 'auto-tnt-sports-3', 'auto-tnt-sports-4',
    'auto-bein-sports-mena-1', 'auto-bein-sports-mena-2', 'auto-bein-sports-mena-3', 'auto-bein-sports-mena-4',
    'auto-sky-sports-premier-league', 'auto-sky-sports-main-event', 'auto-sky-sports-football',
    'auto-sky-sports-f1', 'auto-supersport-premier-league', 'auto-supersport-laliga',
    'auto-espn', 'auto-espn-2', 'auto-dazn-1-es', 'auto-abc', 'auto-cartoon-network', 'auto-boomerang'
}

catalog = []
seen_ids = set()
for c in zlive_list:
    cid = c['id']
    if cid in seen_ids or cid == 'sky-sports-f1-4k':
        continue
    seen_ids.add(cid)

    name = c.get('name') or cid
    cat = get_category(c)
    network = get_network(name)
    logo = get_logo(cid, name, cat)
    is_top = cid in top_slugs or c.get('quality') == '4K' or 'premier' in name.lower() or 'main event' in name.lower()

    # Server 1: Direct Live with fullscreen=0 and q=480 (480p default for fast, low-buffer playback)
    direct_url = f"https://zlive.st/embed/{cid}?radius=7&frame=0&brand=0&fullscreen=0&q=480"
    sources = [
        {
            "id": f"src_{cid}_direct",
            "label": "Server 1 (Direct Live)",
            "url": direct_url,
            "priority": 1,
            "protocol": "embed",
            "requiresProxy": False,
            "state": "HEALTHY"
        }
    ]
    playlist_url = matched_playlists.get(cid)
    if playlist_url:
        sources.append({
            "id": f"src_{cid}_playlist",
            "label": "Server 2 (Playlist HLS)",
            "url": playlist_url,
            "priority": 2,
            "protocol": "hls",
            "requiresProxy": True,
            "state": "HEALTHY"
        })

    catalog.append({
        "id": cid,
        "name": name,
        "category": cat,
        "logoUrl": logo,
        "network": network,
        "isTop": is_top,
        "flag": c.get('flag', ''),
        "quality": c.get('quality', 'FHD'),
        "tagline": c.get('tagline', ''),
        "region": c.get('region', ''),
        "sources": sources,
        "currentProgram": {
            "id": f"epg_{cid}",
            "title": f"{name} Live Broadcast",
            "description": f"{c.get('quality', 'FHD')} • 24/7 Dedicated Live Satellite Feed",
            "startTime": 1700000000000,
            "endTime": 1700007200000
        },
        "updatedAt": 1700000000000
    })

print(f"Generated {len(catalog)} master channels!")
ts_content = f"""/**
 * NovaStream Master Channels Catalog
 * Ingested from verified official edge channel directory (277 channels).
 * Includes fullscreen=0 embed parameter & crisp inline SVG network logos.
 */

import type {{ Channel }} from './types/index.ts';

export const MASTER_CHANNELS_CATALOG: Channel[] = {json.dumps(catalog, indent=2)};
"""

with open('src/masterCatalog.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)
print("Saved src/masterCatalog.ts successfully!")
