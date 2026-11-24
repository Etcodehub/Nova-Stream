# NovaStream Android

A GitHub-ready Kotlin starter app based on the uploaded NovaStream HTML player.

## Included in this starter

- Native Android playback using AndroidX Media3 / ExoPlayer.
- HLS (`.m3u8`), MPEG-DASH (`.mpd`) and progressive media playback.
- M3U playlist loading from a URL.
- M3U metadata parsing: channel name, group, logo URL, User-Agent, Referer and Cookie options.
- Direct stream / embed URL entry.
- Search, category shortcuts and session favorites.
- WebView fallback for recognized website-embed channels.
- Basic playback status and Media3 error reporting.
- GitHub Actions workflow that builds and uploads a debug APK.

## Important limitations

- This is a starter project, not a production-ready streaming service.
- A native player does not bypass provider authorization, DRM, geo-restrictions, expired tokens or server-side hotlink protections.
- The app forwards playlist-specified headers, but providers may require additional session flows or headers.
- The website embed fallback is only for providers that permit embedding and playback in WebView.
- Favorites are currently kept in memory for the current app session; persistent storage is a follow-up task.
- The starter includes public IPTV-org category playlist URLs because they were present in the supplied HTML. Verify the rights and availability of any channel before distributing it.
- HTTP cleartext is enabled to support legacy user-supplied streams. Prefer HTTPS sources; disable cleartext in the manifest for a production release if it is not required.
- No proxy or DRM circumvention is included.

## Build through GitHub

1. Create a new GitHub repository, for example `NovaStream-Android`.
2. Upload the contents of this folder to the repository root (not the enclosing ZIP folder).
3. Open **Actions**. The `Android CI` workflow runs on pushes to `main` / `master`, pull requests, and manual dispatch.
4. Open the successful workflow run.
5. Under **Artifacts**, download `novastream-debug-apk`.
6. Install `app-debug.apk` on an Android test device. Android may ask you to allow installation from the browser or file manager.

The workflow runs parser unit tests and uses JDK 17, Gradle 8.13, Android SDK 36, Android Gradle Plugin 8.13.2, Kotlin 2.2.21, Compose BOM 2026.09.00 and Media3 1.11.1.

## Local build

Install Android Studio with Android SDK Platform 36 and JDK 17. Install Gradle 8.13, then run:

```bash
gradle assembleDebug
```

The APK is generated at:

```text
app/build/outputs/apk/debug/app-debug.apk
```

## Project structure

```text
NovaStream/
├── .github/workflows/android.yml
├── app/
│   ├── build.gradle.kts
│   └── src/main/
│       ├── AndroidManifest.xml
│       └── java/com/novastream/android/
│           ├── MainActivity.kt
│           ├── data/
│           │   ├── Channel.kt
│           │   └── M3uParser.kt
│           └── player/
│               └── NativePlayer.kt
├── build.gradle.kts
├── gradle.properties
└── settings.gradle.kts
```

## Next development milestones

1. Verify the first GitHub Actions build and fix any dependency/API issues surfaced by the build.
2. Add persistent favorites and recently played channels.
3. Add a dedicated channel details / diagnostics screen.
4. Add adaptive bitrate, track selection and a full-screen player experience.
5. Add configurable per-channel request headers and a secure backend integration for sources you are authorized to use.
6. Add tests for M3U parsing and URL classification.
