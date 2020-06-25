//setting up a server
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());
app.use(express.static('dist'));

const port = 7000;
const server = app.listen(port, listening);

function listening(){
    console.log(`The server is running locally on port:${port}`);
};/* 
const projectData={};*/

var locationData = [];

//POST ROUTE => app.js post data here and the callback function stores it at /addCoordinates path
app.post('/addCoordinates', storeCoordinates)
function storeCoordinates(req, res){
    newEntry = {
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        city: req.body.city
    }
    locationData.push(newEntry)
    console.log("Location Coordinates Received!")
    res.send(locationData)
}

//GET ROUTE=> app.js get data from here
app.get('/getLocation', getLocationData)
function getLocationData(req, res){
    res.send(locationData)
    console.log("Location Coordinates Send!")
}


let weatherData = []

app.post('/addWeather', storeWeatherData)
function storeWeatherData(req, res){
    newWeatherEntry = {
    maxTemp:req.body.maxTemp,
    minTemp:req.body.minTemp,
    press:req.body.press,
    snow:req.body.snow,
    cloudes:req.body.cloudes,
    wind:req.body.wind,
    name:req.body.name
}
    weatherData.push(newWeatherEntry)
    console.log("Weather Data Received!")
    console.log("-_-'-_-'-_-'-_-'-_-'-_-'-_-'-_-'-_-'-_-'-_-'-_-'-_-'-_-'-_-'-_-'-_-'-_-'-_-'-_-'-_-")
    res.send(weatherData)
}

/* //GET ROUTE=> app.js get data from here
app.get('/getWeather', getWeatherData)
function getWeatherData(req, res){
    console.log(weatherData+"weatherData")
    res.send(weatherData)
} */
