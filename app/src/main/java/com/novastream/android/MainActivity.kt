package com.novastream.android

import android.content.res.Configuration
import android.os.Bundle
import android.view.ViewGroup
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.FavoriteBorder
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material.icons.filled.Search
import androidx.compose.material.icons.filled.Tv
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.media3.common.util.UnstableApi
import androidx.media3.ui.AspectRatioFrameLayout
import androidx.media3.ui.PlayerView
import com.novastream.android.data.Channel
import com.novastream.android.data.curatedSportsChannels
import com.novastream.android.player.NativePlayer

// Reezn OTT Premium Dark AMOLED Palette
private val StadiumDark = Color(0xFF000000)
private val StadiumSurface = Color(0xFF0A0A0A)
private val StadiumCard = Color(0xFF141414)
private val StadiumCardActive = Color(0xFF1F1F1F)
private val AccentGreen = Color(0xFFE50914) // Reezn Scarlet Red Primary
private val LiveRed = Color(0xFFE50914)
private val SkyBlue = Color(0xFF38BDF8)
private val GoldYellow = Color(0xFFF59E0B)
private val TextWhite = Color(0xFFFFFFFF)
private val TextMuted = Color(0xFFA3A3A3)
private val TextSubtle = Color(0xFF737373)

class MainActivity : ComponentActivity() {
    private lateinit var nativePlayer: NativePlayer

