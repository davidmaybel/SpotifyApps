const mongoose = require('mongoose');

const tracksSchema = new mongoose.Schema(
[
    {
      "album": {"id": "1", "name": "Example Album 1"},
      "artists": [{"id": "1", "name": "Artist 1"}],
      "duration_ms": 200000,
      "explicit": false,
      "href": "https://api.spotify.com/v1/tracks/1",
      "id": "1",
      "name": "Track 1",
      "preview_url": "https://example.com/track1.mp3",
      "track_number": 1,
      "type": "track",
      "uri": "spotify:track:1"
    }
  ]
)
module.exports = mongoose.model('tracks', tracksSchema);