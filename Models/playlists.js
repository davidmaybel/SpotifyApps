const mongoose = require('mongoose');

const playlistsSchema = new mongoose.Schema(
[
    {
      "collaborative": false,
      "description": "Example Playlist",
      "external_urls": {"spotify": "https://spotify.com/playlist/1"},
      "href": "https://api.spotify.com/v1/playlists/1",
      "id": "1",
      "images": [{"height": 640, "url": "https://example.com/playlist1.jpg", "width": 640}],
      "name": "Example Playlist 1",
      "owner": {"id": "user1", "display_name": "User 1"},
      "public": true,
      "snapshot_id": "snapshot1",
      "tracks": {
        "href": "https://api.spotify.com/v1/playlists/1/tracks",
        "items": [{"track": {"id": "1", "name": "Track 1"}}],
        "limit": 100,
        "total": 1
      },
      "type": "playlist",
      "uri": "spotify:playlist:1"
    }
]
)
module.exports = mongoose.model('playlists', playlistsSchema);