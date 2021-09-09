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
function myFunction() {
    locationSearch()
    artistSearch()
}
button.onclick=myFunction