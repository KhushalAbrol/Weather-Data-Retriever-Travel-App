const geoNamesBaseURL = 'http://api.geonames.org/searchJSON?q=';
const geoNamesAPIKey = '&username=khushal_abrol'

const city = document.getElementById('city').value
const date = document.getElementById('date').value

const url = geoNamesBaseURL+city+geoNamesAPIKey
const weatherURL = weatherBaseURL+"lat="+lat+"&lon="+lon+"&key="+weatherAPIKey

document.getElementById('generate').addEventListener('click',submit);

function submit()
    Client.getCoordinates(url)
    .then((coordinates) => {
        postData('/addCoordinates', {
            longitude: data.geonames[0].lon,
            latitude: data.geonames[0].lat,   
            city: data.geonames[0].name   
        })
})

getWeatherBitData(lan, lon){

    

}