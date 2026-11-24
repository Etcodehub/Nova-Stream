package com.novastream.android.data

import java.net.HttpURLConnection
import java.net.URL
import java.util.Locale
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

object M3uParser {
    private val attributeRegex = Regex("""([\w-]+)="([^"]*)"""")

    fun parse(text: String): List<Channel> {
        val result = mutableListOf<Channel>()
        var name: String? = null
        var group = "LIVE"
        var logo: String? = null
        val headers = linkedMapOf<String, String>()

        text.lineSequence().forEach { raw ->
            val line = raw.trim()
            if (line.isEmpty()) return@forEach

            when {
                line.startsWith("#EXTINF:", ignoreCase = true) -> {
                    val attributes = attributeRegex.findAll(line)
                        .associate { it.groupValues[1].lowercase(Locale.ROOT) to it.groupValues[2] }
                    group = attributes["group-title"]?.substringBefore(";")?.trim()
                        ?.ifBlank { "LIVE" } ?: "LIVE"
                    logo = attributes["tvg-logo"]?.takeIf { it.isNotBlank() }
                    name = line.substringAfterLast(",", "Channel").trim().ifBlank { "Channel" }
                    headers.clear()
                }

                line.startsWith("#EXTVLCOPT:", ignoreCase = true) -> {
                    val option = line.substringAfter(":")
                    val key = option.substringBefore("=").lowercase(Locale.ROOT)
                    val value = option.substringAfter("=", "")
                    when (key) {
                        "http-user-agent" -> headers["User-Agent"] = value
                        "http-referrer", "http-referer" -> headers["Referer"] = value
                        "http-cookie" -> headers["Cookie"] = value
                    }
                }

                line.startsWith("#EXTGRP:", ignoreCase = true) -> {
                    group = line.substringAfter(":").trim().ifBlank { group }
                }

                line.startsWith("#") -> Unit

                else -> {
                    if (line.startsWith("https://", true) || line.startsWith("http://", true)) {
                        val channelName = name ?: "Channel ${result.size + 1}"
                        result += Channel(
                            id = "${result.size}_${line.hashCode()}",
                            name = channelName,
                            group = group,
                            logo = logo,
                            url = line,
                            headers = headers.toMap()
                        )
                    }
                    name = null
                    group = "LIVE"
                    logo = null
                    headers.clear()
                }
            }
        }
        return result
    }
}

object PlaylistLoader {
    suspend fun load(url: String): List<Channel> = withContext(Dispatchers.IO) {
        val connection = (URL(url).openConnection() as HttpURLConnection).apply {
            connectTimeout = 15_000
            readTimeout = 20_000
            instanceFollowRedirects = true
            setRequestProperty("User-Agent", "NovaStream/0.1 Android")
            setRequestProperty("Accept", "application/x-mpegURL, audio/x-mpegurl, */*")
        }
        try {
            val code = connection.responseCode
            if (code !in 200..299) error("Playlist server returned HTTP $code")
            val body = connection.inputStream.bufferedReader(Charsets.UTF_8).use { it.readText() }
            M3uParser.parse(body)
        } finally {
            connection.disconnect()
        }
    }
}
