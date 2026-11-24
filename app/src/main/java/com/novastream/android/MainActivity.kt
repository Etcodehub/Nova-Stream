package com.novastream.android

import android.os.Bundle
import android.view.ViewGroup
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.compose.BackHandler
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.FavoriteBorder
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material.icons.filled.Search
import androidx.compose.material.icons.filled.Tv
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.FilterChip
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.media3.common.util.UnstableApi
import androidx.media3.ui.AspectRatioFrameLayout
import androidx.media3.ui.PlayerView
import com.novastream.android.data.Channel
import com.novastream.android.data.PlaylistLoader
import com.novastream.android.data.defaultCategories
import com.novastream.android.player.NativePlayer
import kotlinx.coroutines.launch

private val Bg = Color(0xFF070A10)
private val Panel = Color(0xFF101827)
private val Card = Color(0xFF172235)
private val Accent = Color(0xFF10B981)
private val Muted = Color(0xFF94A3B8)
private val White = Color(0xFFF8FAFC)

class MainActivity : ComponentActivity() {
    private lateinit var nativePlayer: NativePlayer

    @androidx.annotation.OptIn(UnstableApi::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        nativePlayer = NativePlayer(this)
        setContent {
            NovaTheme {
                NovaStreamApp(nativePlayer)
            }
        }
    }

    override fun onPause() {
        super.onPause()
        nativePlayer.pause()
    }

    override fun onDestroy() {
        nativePlayer.release()
        super.onDestroy()
    }
}

@Composable
private fun NovaTheme(content: @Composable () -> Unit) {
    MaterialTheme(colorScheme = darkColorScheme(
        primary = Accent,
        onPrimary = Color(0xFF032016),
        background = Bg,
        surface = Panel,
        onSurface = White,
        secondary = Accent
    ), content = content)
}

