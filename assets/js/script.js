
clientId = '682d29adad28470bbaa8b701f8bbf44f'
clientSecret = '635b54c1f31480290c2da839407b242'

function artistSearch() {
  var searchName = document.querySelector(".searchName").value
  console.log(searchName)
  fetch('https://api.spotify.com/v1/artists//albums' + searchName +'/?app_id=29aaf39bfa83b4edff793b76ddddfba0')
  .then(function (response) {
      return response.json()
    })
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
spotifyApi.setAccessToken('BQDYbcsxkS7BgMrqK_7RMEstZCULyn5foqIJQdzZZNHxM0NTQJ-PvAiR8b2U2GO54Ple0Z-tZCrvbLGPwVDvKIpPioX-Ep1a_oZtxCWpJf2yczE3JWKTMArtkj_qx_Vn-v2M39XKMTElhp5pbdEqhpQihPamKxFcfw');
}
