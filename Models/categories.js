const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
{
  "href": "https://api.spotify.com/v1/browse/categories",
  "items": [
    {
      "href": "https://api.spotify.com/v1/browse/categories/top_hits",
      "icons": [
        {"height": 64, "url": "https://example.com/top_hits_icon.jpg", "width": 64}
      ],
      "id": "1",
      "name": "Top Hits"
    },
    {
      "href": "https://api.spotify.com/v1/browse/categories/workout",
      "icons": [
        {"height": 64, "url": "https://example.com/workout_icon.jpg", "width": 64}
      ],
      "id": "2",
      "name": "Workout"
    }
  ],
  "limit": 2,
  "next": "",
  "offset": 0,
  "previous": "",
  "total": 2
})

module.exports = mongoose.model('Category', categorySchema);