@androidx.annotation.OptIn(UnstableApi::class)
@Composable
private fun NovaStreamApp(player: NativePlayer) {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    val channels = remember { mutableStateListOf<Channel>() }
    val favorites = remember { mutableStateListOf<String>() }
    var selected by remember { mutableStateOf<Channel?>(null) }
    var query by remember { mutableStateOf("") }
    var playlistUrl by remember { mutableStateOf("") }
    var loading by remember { mutableStateOf(false) }
    var message by remember { mutableStateOf("Choose a channel or load an M3U playlist") }
    var selectedCategory by remember { mutableStateOf("Sports") }
    var showFavorites by remember { mutableStateOf(false) }
    var showEmbed by remember { mutableStateOf(false) }

    fun selectChannel(channel: Channel) {
        selected = channel
        showEmbed = channel.isWebsiteEmbed
        if (showEmbed) player.pause() else player.play(channel)
    }

    fun loadPlaylist(url: String) {
        if (!url.startsWith("https://") && !url.startsWith("http://")) {
            message = "Enter a valid http:// or https:// playlist URL"
            return
        }
        loading = true
        message = "Loading playlist…"
        scope.launch {
            runCatching { PlaylistLoader.load(url) }
                .onSuccess { loaded ->
                    channels.clear()
                    channels.addAll(loaded)
                    message = "Loaded ${loaded.size} channels"
                    if (loaded.isEmpty()) message = "No channels found in this playlist"
                }
                .onFailure { error ->
                    message = error.message ?: "Playlist loading failed"
                }
            loading = false
        }
    }

    LaunchedEffect(Unit) {
        loadPlaylist(defaultCategories.first().url)
    }

    val visibleChannels = channels.filter { channel ->
        val matchesQuery = query.isBlank() ||
            channel.name.contains(query, ignoreCase = true) ||
            channel.group.contains(query, ignoreCase = true)
        val matchesFavorite = !showFavorites || favorites.contains(channel.id)
        matchesQuery && matchesFavorite
    }

    BackHandler(enabled = showEmbed) { showEmbed = false }

    Column(
        modifier = Modifier.fillMaxSize().background(Bg)
    ) {
        Row(
            modifier = Modifier.fillMaxWidth().background(Panel).padding(horizontal = 16.dp, vertical = 13.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(
                modifier = Modifier.size(38.dp).background(Accent, RoundedCornerShape(12.dp)),
                contentAlignment = Alignment.Center
            ) {
                Icon(Icons.Default.Tv, contentDescription = null, tint = Color(0xFF032016))
            }
            Spacer(Modifier.width(10.dp))
            Column(Modifier.weight(1f)) {
                Text("NOVASTREAM", color = Accent, fontWeight = FontWeight.Black, fontSize = 17.sp, letterSpacing = 1.2.sp)
                Text("LIVE TV • NATIVE PLAYER", color = Muted, fontSize = 10.sp, letterSpacing = 1.sp)
            }
            Text("${channels.size} CH", color = Muted, fontSize = 11.sp)
        }

        Box(
            modifier = Modifier.fillMaxWidth().background(Color.Black).aspectRatio(16f / 9f),
            contentAlignment = Alignment.Center
        ) {
            when {
                showEmbed && selected != null -> EmbedPlayer(selected!!.url)
                else -> AndroidView(
                    modifier = Modifier.fillMaxSize(),
                    factory = { ctx ->
                        PlayerView(ctx).apply {
                            player = player.exoPlayer
                            useController = true
                            resizeMode = AspectRatioFrameLayout.RESIZE_MODE_FIT
                            layoutParams = ViewGroup.LayoutParams(
                                ViewGroup.LayoutParams.MATCH_PARENT,
                                ViewGroup.LayoutParams.MATCH_PARENT
                            )
                        }
                    },
                    update = { it.player = player.exoPlayer }
                )
            }
            if (selected == null) {
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Icon(Icons.Default.Tv, contentDescription = null, tint = Muted, modifier = Modifier.size(34.dp))
                    Spacer(Modifier.height(8.dp))
                    Text("Select a channel", color = Muted)
                }
            }
        }

        Column(Modifier.fillMaxWidth().background(Panel).padding(horizontal = 14.dp, vertical = 10.dp)) {
            Text(selected?.name ?: "No channel selected", color = White, fontWeight = FontWeight.Bold, maxLines = 1, overflow = TextOverflow.Ellipsis)
            Row(verticalAlignment = Alignment.CenterVertically) {
                Text(selected?.group ?: "NOVASTREAM", color = Accent, fontSize = 11.sp, fontWeight = FontWeight.SemiBold)
                Spacer(Modifier.width(8.dp))
                Text(if (showEmbed) "Website embed" else player.status, color = Muted, fontSize = 11.sp, maxLines = 1, overflow = TextOverflow.Ellipsis)
                Spacer(Modifier.weight(1f))
                if (player.lastError != null && !showEmbed) {
                    IconButton(onClick = { player.retry() }, modifier = Modifier.size(30.dp)) {
                        Icon(Icons.Default.Refresh, contentDescription = "Retry", tint = Accent)
                    }
                }
            }
            if (player.lastError != null && !showEmbed) {
                Text(player.lastError ?: "", color = Color(0xFFFBBF24), fontSize = 10.sp, maxLines = 2, overflow = TextOverflow.Ellipsis)
            }
        }

        Column(Modifier.fillMaxWidth().padding(horizontal = 12.dp, vertical = 8.dp)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                OutlinedTextField(
                    value = playlistUrl,
                    onValueChange = { playlistUrl = it },
                    modifier = Modifier.weight(1f),
                    singleLine = true,
                    label = { Text("M3U playlist URL") },
                    placeholder = { Text("https://…/playlist.m3u") }
                )
                Spacer(Modifier.width(8.dp))
                Button(
                    onClick = { loadPlaylist(playlistUrl.trim()) },
                    enabled = !loading && playlistUrl.isNotBlank(),
                    colors = ButtonDefaults.buttonColors(containerColor = Accent, contentColor = Color(0xFF032016))
                ) { Text("Load") }
            }
            var directUrl by remember { mutableStateOf("") }
            Spacer(Modifier.height(5.dp))
            Row(verticalAlignment = Alignment.CenterVertically) {
                OutlinedTextField(
                    value = directUrl,
                    onValueChange = { directUrl = it },
                    modifier = Modifier.weight(1f),
                    singleLine = true,
                    label = { Text("Direct stream / embed URL") },
                    placeholder = { Text("https://…/live.m3u8") }
                )
                Spacer(Modifier.width(8.dp))
                Button(
                    onClick = {
                        val raw = directUrl.trim()
                        if (raw.startsWith("https://") || raw.startsWith("http://")) {
                            selectChannel(Channel(
                                id = "custom_${raw.hashCode()}",
                                name = "Custom stream",
                                group = "CUSTOM",
                                url = raw
                            ))
                        } else {
                            message = "Enter a valid http:// or https:// stream URL"
                        }
                    },
                    enabled = directUrl.isNotBlank(),
                    colors = ButtonDefaults.buttonColors(containerColor = Accent, contentColor = Color(0xFF032016))
                ) { Text("Play") }
            }
            Spacer(Modifier.height(6.dp))
            Text(message, color = Muted, fontSize = 10.sp, maxLines = 2, overflow = TextOverflow.Ellipsis)
        }

        Row(
            modifier = Modifier.fillMaxWidth().padding(horizontal = 12.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            OutlinedTextField(
                value = query,
                onValueChange = { query = it },
                modifier = Modifier.weight(1f),
                singleLine = true,
                leadingIcon = { Icon(Icons.Default.Search, contentDescription = null) },
                placeholder = { Text("Search channels…") }
            )
            Spacer(Modifier.width(8.dp))
            FilterChip(
                selected = showFavorites,
                onClick = { showFavorites = !showFavorites },
                label = { Text("★") }
            )
        }

        Row(
            modifier = Modifier.fillMaxWidth().padding(horizontal = 10.dp, vertical = 6.dp),
            horizontalArrangement = Arrangement.spacedBy(6.dp)
        ) {
            defaultCategories.take(5).forEach { category ->
                FilterChip(
                    selected = selectedCategory == category.title,
                    onClick = {
                        selectedCategory = category.title
                        loadPlaylist(category.url)
                    },
                    label = { Text(category.title, fontSize = 10.sp) }
                )
            }
        }

        if (loading) {
            LinearLoading()
        }

        LazyColumn(
            modifier = Modifier.fillMaxSize().padding(horizontal = 10.dp),
            verticalArrangement = Arrangement.spacedBy(6.dp)
        ) {
            items(visibleChannels, key = { it.id }) { channel ->
                ChannelRow(
                    channel = channel,
                    selected = selected?.id == channel.id,
                    favorite = favorites.contains(channel.id),
                    onSelect = { selectChannel(channel) },
                    onFavorite = {
                        if (favorites.contains(channel.id)) favorites.remove(channel.id)
                        else favorites.add(channel.id)
                    }
                )
            }
        }
    }
}

