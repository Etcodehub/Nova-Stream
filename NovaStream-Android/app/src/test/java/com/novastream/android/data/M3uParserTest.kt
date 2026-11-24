package com.novastream.android.data

import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Test

class M3uParserTest {
    @Test
    fun parsesChannelNameGroupLogoAndUrl() {
        val playlist = """
            #EXTM3U
            #EXTINF:-1 tvg-logo="https://cdn.example/logo.png" group-title="SPORTS",Example Sports
            https://cdn.example/live/index.m3u8
        """.trimIndent()

        val channels = M3uParser.parse(playlist)

        assertEquals(1, channels.size)
        assertEquals("Example Sports", channels.first().name)
        assertEquals("SPORTS", channels.first().group)
        assertEquals("https://cdn.example/logo.png", channels.first().logo)
        assertEquals("https://cdn.example/live/index.m3u8", channels.first().url)
    }

    @Test
    fun readsVlcUserAgentAndRefererOptions() {
        val playlist = """
            #EXTM3U
            #EXTINF:-1,Protected test channel
            #EXTVLCOPT:http-user-agent=NovaTest/1.0
            #EXTVLCOPT:http-referrer=https://portal.example/
            https://media.example/stream.m3u8
        """.trimIndent()

        val channel = M3uParser.parse(playlist).single()

        assertEquals("NovaTest/1.0", channel.headers["User-Agent"])
        assertEquals("https://portal.example/", channel.headers["Referer"])
    }

    @Test
    fun ignoresNonHttpEntriesAndComments() {
        val playlist = """
            #EXTM3U
            #EXTINF:-1,Invalid
            file:///sdcard/video.mp4
            #EXTINF:-1,Valid
            https://media.example/video.mp4
        """.trimIndent()

        val channels = M3uParser.parse(playlist)

        assertEquals(1, channels.size)
        assertTrue(channels.first().url.startsWith("https://"))
    }
}
