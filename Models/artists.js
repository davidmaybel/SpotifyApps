const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema(
[
    {
      "external_urls": {"spotify": "https://spotify.com/artist/1"},
      "followers": {"total": 1000000},
      "genres": ["Pop"],
      "href": "https://api.spotify.com/v1/artists/1",
      "id": "1",
      "images": [{"height": 640, "url": "https://example.com/image1.jpg", "width": 640}],
      "name": "Artist 1",
      "popularity": 90,
      "type": "artist",
      "uri": "spotify:artist:1"
    }
  ])

  module.exports = mongoose.model('Artist', artistSchema);