const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema(
{
    "href": "https://api.spotify.com/v1/me/tracks",
    "items": [
      {
        "added_at": "2023-06-20T10:00:00Z",
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"
                },
                "href": "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
                "id": "3Nrfpe0tUJi4K4DXYWgMUX",
                "name": "BTS",
                "type": "artist",
                "uri": "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/6mJZTV8lCqnwftYZa94bXS"
            },
            "href": "https://api.spotify.com/v1/albums/6mJZTV8lCqnwftYZa94bXS",
            "id": "6mJZTV8lCqnwftYZa94bXS",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273d43b36f5d13a5a9b7bbd798f",
                "width": 640
              }
            ],
            "name": "MAP OF THE SOUL : 7",
            "release_date": "2020-02-21",
            "release_date_precision": "day",
            "type": "album",
            "uri": "spotify:album:6mJZTV8lCqnwftYZa94bXS"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"
              },
              "href": "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
              "id": "3Nrfpe0tUJi4K4DXYWgMUX",
              "name": "BTS",
              "type": "artist",
              "uri": "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX"
            }
          ],
          "disc_number": 1,
          "duration_ms": 267200,
          "explicit": false,
          "external_ids": {
            "isrc": "USUM72002762"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/5KawlOMHjWeUjQtnuRs22c"
          },
          "href": "https://api.spotify.com/v1/tracks/5KawlOMHjWeUjQtnuRs22c",
          "id": "5KawlOMHjWeUjQtnuRs22c",
          "name": "ON",
          "popularity": 85,
          "preview_url": "https://p.scdn.co/mp3-preview/1c6b626ddaa5c1ddc8f8e8b1cfe58ad93d9b7e43?cid=774b29d4f13844c495f206cafdad9c86",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:5KawlOMHjWeUjQtnuRs22c"
        }
      }
    ],
    "limit": 1,
    "next": "https://api.spotify.com/v1/me/tracks?offset=1&limit=1",
    "offset": 0,
    "previous": null,
    "total": 1
  }
)
module.exports = mongoose.model('search', searchSchema);