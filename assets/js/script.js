//spotifyAPI, clientSecret
spotifyApi = '682d29adad28470bbaa8b701f8bbf44f'
spotifyclientSecret = '635b54c1f31480290c2da839407b242'
spotifyredirectURI = 'https://johnson90cm.github.io/group-project-1/callback/'

var searchBtn = document.querySelector(".searchBtn");

function artistSearch() {
  var searchName = document.querySelector(".searchName").value
  console.log(searchName)
  .then(function (response) {
      return response.json()
    })
    .then(function (artistData) {
      console.log(artistData);

  // Get an artist's tracks
spotifyApi.getArtistTracks("#tracks")
.then(function(data) {
  console.log(data.body);
  }, function(err) {
  console.log('Something went wrong!', err);
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
  spotify_uri: 'spotify:artist:""',
});
window.onSpotifyWebPlaybackSDKReady = () => {
  // You can now initialize Spotify.Player and use the SDK
};
spotifyApi.setAccessToken('BQDbFGYZ3FZQmqpKIT60rM1P532p6EfQtooKXgwWh6GOnRbXLftSzac_BMOTgfuNb0CPvADlYlZlomWcANtAqXIm7wAgVCbKauphcaCvmO0335nG_a8KijYBEbHxcjzA-1sxABxpR1iZaXIG3_cX0V_LZsI');



})
}

var button = document.querySelector(".searchBtn")
button.addEventListener("click", artistSearch)