    @androidx.annotation.OptIn(UnstableApi::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        nativePlayer = NativePlayer(this)
        setContent {
            SuperSportTheme {
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
private fun SuperSportTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = darkColorScheme(
            primary = AccentGreen,
            onPrimary = Color(0xFF021B10),
            background = StadiumDark,
            surface = StadiumSurface,
            onSurface = TextWhite,
            secondary = SkyBlue
        ),
        content = content
    )
}

@androidx.annotation.OptIn(UnstableApi::class)
@Composable
private fun NovaStreamApp(nativePlayer: NativePlayer) {
    val configuration = LocalConfiguration.current
    val isLandscape = configuration.orientation == Configuration.ORIENTATION_LANDSCAPE
    val isWideScreen = configuration.screenWidthDp >= 600 || isLandscape

    val allChannels = remember { curatedSportsChannels }
    val favorites = remember { mutableStateListOf<String>() }

    var selectedChannel by remember { mutableStateOf<Channel?>(allChannels.firstOrNull()) }
    var searchQuery by remember { mutableStateOf("") }
    var selectedCategory by remember { mutableStateOf("Top 10 Matches") }
    var showEmbed by remember { mutableStateOf(selectedChannel?.isWebsiteEmbed == true) }

    val categories = remember {
        listOf(
            "Top 10 Matches",
            "Premier Sports",
            "SuperSport",
            "Sky Sports",
            "TNT Sports",
            "beIN Sports",
            "Football Feeds",
            "Combat & Racing",
            "US Leagues",
            "24/7 News",
            "Docs & Cinema",
            "All Channels",
            "Favorites"
        )
    }

    fun selectChannel(channel: Channel) {
        selectedChannel = channel
        showEmbed = channel.isWebsiteEmbed
        if (showEmbed) {
            nativePlayer.pause()
        } else {
            nativePlayer.play(channel)
        }
    }

    // Filter channels based on selected category, search query, or favorites
    val filteredChannels = remember(selectedCategory, searchQuery, favorites.toList()) {
        allChannels.filter { channel ->
            val matchesCategory = when (selectedCategory) {
                "Top 10 Matches" -> channel.isTopTen
                "All Channels" -> true
                "Favorites" -> favorites.contains(channel.id)
                else -> channel.group.equals(selectedCategory, ignoreCase = true) ||
                    channel.network.equals(selectedCategory, ignoreCase = true)
            }

            val matchesSearch = searchQuery.isBlank() ||
                channel.name.contains(searchQuery, ignoreCase = true) ||
                channel.network.contains(searchQuery, ignoreCase = true) ||
                channel.eventSubtitle.contains(searchQuery, ignoreCase = true)

            matchesCategory && matchesSearch
        }
    }

    BackHandler(enabled = showEmbed) {
        showEmbed = false
    }

    Surface(
        modifier = Modifier.fillMaxSize(),
        color = StadiumDark
    ) {
        Column(modifier = Modifier.fillMaxSize()) {
            // App Header Bar
            NovaHeader(channelCount = allChannels.size)

            if (isWideScreen) {
                // Wide Screen Layout (Tablet / PC / TV / Landscape): Split Screen
                Row(modifier = Modifier.fillMaxSize()) {
                    // Left Column (Player & Stream Info)
                    Column(
                        modifier = Modifier
                            .weight(0.60f)
                            .fillMaxHeight()
                            .padding(8.dp)
                    ) {
                        VideoPlayerContainer(
                            channel = selectedChannel,
                            showEmbed = showEmbed,
                            nativePlayer = nativePlayer,
                            modifier = Modifier
                                .fillMaxWidth()
                                .aspectRatio(16f / 9f)
                        )

                        Spacer(Modifier.height(8.dp))

                        if (selectedChannel != null) {
                            ChannelControlBar(
                                channel = selectedChannel!!,
                                isPlaying = nativePlayer.isPlaying,
                                status = nativePlayer.status,
                                lastError = nativePlayer.lastError,
                                isFavorite = favorites.contains(selectedChannel!!.id),
                                onToggleFavorite = {
                                    if (favorites.contains(selectedChannel!!.id)) {
                                        favorites.remove(selectedChannel!!.id)
                                    } else {
                                        favorites.add(selectedChannel!!.id)
                                    }
                                },
                                onRetry = { nativePlayer.retry() }
                            )
                        }
                    }

                    // Right Column (Channel Browser)
                    Column(
                        modifier = Modifier
                            .weight(0.40f)
                            .fillMaxHeight()
                            .background(StadiumSurface)
                            .padding(horizontal = 10.dp, vertical = 8.dp)
                    ) {
                        CategoryChipsRow(
                            categories = categories,
                            selectedCategory = selectedCategory,
                            onSelectCategory = { selectedCategory = it }
                        )

                        Spacer(Modifier.height(8.dp))

                        CompactSearchBar(
                            query = searchQuery,
                            onQueryChange = { searchQuery = it }
                        )

                        Spacer(Modifier.height(6.dp))

                        CompactChannelList(
                            channels = filteredChannels,
                            selectedChannel = selectedChannel,
                            favorites = favorites,
                            onSelect = { selectChannel(it) },
                            onToggleFavorite = { channel ->
                                if (favorites.contains(channel.id)) {
                                    favorites.remove(channel.id)
                                } else {
                                    favorites.add(channel.id)
                                }
                            }
                        )
                    }
                }
            } else {
                // Mobile Portrait Layout: Stacked
                Column(modifier = Modifier.fillMaxSize()) {
                    VideoPlayerContainer(
                        channel = selectedChannel,
                        showEmbed = showEmbed,
                        nativePlayer = nativePlayer,
                        modifier = Modifier
                            .fillMaxWidth()
                            .aspectRatio(16f / 9f)
                    )

                    if (selectedChannel != null) {
                        ChannelControlBar(
                            channel = selectedChannel!!,
                            isPlaying = nativePlayer.isPlaying,
                            status = nativePlayer.status,
                            lastError = nativePlayer.lastError,
                            isFavorite = favorites.contains(selectedChannel!!.id),
                            onToggleFavorite = {
                                if (favorites.contains(selectedChannel!!.id)) {
                                    favorites.remove(selectedChannel!!.id)
                                } else {
                                    favorites.add(selectedChannel!!.id)
                                }
                            },
                            onRetry = { nativePlayer.retry() }
                        )
                    }

                    CategoryChipsRow(
                        categories = categories,
                        selectedCategory = selectedCategory,
                        onSelectCategory = { selectedCategory = it }
                    )

                    Spacer(Modifier.height(4.dp))

                    CompactSearchBar(
                        query = searchQuery,
                        onQueryChange = { searchQuery = it },
                        modifier = Modifier.padding(horizontal = 10.dp)
                    )

                    Spacer(Modifier.height(4.dp))

                    CompactChannelList(
                        channels = filteredChannels,
                        selectedChannel = selectedChannel,
                        favorites = favorites,
                        onSelect = { selectChannel(it) },
                        onToggleFavorite = { channel ->
                            if (favorites.contains(channel.id)) {
                                favorites.remove(channel.id)
                            } else {
                                favorites.add(channel.id)
                            }
                        },
                        modifier = Modifier
                            .weight(1f)
                            .padding(horizontal = 8.dp)
                    )
                }
            }
        }
    }
}

// Top App Header inspired by SuperSport & DAZN
@Composable
private fun NovaHeader(channelCount: Int) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .background(StadiumSurface)
            .padding(horizontal = 14.dp, vertical = 9.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Box(
            modifier = Modifier
                .size(32.dp)
                .clip(RoundedCornerShape(8.dp))
                .background(
                    Brush.linearGradient(
                        colors = listOf(AccentGreen, SkyBlue)
                    )
                ),
            contentAlignment = Alignment.Center
        ) {
            Icon(
                Icons.Default.Tv,
                contentDescription = null,
                tint = StadiumDark,
                modifier = Modifier.size(20.dp)
            )
        }

        Spacer(Modifier.width(10.dp))

        Column(modifier = Modifier.weight(1f)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Text(
                    text = "REEZN",
                    color = LiveRed,
                    fontWeight = FontWeight.Black,
                    fontSize = 17.sp,
                    letterSpacing = (-0.5).sp
                )
                Spacer(Modifier.width(6.dp))
                Box(
                    modifier = Modifier
                        .clip(RoundedCornerShape(4.dp))
                        .background(LiveRed)
                        .padding(horizontal = 5.dp, vertical = 1.dp)
                ) {
                    Text(
                        text = "LIVE",
                        color = TextWhite,
                        fontSize = 9.sp,
                        fontWeight = FontWeight.ExtraBold
                    )
                }
            }
            Text(
                text = "STREAM MOVIES, SERIES & SPORTS",
                color = TextMuted,
                fontSize = 8.5.sp,
                fontWeight = FontWeight.Bold
                fontWeight = FontWeight.SemiBold,
                letterSpacing = 0.8.sp
            )
        }

        Box(
            modifier = Modifier
                .clip(RoundedCornerShape(12.dp))
                .background(StadiumCard)
                .padding(horizontal = 8.dp, vertical = 3.dp)
        ) {
            Text(
                text = "$channelCount CH",
                color = SkyBlue,
                fontSize = 11.sp,
                fontWeight = FontWeight.Bold
            )
        }
    }
}

