const express = require('express');
const mongoose = require ('mongoose')
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Helper functions to read and write JSON files
const readJsonFromFile = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading from ${filePath}:`, error);
        return [];
    }
};
const writeJsonToFile = (filePath, data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error(`Error writing to ${filePath}:`, error);
    }
};

// File paths
const albumsFilePath = path.join(__dirname, 'schema/albums.json');
const artistsFilePath = path.join(__dirname, 'schema/artists.json');
const tracksFilePath = path.join(__dirname, 'schema/tracks.json');
const playlistsFilePath = path.join(__dirname, 'schema/playlists.json');
const categoriesFilePath = path.join(__dirname, 'schema/categories.json');
const categoriesIDFilePath = path.join(__dirname, 'schema/categoriesId.json');
const categoriesPlaylistsFilePath = path.join(__dirname, 'schema/categoriesPlaylists.json');
const newReleasesFilePath = path.join(__dirname, 'schema/newReleases.json');
const MeFilePath = path.join(__dirname, 'schema/me.json');
const MeFollowingFilePath = path.join(__dirname, 'schema/meFollowing.json');
const MeTracksFilePath = path.join(__dirname, 'schema/meTracks.json');

// Albums endpoints
app.get('/albums', (req, res) => {
    const albums = readJsonFromFile(albumsFilePath);
    res.json(albums);
});

app.get('/albums/:id', (req, res) => {
    const albums = readJsonFromFile(albumsFilePath);
    const album = albums.find(a => a.id === req.params.id);
    album ? res.json(album) : res.status(404).send('Album not found');
});

app.get('/albums/:id/tracks', (req, res) => {
    const albums = readJsonFromFile(albumsFilePath);
    const album = albums.find(a => a.id === req.params.id);
    album ? res.json(album.tracks) : res.status(404).send('Album not found');

});

// Artists endpoints
app.get('/artists', (req, res) => {
    let artists = readJsonFromFile(artistsFilePath);
    res.json(artists);
});

app.get('/artists/:id', (req, res) => {
    const artists = readJsonFromFile(artistsFilePath);
    const artist = artists.find(a => a.id === req.params.id);
    artist ? res.json(artist) : res.status(404).send('Artist not found');
});

app.get('/artists/:id/albums', (req, res) => {
    const albums = readJsonFromFile(albumsFilePath);
    const artistAlbums = albums.filter(a => a.artists.some(artist => artist.id === req.params.id));
    res.json(artistAlbums);
});

app.get('/artists/:id/related-artists', (req, res) => {
    let artists = readJsonFromFile(artistsFilePath);
    res.json(artists)
});

app.get('/artists/:id/top-tracks', (req, res) => {
    res.json(tracks);
});

app.get('/browse/categories', (req, res) => {
    const categories = readJsonFromFile(categoriesFilePath);
    res.json(categories);
});

app.get('/browse/categories/:category_id', (req, res) => {
    const categoryId = req.params.category_id;
    const categories = readJsonFromFile(categoriesIDFilePath);
    
    // Check if categories is an array
    if (!Array.isArray(categories)) {
        res.status(500).json({ message: 'Categories data is not in the correct format' });
        return;
    }
    const category = categories.find(category => category.id === categoryId);

    if (category) {
        res.json(category);
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
});

app.get('/browse/categories/:category_id/playlists', (req, res) => {
    const categoryId = req.params.category_id;
    const playlists = readJsonFromFile(categoriesPlaylistsFilePath);
    
    // Filter playlists by category_id
    const categoryPlaylists = playlists.filter(playlist => playlist.category_id === categoryId);

    // Prepare the response JSON object
    const response = {
        playlists: {
            href: `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`,
            items: categoryPlaylists,
            limit: categoryPlaylists.length,
            next: '',
            offset: 0,
            previous: '',
            total: categoryPlaylists.length
        }
    };

    res.json(response);
});


app.get('/browse/featured-playlists', (req, res) => {
    const playlists = readJsonFromFile(playlistsFilePath);
    res.json(playlists);
});

app.get('/browse/new-releases', (req, res) => {
    const newReleases= readJsonFromFile(newReleasesFilePath);
    res.json(newReleases);
});

// User endpoints
app.get('/me', (req, res) => {
    const Me= readJsonFromFile(MeFilePath);
    res.json(Me);
});

app.get('/me/following', (req, res) => {
    const MeFollow= readJsonFromFile(MeFollowingFilePath);
    res.json(MeFollow);
});


app.get('/me/tracks', (req, res) => {
    const Track= readJsonFromFile(MeTracksFilePath);
    res.json(Track);
});

app.get('/me/tracks/contains', (req, res) => {
    // For simplicity, returning a static tracks status
    res.json([]);
});

// Search endpoint
app.get('/search', (req, res) => {
    const albums = readJsonFromFile(albumsFilePath);
    const artists= readJsonFromFile(artistsFilePath);
    const tracks = readJsonFromFile(tracksFilePath);
    res.json({ albums, artists, tracks });
});

// Tracks endpoints
app.get('/tracks', (req, res) => {
    const tracks = readJsonFromFile(tracksFilePath);
    res.json(tracks);
});

app.get('/tracks/:id', (req, res) => {
    const tracks = readJsonFromFile(tracksFilePath);
    const track = tracks.find(t => t.id === req.params.id);
    track ? res.json(track) : res.status(404).send('Track not found');
});

// User playlists endpoints
app.get('/playlists', (req, res) => {
    const playlists = readJsonFromFile(playlistsFilePath);
    res.json(playlists);
});

app.get('/playlists/:id', (req, res) => {
    const playlists = readJsonFromFile(playlistsFilePath);
    const playlist = playlists.find(p => p.id === req.params.id);
    playlist ? res.json(playlist) : res.status(404).send('Playlist not found');
});
app.post('/playlists', (req, res) => {
    const playlists = readJsonFromFile(playlistsFilePath);
    const newPlaylist = req.body;
    playlists.push(newPlaylist);
    writeJsonToFile(playlistsFilePath, playlists);
    res.status(201).json(newPlaylist);
});

app.get('/users/:user_id/playlists/:playlist_id', (req, res) => {
    const user = users.find(u => u.id === req.params.user_id);
    if (user) {
        const playlist = user.playlists.find(p => p.id === req.params.playlist_id);
        playlist ? res.json(playlist) : res.status(404).send('Playlist not found');
    } else {
        res.status(404).send('User not found');
    }
});

app.get('/users/:user_id/playlists/:playlist_id/followers', (req, res) => {
    const { user_id, playlist_id } = req.params;

    // Find the user by ID
    const user = users.users.find(user => user.id === user_id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Find the playlist by ID
    const playlist = user.playlists.find(playlist => playlist.id === playlist_id);
    if (!playlist) {
        return res.status(404).json({ error: 'Playlist not found' });
    }

    // Return the list of followers
    res.json(playlist.followers);
});


app.get('/users/:user_id/playlists/:playlist_id/followers/contains', (req, res) => {
    const { user_id, playlist_id } = req.params;
    const ids = req.query.ids ? req.query.ids.split(',') : [];

    // Find the user by ID
    const user = users.users.find(user => user.id === user_id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Find the playlist by ID
    const playlist = user.playlists.find(playlist => playlist.id === playlist_id);
    if (!playlist) {
        return res.status(404).json({ error: 'Playlist not found' });
    }

    // Check if each ID is a follower
    const result = ids.map(id => playlist.followers.includes(id));
    res.json(result);
});

app.get('/users/:user_id/playlists/:playlist_id/tracks', (req, res) => {
    const user = users.find(u => u.id === req.params.user_id);
    if (user) {
        const playlist = user.playlists.find(p => p.id === req.params.playlist_id);
        playlist ? res.json(playlist.tracks) : res.status(404).send('Playlist not found');
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});