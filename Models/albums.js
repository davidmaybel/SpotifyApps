const mongoose = require('mongoose');
const albumSchema = new mongoose.Schema(
[
    {
      "album_type": "album",
      "artists": [{"id": "1", "name": "Artist 1"}],
      "available_markets": ["US", "CA"],
      "copyrights": [{"text": "© 2023 Example", "type": "C"}],
      "external_ids": {"upc": "123456789012"},
      "external_urls": {"spotify": "https://spotify.com/album/1"},
      "genres": ["Pop"],
      "href": "https://api.spotify.com/v1/albums/1",
      "id": "1",
      "images": [{"height": 640, "url": "https://example.com/album1.jpg", "width": 640}],
      "name": "Example Album 1",
      "popularity": 80,
      "release_date": "2023-01-01",
      "release_date_precision": "day",
      "tracks": {
        "href": "https://api.spotify.com/v1/albums/1/tracks",
        "items": [{"id": "1", "name": "Track 1"}],
        "limit": 50,
        "total": 1
      },
      "type": "album",
      "uri": "spotify:album:1"
    }
  ])

  module.exports = mongoose.model('Album', albumSchema);