// Video Player Container supporting both Native HLS and Embed Web
@androidx.annotation.OptIn(UnstableApi::class)
@Composable
private fun VideoPlayerContainer(
    channel: Channel?,
    showEmbed: Boolean,
    nativePlayer: NativePlayer,
    modifier: Modifier = Modifier
) {
    Box(
        modifier = modifier
            .background(Color.Black)
            .clip(RoundedCornerShape(8.dp)),
        contentAlignment = Alignment.Center
    ) {
        when {
            channel == null -> {
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Icon(
                        Icons.Default.Tv,
                        contentDescription = null,
                        tint = TextSubtle,
                        modifier = Modifier.size(42.dp)
                    )
                    Spacer(Modifier.height(8.dp))
                    Text("Select a channel to start streaming", color = TextMuted, fontSize = 12.sp)
                }
            }
            showEmbed -> {
                EmbedPlayer(channel.url)
            }
            else -> {
                AndroidView(
                    modifier = Modifier.fillMaxSize(),
                    factory = { ctx ->
                        PlayerView(ctx).apply {
                            player = nativePlayer.exoPlayer
                            useController = true
                            resizeMode = AspectRatioFrameLayout.RESIZE_MODE_FIT
                            layoutParams = ViewGroup.LayoutParams(
                                ViewGroup.LayoutParams.MATCH_PARENT,
                                ViewGroup.LayoutParams.MATCH_PARENT
                            )
                        }
                    },
                    update = {
                        it.player = nativePlayer.exoPlayer
                    }
                )
            }
        }
    }
}

// Sleek Channel Control & Live Status Bar
@Composable
private fun ChannelControlBar(
    channel: Channel,
    isPlaying: Boolean,
    status: String,
    lastError: String?,
    isFavorite: Boolean,
    onToggleFavorite: () -> Unit,
    onRetry: () -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(StadiumSurface, RoundedCornerShape(8.dp))
            .padding(horizontal = 12.dp, vertical = 8.dp)
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically
        ) {
            // Live Status Indicator Dot
            Box(
                modifier = Modifier
                    .size(8.dp)
                    .clip(CircleShape)
                    .background(if (isPlaying) AccentGreen else LiveRed)
            )

            Spacer(Modifier.width(6.dp))

            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = channel.name,
                    color = TextWhite,
                    fontWeight = FontWeight.Bold,
                    fontSize = 13.sp,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis
                )
                Text(
                    text = "${channel.eventSubtitle} • $status",
                    color = TextMuted,
                    fontSize = 10.sp,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis
                )
            }

            // Quality Badge (e.g. 4K / FHD)
            Box(
                modifier = Modifier
                    .clip(RoundedCornerShape(4.dp))
                    .background(StadiumCard)
                    .padding(horizontal = 6.dp, vertical = 2.dp)
            ) {
                Text(
                    text = channel.qualityBadge,
                    color = GoldYellow,
                    fontSize = 9.sp,
                    fontWeight = FontWeight.Bold
                )
            }

            Spacer(Modifier.width(6.dp))

            // Reload / Retry Button
            if (lastError != null) {
                IconButton(onClick = onRetry, modifier = Modifier.size(28.dp)) {
                    Icon(
                        Icons.Default.Refresh,
                        contentDescription = "Retry",
                        tint = GoldYellow,
                        modifier = Modifier.size(16.dp)
                    )
                }
            }

            // Favorite Button
            IconButton(onClick = onToggleFavorite, modifier = Modifier.size(28.dp)) {
                Icon(
                    imageVector = if (isFavorite) Icons.Default.Favorite else Icons.Default.FavoriteBorder,
                    contentDescription = "Favorite",
                    tint = if (isFavorite) LiveRed else TextMuted,
                    modifier = Modifier.size(16.dp)
                )
            }
        }
    }
}

