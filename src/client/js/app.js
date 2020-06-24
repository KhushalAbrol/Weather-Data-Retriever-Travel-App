import {getCoordinates} from './coordinates'
import {getImage} from './pixabay'
import {getWeatherBitData} from './weatherbit'


const geoNamesBaseURL = 'http://api.geonames.org/searchJSON?q=';
const geoNamesAPIKey = '&username=khushal_abrol'

const location = [];

const storeLocation = async() => {
    const request = await fetch('getLocation');
    try{
        const locationData = await request.json();
        const lat = locationData.body.latitude
        const lon = locationData.body.longitude 
        location.push(lat)
        location.push(lon)
        console.log(location)

    }
    catch(error){
            alert("error"+error);
    }
}







//On Submit Button click call submit function
document.getElementById('generate').addEventListener('click',submit);

function submit(event){
    const city = document.getElementById('city').value
    const date = document.getElementById('date').value
    const url = geoNamesBaseURL+city+geoNamesAPIKey
    event.preventDefault()
    console.log(url)
    console.log("submit works!!!")
    //call getCoordinates() to get coordinates from API
    getCoordinates(url)
    //then store coordinated and post data to server
    .then((coordinates) => {
        postData('/addCoordinates', {
            longitude: coordinates.geonames[0].lng,
            latitude: coordinates.geonames[0].lat,   
            city: coordinates.geonames[0].name   
        })})
            





        
        storeLocation()
console.log(location)
const lat = location[0]
const lon = location[1]
    //.then(res => res.json())
/*     .then(function(res){

            const lat = res.body.latitude
            const lon = req.body.longitude
            return [lat,lon]
        })
 */
    
//use lon and lat from above and date to call getWeatherData function to get weather Data of a perticular Date
        getWeatherBitData(lat, lon, date)
    


        getImage(city)

    .then(function(){
        updateUI()
    })}





    const postData = async (url = '', data = {}) =>{
        const response = await fetch(url, {
            method:'POST',
            credientials:'same-origin',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data),
        });
        try{
            const data = await response.json();
            return data
        }
        catch(error){
            alert("error"+error)
        }
    }

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






 export {submit}