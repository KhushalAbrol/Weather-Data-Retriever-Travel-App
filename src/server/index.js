//setting up a server
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());
app.use(express.static('dist'));

const port = 8000;
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
    console.log("Location Coordinates Received!"+locationData[0])
    res.send(locationData)
}

//GET ROUTE=> app.js get data from here
app.get('/getLocation', getLocationData)
function getLocationData(req, res){
    res.send(locationData)
    console.log("Location Coordinates Send!")
}


const weatherData = []

app.post('/addWeatherData', storeWeatherData)
function storeWeatherData(req, res){
    newWeatherEntry = {
    maxtemp:res.body.maxTemp,
    mintemp:res.body.minTemp,
    press:res.body.press,
    snow:res.body.snowDepth,
    cloudes:res.body.cloudes,
    wind:res.body.windSpeed
}
    weatherData.push(newWeatherEntry)
}

//GET ROUTE=> app.js get data from here
app.get('/getWeather', getWeatherData)
function getWeatherData(req, res){
    res.send(weatherData)
}

const imageData = {}
app.post('/addImagerData', storeImageData)
function storeImageData(req, res){
    imageData.image = req.body.imageURL
    console.log("Image Stored")
}