// Horizontal Scrollable Category Filter Pills
@Composable
private fun CategoryChipsRow(
    categories: List<String>,
    selectedCategory: String,
    onSelectCategory: (String) -> Unit
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .horizontalScroll(rememberScrollState())
            .padding(vertical = 4.dp),
        horizontalArrangement = Arrangement.spacedBy(6.dp)
    ) {
        categories.forEach { category ->
            val isSelected = category == selectedCategory
            val chipColor = if (isSelected) AccentGreen else StadiumCard
            val textColor = if (isSelected) StadiumDark else TextMuted

            Box(
                modifier = Modifier
                    .clip(RoundedCornerShape(16.dp))
                    .background(chipColor)
                    .clickable { onSelectCategory(category) }
                    .padding(horizontal = 10.dp, vertical = 5.dp)
            ) {
                Text(
                    text = category,
                    color = textColor,
                    fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Medium,
                    fontSize = 11.sp
                )
            }
        }
    }
}

// Compact, Modern Search Bar
@Composable
private fun CompactSearchBar(
    query: String,
    onQueryChange: (String) -> Unit,
    modifier: Modifier = Modifier
) {
    OutlinedTextField(
        value = query,
        onValueChange = onQueryChange,
        modifier = modifier
            .fillMaxWidth()
            .height(46.dp),
        singleLine = true,
        placeholder = {
            Text("Search match or channel…", color = TextSubtle, fontSize = 12.sp)
        },
        leadingIcon = {
            Icon(
                Icons.Default.Search,
                contentDescription = null,
                tint = TextSubtle,
                modifier = Modifier.size(18.dp)
            )
        },
        trailingIcon = {
            if (query.isNotEmpty()) {
                IconButton(onClick = { onQueryChange("") }) {
                    Icon(
                        Icons.Default.Close,
                        contentDescription = "Clear",
                        tint = TextSubtle,
                        modifier = Modifier.size(16.dp)
                    )
                }
            }
        },
        shape = RoundedCornerShape(8.dp),
        colors = OutlinedTextFieldDefaults.colors(
            focusedContainerColor = StadiumCard,
            unfocusedContainerColor = StadiumCard,
            disabledContainerColor = StadiumCard,
            focusedBorderColor = AccentGreen,
            unfocusedBorderColor = Color.Transparent,
            focusedTextColor = TextWhite,
            unfocusedTextColor = TextWhite
        )
    )
}

// Compact Channel Selector List
@Composable
private fun CompactChannelList(
    channels: List<Channel>,
    selectedChannel: Channel?,
    favorites: List<String>,
    onSelect: (Channel) -> Unit,
    onToggleFavorite: (Channel) -> Unit,
    modifier: Modifier = Modifier
) {
    if (channels.isEmpty()) {
        Box(
            modifier = modifier
                .fillMaxWidth()
                .padding(32.dp),
            contentAlignment = Alignment.Center
        ) {
            Text("No channels found", color = TextMuted, fontSize = 12.sp)
        }
    } else {
        LazyColumn(
            modifier = modifier.fillMaxSize(),
            verticalArrangement = Arrangement.spacedBy(5.dp),
            contentPadding = PaddingValues(vertical = 4.dp)
        ) {
            items(channels, key = { it.id }) { channel ->
                CompactChannelCard(
                    channel = channel,
                    isSelected = selectedChannel?.id == channel.id,
                    isFavorite = favorites.contains(channel.id),
                    onSelect = { onSelect(channel) },
                    onToggleFavorite = { onToggleFavorite(channel) }
                )
            }
        }
    }
}