@Composable
private fun LinearLoading() {
    Row(Modifier.fillMaxWidth().padding(horizontal = 14.dp, vertical = 3.dp), verticalAlignment = Alignment.CenterVertically) {
        CircularProgressIndicator(modifier = Modifier.size(14.dp), strokeWidth = 2.dp, color = Accent)
        Spacer(Modifier.width(8.dp))
        Text("Syncing channels…", color = Muted, fontSize = 11.sp)
    }
}

@Composable
private fun ChannelRow(
    channel: Channel,
    selected: Boolean,
    favorite: Boolean,
    onSelect: () -> Unit,
    onFavorite: () -> Unit
) {
    Row(
        modifier = Modifier.fillMaxWidth()
            .background(if (selected) Color(0xFF12372F) else Card, RoundedCornerShape(10.dp))
            .clickable(onClick = onSelect)
            .padding(horizontal = 12.dp, vertical = 11.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Box(
            modifier = Modifier.size(34.dp).background(Color(0xFF0B1220), RoundedCornerShape(8.dp)),
            contentAlignment = Alignment.Center
        ) {
            Icon(Icons.Default.PlayArrow, contentDescription = null, tint = if (selected) Accent else Muted)
        }
        Spacer(Modifier.width(10.dp))
        Column(Modifier.weight(1f)) {
            Text(channel.name, color = White, fontSize = 13.sp, fontWeight = FontWeight.SemiBold, maxLines = 1, overflow = TextOverflow.Ellipsis)
            Text(channel.group, color = Muted, fontSize = 10.sp, maxLines = 1)
        }
        if (channel.isWebsiteEmbed) {
            Text("WEB", color = Color(0xFFFBBF24), fontSize = 9.sp, fontWeight = FontWeight.Bold)
            Spacer(Modifier.width(6.dp))
        }
        IconButton(onClick = onFavorite, modifier = Modifier.size(34.dp)) {
            Icon(
                if (favorite) Icons.Default.Favorite else Icons.Default.FavoriteBorder,
                contentDescription = "Favorite",
                tint = if (favorite) Color(0xFFF87171) else Muted,
                modifier = Modifier.size(18.dp)
            )
        }
    }
}

@Composable
private fun EmbedPlayer(url: String) {
    AndroidView(
        modifier = Modifier.fillMaxSize(),
        factory = { context ->
            WebView(context).apply {
                settings.javaScriptEnabled = true
                settings.domStorageEnabled = true
                settings.mediaPlaybackRequiresUserGesture = false
                settings.allowFileAccess = false
                settings.allowContentAccess = false
                webViewClient = WebViewClient()
                webChromeClient = WebChromeClient()
                loadUrl(url)
            }
        },
        update = { view ->
            if (view.url != url) view.loadUrl(url)
        },
        onRelease = { it.stopLoading(); it.destroy() }
    )
}
