const mongoose = require('mongoose');

const meFollowingSchema = new mongoose.Schema(
{
    "artists": {
      "cursor": {
        "after": "sample-cursor"
      },
      "href": "https://api.spotify.com/v1/me/following?type=artist",
      "items": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6mdiAmATAx73kdxrNrnlao"
          },
          "followers": {
            "href": null,
            "total": 12186120
          },
          "genres": [
            "alternative metal",
            "nu metal",
            "post-grunge",
            "rock"
          ],
          "href": "https://api.spotify.com/v1/artists/6mdiAmATAx73kdxrNrnlao",
          "id": "6mdiAmATAx73kdxrNrnlao",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab6761610000e5eb7d7b6e18c44e2e998c191d5a",
              "width": 640
            }
          ],
          "name": "Linkin Park",
          "popularity": 87,
          "type": "artist",
          "uri": "spotify:artist:6mdiAmATAx73kdxrNrnlao"
        }
      ],
      "limit": 1,
      "next": "https://api.spotify.com/v1/me/following?type=artist&after=sample-cursor",
      "total": 1
    }
  }
)
module.exports = mongoose.model('meFollowing', meFollowingSchema);