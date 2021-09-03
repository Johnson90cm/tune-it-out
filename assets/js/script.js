clientId = '682d29adad28470bbaa8b701f8bbf44f'
clientSecret = '635b54c1f31480290c2da839407b242'

var spotifyApi = new SpotifyWebApi({
  clientId: '682d29adad28470bbaa8b701f8bbf44f',
  clientSecret: '6635b54c1f31480290c2da839407b242',
  redirectUri: 'https://johnson90cm.github.io/group-project-1/callback',
});

/**
 * Get metadata of tracks, albums, artists, shows, and episodes
 */
  spotifyApi.setAccessToken('682d29adad28470bbaa8b701f8bbf44f');

// Get album
spotifyApi.getAlbum('5U4W9E5WsYb2jUQWePT8Xm')
  .then(function(data) {
    console.log('Album information', data.body);
  }, function(err) {
    console.error(err);
  });

// Get multiple albums
spotifyApi.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV'])
  .then(function(data) {
    console.log('Albums information', data.body);
  }, function(err) {
    console.error(err);
  });

// Get an artist
spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
  .then(function(data) {
    console.log('Artist information', data.body);
  }, function(err) {
    console.error(err);
  });

// Get multiple artists
spotifyApi.getArtists(['2hazSY4Ef3aB9ATXW7F5w3', '6J6yx1t3nwIDyPXk5xa7O8'])
  .then(function(data) {
    console.log('Artists information', data.body);
  }, function(err) {
    console.error(err);
  });

// Get albums by a certain artist
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  .then(function(data) {
    console.log('Artist albums', data.body);
  }, function(err) {
    console.error(err);
  });
  // Get an artist's top tracks
spotifyApi.getArtistTopTracks('0oSGxfWSnnOXhD2fKuz2Gy', 'GB')
.then(function(data) {
  console.log(data.body);
  }, function(err) {
  console.log('Something went wrong!', err);
});

// Get artists related to an artist
spotifyApi.getArtistRelatedArtists('0qeei9KQnptjwb8MgkqEoy')
.then(function(data) {
  console.log(data.body);
}, function(err) {
  done(err);
});

/* Get Audio Features for a Track */
spotifyApi.getAudioFeaturesForTrack('3Qm86XLflmIXVm1wcwkgDK')
.then(function(data) {
  console.log(data.body);
}, function(err) {
  done(err);
});

/* Get Audio Analysis for a Track */
spotifyApi.getAudioAnalysisForTrack('3Qm86XLflmIXVm1wcwkgDK')
.then(function(data) {
  console.log(data.body);
}, function(err) {
  done(err);
});
play({
  playerInstance: new Spotify.Player({ name: "..." }),
  spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
});
window.onSpotifyWebPlaybackSDKReady = () => {
  // You can now initialize Spotify.Player and use the SDK
};
