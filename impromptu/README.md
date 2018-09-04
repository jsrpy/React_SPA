
## Impromptu

[Impromptu](https://impromptu.surge.sh) helps you create your unique Spotify playlist!

![Impromptu](../img/impromptu.jpg)

To being, simply search for tracks, you will be directed to login to you Spotify account. Then add tracks to your playlist and click `SAVE TO SPOTIFY`. You should see your new playlist at [Your Spotify Library](https://open.spotify.com/collection/playlists).

A live demo is available on [https://impromptu.surge.sh](https://impromptu.surge.sh), with SSL enabled.

### Features

1. Pressing enter triggers a search
2. Provide preview for each track
3. Linked button to Spotify Library
4. Restore the search term before the redirect on login

The [technical desgin document](impromptu_feature_request.txt) has fully documented the implementation details of these features.

### Source Code

All source code is provided except the Spotify API key at [src/util/Spotify.js](src/util/Spotify.js). You should register your own 
API key at [Spotify Developer Guide](https://developer.spotify.com/web-api/tutorial/).
