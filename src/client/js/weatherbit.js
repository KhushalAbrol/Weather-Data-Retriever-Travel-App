function getWeatherBitData(lat, lon, date){

    const weatherBaseURL="https://api.weatherbit.io/v2.0/forecast/daily?"
    const weatherAPIKey="75c3aa19fc1d4994816b265d6f274b57"
    const weatherURL = weatherBaseURL+"lat="+lat+"&lon="+lon+"&key="+weatherAPIKey

    //call getWeatherInfo to get weather information
    getWeatherInfo(weatherURL)
    //then print it on console for now...
    .then(function(weatherData){
        
    console.log("Here is the weather data :"+weatherData);
})}

const getWeatherInfo = async (url) =>{
    //fetch data from weatherbit API
    const res = await fetch(url)
    try{
        //store data in variable
        const weatherData = await res.json();
        console.log(weatherData)
        //then check the data for given date
        .then((weatherData) => {
            for(const i=0; i<16; i++){
                //when data matched post data to server
                if(weatherDate == data.data[i].valid_date)
                    postData('/addWeatherData', {
                        maxtemp:weatherData.data[i].high_temp,
                        mintemp:weatherData.data[i].low_temp,
                        press:weatherData.data[i].pres,
                        snow:weatherData.data[i].snow_depth,
                        cloudes:weatherData.data[i].clouds,
                        wind:weatherData.data[i].wind_spd
            })
        }
        //return weatherData;
    })}
    catch(error){
        console.log("error",error);
    }
}

module.exports = {getWeatherBitData}