// Compact Channel Card (Sleek, low-height ~50dp)
@Composable
private fun CompactChannelCard(
    channel: Channel,
    isSelected: Boolean,
    isFavorite: Boolean,
    onSelect: () -> Unit,
    onToggleFavorite: () -> Unit
) {
    val cardBg = if (isSelected) StadiumCardActive else StadiumCard
    val borderModifier = if (isSelected) {
        Modifier.border(1.dp, AccentGreen, RoundedCornerShape(8.dp))
    } else {
        Modifier
    }

    val networkColors = when {
        channel.network.contains("SuperSport", true) -> listOf(Color(0xFFE11D48), Color(0xFF1E3A8A))
        channel.network.contains("Sky", true) -> listOf(Color(0xFF0284C7), Color(0xFF0369A1))
        channel.network.contains("TNT", true) -> listOf(Color(0xFFF59E0B), Color(0xFFD97706))
        channel.network.contains("beIN", true) -> listOf(Color(0xFF8B5CF6), Color(0xFF6D28D9))
        channel.network.contains("ESPN", true) -> listOf(Color(0xFFDC2626), Color(0xFF991B1B))
        channel.network.contains("DAZN", true) -> listOf(Color(0xFF1E293B), Color(0xFFD97706))
        channel.network.contains("F1", true) || channel.network.contains("UFC", true) || channel.network.contains("WWE", true) -> listOf(Color(0xFFEF4444), Color(0xFF18181B))
        channel.network.contains("NBA", true) || channel.network.contains("NFL", true) || channel.network.contains("MLB", true) -> listOf(Color(0xFF2563EB), Color(0xFF1E40AF))
        channel.network.contains("News", true) || channel.network.contains("BBC", true) || channel.network.contains("CNN", true) || channel.network.contains("Al Jazeera", true) -> listOf(Color(0xFFE11D48), Color(0xFF475569))
        channel.network.contains("Nat Geo", true) || channel.network.contains("Discovery", true) || channel.network.contains("NASA", true) -> listOf(Color(0xFFD97706), Color(0xFF059669))
        else -> listOf(Color(0xFF059669), Color(0xFF047857))
    }

    Row(
        modifier = Modifier
            .fillMaxWidth()
            .then(borderModifier)
            .clip(RoundedCornerShape(8.dp))
            .background(cardBg)
            .clickable(onClick = onSelect)
            .padding(horizontal = 10.dp, vertical = 7.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        // Network Monogram / Logo Box
        Box(
            modifier = Modifier
                .size(34.dp)
                .clip(RoundedCornerShape(6.dp))
                .background(Brush.linearGradient(networkColors)),
            contentAlignment = Alignment.Center
        ) {
            Text(
                text = channel.network.take(3).uppercase(),
                color = Color.White,
                fontWeight = FontWeight.Black,
                fontSize = 9.sp
            )
        }

        Spacer(Modifier.width(10.dp))

        Column(modifier = Modifier.weight(1f)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Text(
                    text = channel.name,
                    color = if (isSelected) AccentGreen else TextWhite,
                    fontWeight = FontWeight.Bold,
                    fontSize = 12.sp,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis
                )
                if (channel.isTopTen) {
                    Spacer(Modifier.width(4.dp))
                    Text(
                        text = "★ TOP",
                        color = GoldYellow,
                        fontSize = 8.sp,
                        fontWeight = FontWeight.ExtraBold
                    )
                }
            }
            Text(
                text = channel.eventSubtitle,
                color = TextSubtle,
                fontSize = 10.sp,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis
            )
        }

        // Quality Tag
        Box(
            modifier = Modifier
                .clip(RoundedCornerShape(3.dp))
                .background(StadiumSurface)
                .padding(horizontal = 4.dp, vertical = 1.dp)
        ) {
            Text(
                text = channel.qualityBadge,
                color = TextMuted,
                fontSize = 8.sp,
                fontWeight = FontWeight.SemiBold
            )
        }

        Spacer(Modifier.width(4.dp))

        // Favorite Button
        IconButton(
            onClick = onToggleFavorite,
            modifier = Modifier.size(24.dp)
        ) {
            Icon(
                imageVector = if (isFavorite) Icons.Default.Favorite else Icons.Default.FavoriteBorder,
                contentDescription = null,
                tint = if (isFavorite) LiveRed else TextSubtle,
                modifier = Modifier.size(14.dp)
            )
        }
    }
}

// Embedded Web Player for protected / web streaming portals
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
                settings.useWideViewPort = true
                settings.loadWithOverviewMode = true
                settings.userAgentString =
                    "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36"
                webViewClient = WebViewClient()
                webChromeClient = WebChromeClient()
                loadUrl(url)
            }
        },
        update = { view ->
            if (view.url != url) view.loadUrl(url)
        },
        onRelease = {
            it.stopLoading()
            it.destroy()
        }
    )
}
