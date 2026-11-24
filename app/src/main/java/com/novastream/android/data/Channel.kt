package com.novastream.android.data

data class Channel(
    val id: String,
    val name: String,
    val group: String = "LIVE",
    val logo: String? = null,
    val url: String,
    val headers: Map<String, String> = emptyMap(),
    val network: String = group,
    val eventSubtitle: String = "Live Sports Broadcast",
    val qualityBadge: String = "HD",
    val isTopTen: Boolean = false
) {
    val isWebsiteEmbed: Boolean
        get() {
            val lower = url.lowercase()
            return lower.contains("/embed/") ||
                lower.contains("zlive.st") ||
                lower.contains("atlantic.st") ||
                lower.contains("embedsports") ||
                lower.contains(".html")
        }
}

val curatedSportsChannels: List<Channel> = listOf(
    // === TOP 10 BEST FOOTBALL MATCHES ===
    Channel(
        id = "ss_prem",
        name = "SuperSport Premier League",
        network = "SuperSport",
        group = "SuperSport",
        url = "https://embedsports.me/supersport-premier-league-stream-1/embed/",
        eventSubtitle = "Premier League Live • Main Match",
        qualityBadge = "4K",
        isTopTen = true
    ),
    Channel(
        id = "sky_prem",
        name = "Sky Sports Premier League",
        network = "Sky Sports",
        group = "Sky Sports",
        url = "https://embedsports.me/sky-sports-premier-league-stream-1/embed/",
        eventSubtitle = "EPL Live Broadcast & Super Sunday",
        qualityBadge = "FHD",
        isTopTen = true
    ),
    Channel(
        id = "sky_main",
        name = "Sky Sports Main Event",
        network = "Sky Sports",
        group = "Sky Sports",
        url = "https://embedsports.me/sky-sports-main-event-stream-1/embed/",
        eventSubtitle = "Flagship Matchday & Big Events",
        qualityBadge = "FHD",
        isTopTen = true
    ),
    Channel(
        id = "tnt_1",
        name = "TNT Sports 1",
        network = "TNT Sports",
        group = "TNT Sports",
        url = "https://embedsports.me/tnt-sports-1-stream-1/embed/",
        eventSubtitle = "UEFA Champions League & EPL",
        qualityBadge = "FHD",
        isTopTen = true
    ),
    Channel(
        id = "tnt_2",
        name = "TNT Sports 2",
        network = "TNT Sports",
        group = "TNT Sports",
        url = "https://embedsports.me/tnt-sports-2-stream-1/embed/",
        eventSubtitle = "UEFA Europa League & Serie A Live",
        qualityBadge = "HD",
        isTopTen = true
    ),
    Channel(
        id = "bein_1",
        name = "beIN Sports 1 English",
        network = "beIN Sports",
        group = "beIN Sports",
        url = "https://embedsports.me/bein-sports-1-stream-1/embed/",
        eventSubtitle = "Premier League & UCL Special",
        qualityBadge = "FHD",
        isTopTen = true
    ),
    Channel(
        id = "bein_2",
        name = "beIN Sports 2 English",
        network = "beIN Sports",
        group = "beIN Sports",
        url = "https://embedsports.me/bein-sports-2-stream-1/embed/",
        eventSubtitle = "La Liga & Ligue 1 Live",
        qualityBadge = "HD",
        isTopTen = true
    ),
    Channel(
        id = "ss_foot",
        name = "SuperSport Football",
        network = "SuperSport",
        group = "SuperSport",
        url = "https://embedsports.me/supersport-football-stream-1/embed/",
        eventSubtitle = "Serie A & European Cup Ties",
        qualityBadge = "FHD",
        isTopTen = true
    ),
    Channel(
        id = "cbs_golazo",
        name = "CBS Sports Golazo",
        network = "CBS Sports",
        group = "Global Sports",
        url = "https://dai.google.com/linear/hls/event/7f3Wv6f7QEKfQna22jHqLQ/master.m3u8",
        eventSubtitle = "24/7 Football & UEFA Champions League",
        qualityBadge = "1080p",
        isTopTen = true
    ),
    Channel(
        id = "tv_varzesh",
        name = "TV Varzesh",
        network = "Varzesh",
        group = "Global Sports",
        url = "https://live.telewebion.com/varzesh/live.m3u8",
        eventSubtitle = "Live International Football Coverage",
        qualityBadge = "HD",
        isTopTen = true
    ),

    // === TNT SPORTS (1 - 4) ===
    Channel(
        id = "tnt_3",
        name = "TNT Sports 3",
        network = "TNT Sports",
        group = "TNT Sports",
        url = "https://embedsports.me/tnt-sports-3-stream-1/embed/",
        eventSubtitle = "MotoGP, Boxing & Football Highlights",
        qualityBadge = "HD"
    ),
    Channel(
        id = "tnt_4",
        name = "TNT Sports 4",
        network = "TNT Sports",
        group = "TNT Sports",
        url = "https://embedsports.me/tnt-sports-4-stream-1/embed/",
        eventSubtitle = "Rugby, UFC & Live Sports",
        qualityBadge = "HD"
    ),

    // === SKY SPORTS (1 - 4 & Main Event & Premier League) ===
    Channel(
        id = "sky_foot",
        name = "Sky Sports Football",
        network = "Sky Sports",
        group = "Sky Sports",
        url = "https://embedsports.me/sky-sports-football-stream-1/embed/",
        eventSubtitle = "EFL, SPFL, Bundesliga Live",
        qualityBadge = "FHD"
    ),
    Channel(
        id = "sky_arena",
        name = "Sky Sports Arena",
        network = "Sky Sports",
        group = "Sky Sports",
        url = "https://embedsports.me/sky-sports-arena-stream-1/embed/",
        eventSubtitle = "Boxing, Darts & World Sports",
        qualityBadge = "HD"
    ),
    Channel(
        id = "sky_action",
        name = "Sky Sports Action",
        network = "Sky Sports",
        group = "Sky Sports",
        url = "https://embedsports.me/sky-sports-action-stream-1/embed/",
        eventSubtitle = "NFL, Tennis & Athletics",
        qualityBadge = "HD"
    ),
    Channel(
        id = "sky_1",
        name = "Sky Sports 1",
        network = "Sky Sports",
        group = "Sky Sports",
        url = "https://embedsports.me/sky-sports-1-stream-1/embed/",
        eventSubtitle = "Live Sky Event Stream 1",
        qualityBadge = "HD"
    ),
    Channel(
        id = "sky_2",
        name = "Sky Sports 2",
        network = "Sky Sports",
        group = "Sky Sports",
        url = "https://embedsports.me/sky-sports-2-stream-1/embed/",
        eventSubtitle = "Live Sky Event Stream 2",
        qualityBadge = "HD"
    ),
    Channel(
        id = "sky_3",
        name = "Sky Sports 3",
        network = "Sky Sports",
        group = "Sky Sports",
        url = "https://embedsports.me/sky-sports-3-stream-1/embed/",
        eventSubtitle = "Live Sky Event Stream 3",
        qualityBadge = "HD"
    ),
    Channel(
        id = "sky_4",
        name = "Sky Sports 4",
        network = "Sky Sports",
        group = "Sky Sports",
        url = "https://embedsports.me/sky-sports-4-stream-1/embed/",
        eventSubtitle = "Live Sky Event Stream 4",
        qualityBadge = "HD"
    ),

    // === SUPER SPORT (1 - 4 & Premier League & Grandstand) ===
    Channel(
        id = "ss_grandstand",
        name = "SuperSport Grandstand",
        network = "SuperSport",
        group = "SuperSport",
        url = "https://embedsports.me/supersport-grandstand-stream-1/embed/",
        eventSubtitle = "Top Tier World Championship Feeds",
        qualityBadge = "FHD"
    ),
    Channel(
        id = "ss_var1",
        name = "SuperSport Variety 1",
        network = "SuperSport",
        group = "SuperSport",
        url = "https://embedsports.me/supersport-variety-1-stream-1/embed/",
        eventSubtitle = "Multi-League Football & Rugby",
        qualityBadge = "HD"
    ),
    Channel(
        id = "ss_var2",
        name = "SuperSport Variety 2",
        network = "SuperSport",
        group = "SuperSport",
        url = "https://embedsports.me/supersport-variety-2-stream-1/embed/",
        eventSubtitle = "European Football Matches",
        qualityBadge = "HD"
    ),
    Channel(
        id = "ss_var3",
        name = "SuperSport Variety 3",
        network = "SuperSport",
        group = "SuperSport",
        url = "https://embedsports.me/supersport-variety-3-stream-1/embed/",
        eventSubtitle = "Athletics, Boxing & Live Racing",
        qualityBadge = "HD"
    ),
    Channel(
        id = "ss_var4",
        name = "SuperSport Variety 4",
        network = "SuperSport",
        group = "SuperSport",
        url = "https://embedsports.me/supersport-variety-4-stream-1/embed/",
        eventSubtitle = "Tennis, Golf & Action Sports",
        qualityBadge = "HD"
    ),

    // === BEIN SPORTS (1 - 4) ===
    Channel(
        id = "bein_3",
        name = "beIN Sports 3 English",
        network = "beIN Sports",
        group = "beIN Sports",
        url = "https://embedsports.me/bein-sports-3-stream-1/embed/",
        eventSubtitle = "Bundesliga & International Football",
        qualityBadge = "HD"
    ),
    Channel(
        id = "bein_4",
        name = "beIN Sports 4 English",
        network = "beIN Sports",
        group = "beIN Sports",
        url = "https://embedsports.me/bein-sports-4-stream-1/embed/",
        eventSubtitle = "French Ligue 1 & World Tournaments",
        qualityBadge = "HD"
    ),
    Channel(
        id = "bein_xtra",
        name = "beIN Sports XTRA",
        network = "beIN Sports",
        group = "beIN Sports",
        url = "https://beinsportsxtra-linear.amagi.tv/playlist.m3u8",
        eventSubtitle = "Live Free Sports & Highlights",
        qualityBadge = "720p"
    ),

    // === CBS SPORTS & OTHERS ===
    Channel(
        id = "cbs_net",
        name = "CBS Sports Network",
        network = "CBS Sports",
        group = "Global Sports",
        url = "https://embedsports.me/cbs-sports-network-stream-1/embed/",
        eventSubtitle = "US Soccer, College & Live League Play",
        qualityBadge = "HD"
    )
)

data class PlaylistCategory(
    val title: String,
    val url: String = ""
)

val defaultCategories = listOf(
    PlaylistCategory("Top 10 Matches"),
    PlaylistCategory("SuperSport"),
    PlaylistCategory("Sky Sports"),
    PlaylistCategory("TNT Sports"),
    PlaylistCategory("beIN Sports"),
    PlaylistCategory("Global Sports"),
    PlaylistCategory("Favorites")
)
