const mongoose = require('mongoose');

const newReleasesSchema = new mongoose.Schema(
{
    "href": "https://api.spotify.com/v1/browse/new-releases",
    "items": [
      {
        "album_type": "album",
        "available_markets": ["US", "CA", "GB"],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/1"
        },
        "href": "https://api.spotify.com/v1/albums/1",
        "id": "1",
        "images": [
          {
            "height": 640,
            "url": "https://example.com/album1.jpg",
            "width": 640
          }
        ],
        "name": "Album 1",
        "type": "album",
        "uri": "spotify:album:1"
      },
      {
        "album_type": "single",
        "available_markets": ["US", "CA"],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/2"
        },
        "href": "https://api.spotify.com/v1/albums/2",
        "id": "2",
        "images": [
          {
            "height": 640,
            "url": "https://example.com/album2.jpg",
            "width": 640
          }
        ],
        "name": "Single 1",
        "type": "single",
        "uri": "spotify:album:2"
      }
    ],
    "limit": 2,
    "next": "",
    "offset": 0,
    "previous": "",
    "total": 2
  }
)
module.exports = mongoose.model('meTracks', newReleasesSchema);