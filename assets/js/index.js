// Bands in town API  29aaf39bfa83b4edff793b76ddddfba0
var searchBtn = document.querySelector(".searchBtn");


// artists info
//('https://rest.bandsintown.com/artists/' +{{artist_name}} +'/?app_id=29aaf39bfa83b4edff793b76ddddfba0')

function artistSearch() {
    var searchName = document.querySelector(".searchName").value
    console.log(searchName)
    fetch('https://rest.bandsintown.com/artists/' + searchName +'/?app_id=29aaf39bfa83b4edff793b76ddddfba0')
    .then(function (response) {
        return response.json()
    })
    .then(function (artistData) {
        console.log(artistData)

        var photo = document.querySelector("#photo")
        photo.setAttribute("src", artistData.image_url)

        var name = document.querySelector("#name")
        name.innerHTML = artistData.name

        var tourCount = document.querySelector("#tourCount")
        tourCount.innerHTML = "Upcoming Events: " + artistData.upcoming_event_count

        var button = document.createElement("a")

        button.textContent = ""

        button.innerHTML = "Tour Schedule"
        button.setAttribute("href", artistData.url)

        var btnDiv = document.querySelector("#btnDiv")
        btnDiv.append(button)
  })
};

function topTracks() {
    var searchName = document.querySelector(".searchName").value
    fetch("https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + searchName + "&api_key=2d17ea9eb336a4fd1671a6f2603f1bbe&format=json")
        .then(function (response) {
            return response.json()
        })
        .then(function (artistData) {
            console.log(artistData.toptracks);

            var trackName = document.querySelector("#song-item-1")
            trackName.innerHTML = "#1 " + artistData.toptracks.track[0].name

            var trackName = document.querySelector("#song-item-2")
            trackName.innerHTML = "#2 " + artistData.toptracks.track[1].name

            var trackName = document.querySelector("#song-item-3")
            trackName.innerHTML = "#3 " + artistData.toptracks.track[2].name

            var trackName = document.querySelector("#song-item-4")
            trackName.innerHTML = "#4 " + artistData.toptracks.track[3].name

            var trackName = document.querySelector("#song-item-5")
            trackName.innerHTML = "#5 " + artistData.toptracks.track[4].name
        })
}

// Artist Events
//https://rest.bandsintown.com/artists/{{artist_name}}/events/?app_id=yOUrSuP3r3ven7aPp-id
function locationSearch() {
    var searchName = document.querySelector(".searchName").value

    fetch('https://rest.bandsintown.com/artists/' + searchName +'/events?app_id=29aaf39bfa83b4edff793b76ddddfba0')
        .then(function (response) {
            return response.json()
    })
        .then(function (locationData) {
            console.log(locationData)

        var location = document.querySelector(".location")
        var venue = document.querySelector(".venue")
        var date = document.querySelector(".date")

        //date.innerHTML = "Date: " + locationData[0].datetime
        location.innerHTML = "Location: " + locationData[0].venue.location
        venue.innerHTML = "Venue: " + locationData[0].venue.name
        console.log(locationData)        

        var dateTwo = document.querySelector(".dateTwo")
        var locationTwo = document.querySelector(".locationTwo")
        var venueTwo = document.querySelector(".venueTwo")

        locationTwo.innerHTML = "Location: " + locationData[1].venue.location
        venueTwo.innerHTML = "Venue: " + locationData[1].venue.name

        var dateThree = document.querySelector(".dateThree")
        var locationThree = document.querySelector(".locationThree")
        var venueThree = document.querySelector(".venueThree")

        locationThree.innerHTML = "Location: " + locationData[2].venue.location
        venueThree.innerHTML = "Venue: " + locationData[2].venue.name
     })
}

searchBtn.onclick = function() {
    topTracks()
    locationSearch()
    artistSearch()
}
