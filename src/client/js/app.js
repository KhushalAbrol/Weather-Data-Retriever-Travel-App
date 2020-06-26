import {getCoordinates} from './coordinates'
import {getImage} from './pixabay'
import {getWeatherBitData} from './weatherbit'
import Loading from '../assets/loading.gif'
import notFound from '../assets/notFound.gif'

const geoNamesBaseURL = 'http://api.geonames.org/searchJSON?q=';
const geoNamesAPIKey = '&username=khushal_abrol'

const weatherBaseURL="https://api.weatherbit.io/v2.0/forecast/daily?"
const weatherAPIKey="75c3aa19fc1d4994816b265d6f274b57"

//On Submit Button click call submit function
document.getElementById('generate').addEventListener('click',submit);

function submit(event){
    event.preventDefault()
    console.log(Loading)
    
    loading()
    document.getElementById('img').src = Loading
    const city = document.getElementById('cityEntry').value
    const date = document.getElementById('dateEntry').value
    //check for empty field
    if(city == "" || date ==""){
        alert("You have to Enter City and Date!!")
        return
    }
    clearUI()
    const url = geoNamesBaseURL+city+geoNamesAPIKey
    //call getCoordinates() to get coordinates from API
    getCoordinates(url)
    //then store coordinated and post data to server
    .then((coordinates) => {
        if(coordinates.totalResultsCount==0)
            {
            document.getElementById('img').src= notFound
            alert("Invalid Location")
            clearUI(1);
            }
        return postData('/addCoordinates', {
            longitude: coordinates.geonames[0].lng,
            latitude: coordinates.geonames[0].lat,   
        })})
    .then(function(res){
            var index = res.length-1
            const lat = res[index].latitude
            const lon = res[index].longitude
            return {lat,lon}
        })
    .then(function({lat,lon}){
        const weatherURL = weatherBaseURL+"lat="+lat+"&lon="+lon+"&key="+weatherAPIKey
        //use lon and lat from above and date to call getWeatherData function to get weather Data of a perticular Date
        getWeatherBitData(weatherURL)
        .then(async (weatherData) => {
            var i = weatherData.data.map((element)=>element.valid_date).indexOf(date)
                if(i!=-1){
                    console.log(weatherData.data[i].valid_date+"if")
                    return await postData('/addWeather', {
                        maxTemp:weatherData.data[i].high_temp,
                        minTemp:weatherData.data[i].low_temp,
                        press:weatherData.data[i].pres,
                        snow:weatherData.data[i].snow_depth,
                        cloudes:weatherData.data[i].clouds,
                        wind:weatherData.data[i].wind_spd,
                        name:weatherData.city_name,                        
                        })}
                else{
                    console.log("Else")
                    return postData('/addWeather', {
                        maxTemp:"Weather Data Not Available!",
                        minTemp:"Weather Data Not Available!",
                        press:"Weather Data Not Available!",
                        snow:"Weather Data Not Available!",
                        cloudes:"Weather Data Not Available!",
                        wind:"Weather Data Not Available!",
                        name:"Weather Data Not Available!",    
              })}})
            .then(function(res){
                var index = res.length -1
                console.log("res",res)
                console.log(res[index].name)
                updateUI(res,index)
                return res[index].name
            })
            .then(function(res){
                console.log(res,"'''''''")
                getImage(res)
                .then(function(res){                  
                    const img = document.getElementById('img')
                    img.src= res.hits[Math.floor(Math.random()*10)].largeImageURL
                    img.alt=res.data.city_name 
                  /*   img.src = Loading */
    })})})}

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
            console.log("here is the location Data")
            console.log(data)
            return data
        }
        catch(error){
            alert("error"+error)
        }
    }

//updateUI function defination:
const updateUI = async(res,index) => {
    try{
        if(res[index].press=="Weather Data Not Available!")
        {
            document.getElementById('value').style.color ="red"
            document.getElementById('img').src= notFound  
        }
        else
            {document.getElementById('value').style.color ="royalblue"}
             const cityName = res[index].name
            //to use the last element stored in array we use index
            document.getElementById('city-name').innerHTML = res[index].name;
            document.getElementById('pressure').innerHTML = res[index].press;
            document.getElementById('temp-min').innerHTML = res[index].minTemp;
            document.getElementById('temp-max').innerHTML = res[index].maxTemp;
            document.getElementById('snow-depth').innerHTML = res[index].snow;
            document.getElementById('cloudes').innerHTML = res[index].cloudes;
            document.getElementById('wind-speed').innerHTML = res[index].wind;   
            document.getElementById('img').src=notFound
            console.log(cityName+"???")
         return{cityName}}
    catch(error){console.log("error1"+error)}}

function clearUI(a)
{
    document.getElementById('cityEntry').value="";
    
    document.getElementById('pressure').innerHTML = "";
    document.getElementById('temp-min').innerHTML = "";
    document.getElementById('temp-max').innerHTML = "";
    document.getElementById('snow-depth').innerHTML = "";
    document.getElementById('cloudes').innerHTML = "";
    document.getElementById('wind-speed').innerHTML = "";
}

function loading()
{
/*     const load ='Loading. Please wait...'
    document.getElementById('city').innerHTML = load ;
    document.getElementById('img').src = Loading
} */
}

 export {submit}
 export {updateUI}
 export {postData}