const mongoose = require('mongoose');

const meSchema = new mongoose.Schema(
{
  "birthdate": "1990-01-01",
  "country": "US",
  "displayName": "John Doe",
  "email": "johndoe@example.com",
  "external_urls": {
    "spotify": "https://open.spotify.com/user/your-user-id"
  },
  "followers": {
    "href": null,
    "total": 1000
  },
  "href": "https://api.spotify.com/v1/users/your-user-id",
  "id": "your-user-id",
  "product": "premium",
  "type": "user",
  "uri": "spotify:user:your-user-id"
}
)
module.exports = mongoose.model('me', meSchema);