import {getCoordinates} from './coordinates'
import {getImage} from './pixabay'
import {getWeatherBitData} from './weatherbit'


const geoNamesBaseURL = 'http://api.geonames.org/searchJSON?q=';
const geoNamesAPIKey = '&username=khushal_abrol'

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
        return postData('/addCoordinates', {
            longitude: coordinates.geonames[0].lng,
            latitude: coordinates.geonames[0].lat,   
            city: coordinates.geonames[0].name   
        })})
    .then(function(res){
            const lat = res[0].latitude
            const lon = res[0].longitude
            return {lat,lon}
        })

    .then(function({lat,lon}){
//use lon and lat from above and date to call getWeatherData function to get weather Data of a perticular Date
        getWeatherBitData(lat, lon, date)
    })

    .then(function(){
        getImage(city)
    })

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
            console.log("here is the Data")
            console.log(data)
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
        console.log(allData[0].press);
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
            alert("error1"+error);
    }}


 export {submit}