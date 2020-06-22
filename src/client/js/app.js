const geoNamesBaseURL = 'http://api.geonames.org/searchJSON?q=';
const geoNamesAPIKey = '&username=khushal_abrol'

const city = document.getElementById('city').value
const date = document.getElementById('date').value

const url = geoNamesBaseURL+city+geoNamesAPIKey
const weatherURL = weatherBaseURL+"lat="+lat+"&lon="+lon+"&key="+weatherAPIKey

//On Submit Button click call submit function
document.getElementById('generate').addEventListener('click',submit);

function submit(){
    //call getCoordinates() to get coordinates from API
    /* const coordinates =  */Client.getCoordinates(url)
    //then store coordinated and post data to server
    .then((coordinates) => {
        postData('/addCoordinates', {
            longitude: coordinates.geonames[0].lng,
            latitude: coordinates.geonames[0].lat,   
            city: coordinates.geonames[0].name   
        })})

    .then(() => {
            //get location (lat and lon) from server
        const location = []
        location = get('/getLocation', getCoordinatesData)
        function getCoordinatesData(req, res){
            const lat = req.body.latitude
            const lon = req.body.longitude
            return [lat,lon]
        }})

    .then(function(){
//use lon and lat from above and date to call getWeatherData function to get weather Data of a perticular Date
        Client.getWeatherBitData(lan, lon, date)
    })

    .then(function(){
        Client.getImage(city)
    })

    .then(function(){
        updateUI()
    })}

//updateUI function defination:
  const updateUI = async() => {
    const request = await fetch('/getWeather');
    try{
        const allData = await request.json();
        //console.log("updateUI working")
        //console.log(allData[0].zip);
        //Index takes last index of the data stored in the server
        var index = allData.length-1;
        document.getElementById('pressure').innerHTML = allData[index].press;
        document.getElementById('temp-min').innerHTML = allData[index].mintemp;
        document.getElementById('temp-max').innerHTML = allData[index].maxtemp;
        document.getElementById('snow-depth').innerHTML = allData[index].snow;
        document.getElementById('cloudes').innerHTML = allData[index].cloudes;
        document.getElementById('wind-speed').innerHTML = allData[index].wind;
        // console.log(allData);
    }
    catch(error){
            alert("error"+error);
    }}