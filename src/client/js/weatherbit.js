const getWeatherBitData = async(url) => {
    const res = await fetch(url)
    try{
        const weatherData = await res.json();
        console.log(weatherData)
        return weatherData
    }
    catch(error){
        console.log("weatherbit.js"+error)
    }

}

module.exports = {getWeatherBitData}