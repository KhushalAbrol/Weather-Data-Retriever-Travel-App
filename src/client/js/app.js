import {getCoordinates} from './coordinates'
import {getImage} from './pixabay'
import {getWeatherBitData} from './weatherbit'


const geoNamesBaseURL = 'http://api.geonames.org/searchJSON?q=';
const geoNamesAPIKey = '&username=khushal_abrol'

const weatherBaseURL="https://api.weatherbit.io/v2.0/forecast/daily?"
const weatherAPIKey="75c3aa19fc1d4994816b265d6f274b57"


//On Submit Button click call submit function
document.getElementById('generate').addEventListener('click',submit);

function submit(event){
    const city = document.getElementById('city').value
    const date = document.getElementById('date').value
    if(city == "" || date ==""){
        alert("You have to Enter City and Date!!")
        return
    }
    const expression =/^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/
    if(!(expression.test(date))){
        alert("Please Enter Date in correct Format!!")
        document.getElementById('date').value=""
        clearUI();
        return
    }
    const url = geoNamesBaseURL+city+geoNamesAPIKey
    event.preventDefault()
    console.log(url)
    console.log("submit works!!!")
    //call getCoordinates() to get coordinates from API
    getCoordinates(url)
    //then store coordinated and post data to server
    .then((coordinates) => {
        if(coordinates.totalResultsCount==0)
        {alert("Invalid Location")
        document.getElementById('city').value=""
        clearUI();
        }
        return postData('/addCoordinates', {
            longitude: coordinates.geonames[0].lng,
            latitude: coordinates.geonames[0].lat,   
           /*  city: coordinates.geonames[0].name    */
        })})
    .then(function(res){
           //to use the last element stored in array we use index:j
            var j = res.length-1
      /*       const name = res[j].city */
            const lat = res[j].latitude
            const lon = res[j].longitude
            return {lat,lon}

        })

    .then(function({lat,lon}){
        const weatherURL = weatherBaseURL+"lat="+lat+"&lon="+lon+"&key="+weatherAPIKey
//use lon and lat from above and date to call getWeatherData function to get weather Data of a perticular Date
        getWeatherBitData(weatherURL)
        .then((weatherData) => {
            for(var i=0; i<16;i++){
                if(weatherData.data[i].valid_date==date){
                    console.log(weatherData.data[i].valid_date+"if")
                    return postData('/addWeather', {
                        maxTemp:weatherData.data[i].high_temp,
                        minTemp:weatherData.data[i].low_temp,
                        press:weatherData.data[i].pres,
                        snow:weatherData.data[i].snow_depth,
                        cloudes:weatherData.data[i].clouds,
                        wind:weatherData.data[i].wind_spd,
                        name:weatherData.city_name
                        })}
                    /*     else{
                            console.log("Else")
                            return postData('/addWeather', {
                                maxTemp:"Record Not Found!",
                                minTemp:"Record Not Found!",
                                press:"Record Not Found!",
                                snow:"Record Not Found!",
                                cloudes:"Record Not Found!",
                                wind:"Record Not Found!",
                                name:"Record Not Found!",
            
              })} */ }
            
})
            .then(function(res){
                console.log("res"+res)
                console.log(res.name)
                updateUI(res)
            })
            
    })  

    .then(function(){
        getImage(city)
        .then(function(res){
            console.log(res.hits[0].largeImageURL)
            
            const img = document.getElementById('img')
            img.src= res.hits[0].largeImageURL
            /* img.setAttribute("style", "height:100px; width: 100px;"); */
           /*  document.getElementById('image').setAttribute("src",) */
            document.getElementById('image').appendChild(img)
        }
        )
    })

}

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
  const updateUI = async(res) => {
    try{
        var index = res.length-1 
        if(res[index].press=="Record Not Found!")
        {document.getElementById('value').style.color ="red"}
        else
        {document.getElementById('value').style.color ="royalblue"}
        console.log("updateUI working")
        //to use the last element stored in array we use index
        
        document.getElementById('pressure').innerHTML = res[index].press;
        document.getElementById('temp-min').innerHTML = res[index].minTemp;
        document.getElementById('temp-max').innerHTML = res[index].maxTemp;
        document.getElementById('snow-depth').innerHTML = res[index].snow;
        document.getElementById('cloudes').innerHTML = res[index].cloudes;
        document.getElementById('wind-speed').innerHTML = res[index].wind;
        document.getElementById('city').innerHTML = res[index].name;
        // console.log(allData);
    }
    catch(error){
            console.log("error1"+error);
    }}

function clearUI()
{
    document.getElementById('pressure').innerHTML = "";
    document.getElementById('temp-min').innerHTML = "";
    document.getElementById('temp-max').innerHTML = "";
    document.getElementById('snow-depth').innerHTML = "";
    document.getElementById('cloudes').innerHTML = "";
    document.getElementById('wind-speed').innerHTML = "";
}


 export {submit}