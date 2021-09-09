//spotifyAPI, clientSecret
clientID = '682d29adad28470bbaa8b701f8bbf44f'
clientSecret = '635b54c1f31480290c2da839407b242'
redirectURI = 'https://johnson90cm.github.io/group-project-1/callback'

var searchBtn = document.querySelector(".searchBtn");

function artistSearch() {
  var searchName = document.querySelector(".searchName").value
  console.log(searchName)
  fetch('https://api.spotify.com/v1/albums' + searchName +'/?clientId=682d29adad28470bbaa8b701f8bbf44f')
  .then(function (response) {
      return response.json()
    })
    .then(function (artistData) {
      console.log(artistData);

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
 
/* Get Audio Analysis for a Track */
 spotifyApi.getAudioAnalysisForTrack('')
.then(function(data) {
  console.log(data.body);
}, function(err) {
  done(err);
});


play({
  playerInstance: new Spotify.Playlist({ name: "..." }),
  spotify_uri: 'https://johnson90cm.github.io/group-project-1/callback',
});
window.onSpotifyWebPlaybackSDKReady = () => {
  // You can now initialize Spotify.Player and use the SDK
};
spotifyApi.setAccessToken('BQBL3hlgetXA75s5ASMv9N1rA3YzNzLaJ6udagv5lBiGiM1zwnCSyl-ZHp6dWONeTZUKFEmjbf_ZGE4Ld_rWORJejAYXL3jqEKE795w2yIBPvLUxmMLovYaMZZTWn0BurgQEehYYs0NTzg');


})
}

var button = document.querySelector(".searchBtn")
button.addEventListener("click", artistSearch)
