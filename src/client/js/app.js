const { getCoordinates } = require("./coordinates");

const geoNamesBaseURL = 'http://api.geonames.org/searchJSON?q=';
const geoNamesAPIKey = '&username=khushal_abrol'

const city = document.getElementById('city').value
const date = document.getElementById('date').value

const url = geoNamesBaseURL+city+geoNamesAPIKey
const weatherURL = weatherBaseURL+"lat="+lat+"&lon="+lon+"&key="+weatherAPIKey

//On Submit Button click call submit function
document.getElementById('generate').addEventListener('click',submit);

function submit()
    //call getCoordinates() to get coordinates from API
    Client.getCoordinates(url)
    //then store coordinated and post data to server
    .then((coordinates) => {
        postData('/addCoordinates', {
            longitude: data.geonames[0].lng,
            latitude: data.geonames[0].lat,   
            city: data.geonames[0].name   
        })
})

//get location (lat and lon) from server
get('/getLocation', getCoordinatesData)
function getCoordinatesData(req, res){
    const lan = req.body.latitude
    const lon = req.body.longitude
    return 
}


//use lon and lat from above and date to call getWeatherData function to get weather Data of a perticular Date
getWeatherBitData(lan, lon, date)