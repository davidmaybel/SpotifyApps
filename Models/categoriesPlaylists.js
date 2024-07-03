const mongoose = require('mongoose');

const categoryPlaylistsSchema = new mongoose.Schema(
{
    "playlists": {
      "href": "https://api.spotify.com/v1/browse/categories/{category_id}/playlists",
      "items": [
        {
          "href": "https://api.spotify.com/v1/playlists/1",
          "id": "1",
          "name": "Playlist 1",
          "images": [
            {
              "height": 640,
              "url": "https://example.com/playlist1.jpg",
              "width": 640
            }
          ]
        },
        {
          "href": "https://api.spotify.com/v1/playlists/2",
          "id": "2",
          "name": "Playlist 2",
          "images": [
            {
              "height": 640,
              "url": "https://example.com/playlist2.jpg",
              "width": 640
            }
          ]
        }
      ],
      "limit": 2,
      "next": "",
      "offset": 0,
      "previous": "",
      "total": 2
    }
  }
)
module.exports = mongoose.model('CategoryPlaylists', categoryPlaylistsSchema);