package com.novastream.android.data

data class Channel(
    val id: String,
    val name: String,
    val group: String = "LIVE",
    val logo: String? = null,
    val url: String,
    val headers: Map<String, String> = emptyMap()
) {
    val isWebsiteEmbed: Boolean
        get() {
            val lower = url.lowercase()
            return lower.contains("/embed/") ||
                lower.contains("zlive.st") ||
                lower.contains("atlantic.st")
        }
}

data class PlaylistCategory(
    val title: String,
    val url: String
)

val defaultCategories = listOf(
    PlaylistCategory("Sports", "https://iptv-org.github.io/iptv/categories/sports.m3u"),
    PlaylistCategory("All", "https://iptv-org.github.io/iptv/index.m3u"),
    PlaylistCategory("Movies", "https://iptv-org.github.io/iptv/categories/movies.m3u"),
    PlaylistCategory("News", "https://iptv-org.github.io/iptv/categories/news.m3u"),
    PlaylistCategory("Entertainment", "https://iptv-org.github.io/iptv/categories/entertainment.m3u"),
    PlaylistCategory("Kids", "https://iptv-org.github.io/iptv/categories/kids.m3u"),
    PlaylistCategory("Music", "https://iptv-org.github.io/iptv/categories/music.m3u"),
    PlaylistCategory("Documentary", "https://iptv-org.github.io/iptv/categories/documentary.m3u")
)
