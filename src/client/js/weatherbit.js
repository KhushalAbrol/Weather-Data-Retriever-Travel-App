function getWeatherBitData(){

    const weatherBaseURL="https://api.weatherbit.io/v2.0/forecast/daily?"
    const weatherAPIKey="75c3aa19fc1d4994816b265d6f274b57"
    const lon = document.getElementById("lon").value
    const lat = document.getElementById("lat").value
    const weatherURL = weatherBaseURL+"lat="+lat+"&lon="+lon+"&key="+weatherAPIKey
    getWeatherInfo(weatherURL)
    .then(function(weatherData){
    console.log("Here is the weather data :"+weatherData);
})}

const getWeatherInfo = async (url) =>{
    const res = await fetch(url)
    try{
        const weatherData = await res.json();
        console.log(weatherData);
        return weatherData;
    }
    catch(error){
        console.log("error",error);
    }
}
export {getWeatherBitData}