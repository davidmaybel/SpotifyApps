const mongoose = require('mongoose');

const categoryIdSchema = new mongoose.Schema(
[
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
  ]
)
module.exports = mongoose.model('CategoryId', categoryIdSchema);