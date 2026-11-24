package com.novastream.android.player

import android.content.Context
import android.net.Uri
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.media3.common.C
import androidx.media3.common.MediaItem
import androidx.media3.common.PlaybackException
import androidx.media3.common.Player
import androidx.media3.common.util.UnstableApi
import androidx.media3.datasource.DefaultHttpDataSource
import androidx.media3.exoplayer.ExoPlayer
import androidx.media3.exoplayer.source.DefaultMediaSourceFactory
import com.novastream.android.data.Channel
import com.novastream.android.data.StreamSource

@UnstableApi
class NativePlayer(context: Context) {
    private val appContext = context.applicationContext

    var status by mutableStateOf("Ready")
        private set

    var isPlaying by mutableStateOf(false)
        private set

    var lastError by mutableStateOf<String?>(null)
        private set

    var activeChannel by mutableStateOf<Channel?>(null)
        private set

    var candidateSources by mutableStateOf<List<StreamSource>>(emptyList())
        private set

    var activeSourceIndex by mutableIntStateOf(0)
        private set

    val activeSource: StreamSource?
        get() = candidateSources.getOrNull(activeSourceIndex)

    var failoverCount by mutableIntStateOf(0)
        private set

    private val httpFactory = DefaultHttpDataSource.Factory()
        .setUserAgent("NovaStream Android/1.0")
        .setConnectTimeoutMs(15_000)
        .setReadTimeoutMs(20_000)
        .setAllowCrossProtocolRedirects(true)

    val exoPlayer: ExoPlayer

    init {
        val mediaSourceFactory = DefaultMediaSourceFactory(httpFactory)
        exoPlayer = ExoPlayer.Builder(appContext)
            .setMediaSourceFactory(mediaSourceFactory)
            .build()
            .apply {
                addListener(object : Player.Listener {
                    override fun onIsPlayingChanged(playing: Boolean) {
                        this@NativePlayer.isPlaying = playing
                        if (playing) {
                            status = "Playing"
                            lastError = null
                        }
                    }

                    override fun onPlaybackStateChanged(playbackState: Int) {
                        status = when (playbackState) {
                            Player.STATE_BUFFERING -> "Buffering..."
                            Player.STATE_READY -> if (this@NativePlayer.isPlaying) "Playing" else "Ready"
                            Player.STATE_ENDED -> "Stream ended"
                            Player.STATE_IDLE -> "Ready"
                            else -> status
                        }
                    }

                    override fun onPlayerError(error: PlaybackException) {
                        val detail = "${error.errorCodeName}: ${error.message ?: "Playback error"}"
                        
                        // Automatic Multi-Source Failover Engine
                        if (activeSourceIndex + 1 < candidateSources.size) {
                            failoverCount++
                            activeSourceIndex++
                            val backupSource = candidateSources[activeSourceIndex]
                            status = "Auto-failover: Switching to ${backupSource.label}..."
                            mountSource(backupSource)
                        } else {
                            lastError = detail
                            status = "Playback failed (all mirrors exhausted)"
                        }
                    }
                })
            }
    }

    fun play(channel: Channel) {
        lastError = null
        activeChannel = channel
        candidateSources = channel.sources
        activeSourceIndex = 0
        failoverCount = 0

        val primarySource = candidateSources.firstOrNull() ?: StreamSource(
            id = "${channel.id}_fallback",
            label = "Server 1",
            url = channel.url
        )
        mountSource(primarySource)
    }

    fun selectSource(index: Int) {
        if (index in candidateSources.indices && index != activeSourceIndex) {
            activeSourceIndex = index
            lastError = null
            mountSource(candidateSources[index])
        }
    }

    private fun mountSource(source: StreamSource) {
        status = "Connecting to ${source.label}..."
        val headers = activeChannel?.headers ?: emptyMap()
        httpFactory.setUserAgent(headers["User-Agent"] ?: "NovaStream Android/1.0")
        val requestHeaders = headers.filterKeys {
            !it.equals("User-Agent", ignoreCase = true)
        }
        httpFactory.setDefaultRequestProperties(requestHeaders)

        val path = Uri.parse(source.url).lastPathSegment?.lowercase().orEmpty()
        val mimeType = when {
            path.endsWith(".m3u8") -> "application/x-mpegURL"
            path.endsWith(".mpd") -> "application/dash+xml"
            else -> null
        }

        val itemBuilder = MediaItem.Builder().setUri(source.url)
        if (mimeType != null) itemBuilder.setMimeType(mimeType)

        // ClearKey DRM configuration if present
        if (source.drmClearKeyId != null && source.drmClearKeyVal != null) {
            itemBuilder.setDrmConfiguration(
                MediaItem.DrmConfiguration.Builder(C.CLEARKEY_UUID)
                    .build()
            )
        }

        exoPlayer.setMediaItem(itemBuilder.build())
        exoPlayer.prepare()
        exoPlayer.playWhenReady = true
    }

    fun retry() {
        lastError = null
        status = "Retrying..."
        exoPlayer.prepare()
        exoPlayer.playWhenReady = true
    }

    fun pause() {
        exoPlayer.pause()
    }

    fun release() {
        exoPlayer.release()
    }
}
