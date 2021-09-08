// Bands in town API  29aaf39bfa83b4edff793b76ddddfba0
var searchBtn = document.querySelector(".searchBtn");

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

}

searchBtn.onclick = artistSearch