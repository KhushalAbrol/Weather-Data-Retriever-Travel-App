# Travel App

## Overview

This app is a single page web application based on NodeJS as server side language. This Webpage a basically use to fetch the weather forcast of a place where you want to travel. This website data from three different APIs. Which are [Geonames](https://www.geonames.org/), [Weatherbit](https://www.weatherbit.io/api), and [Pixabay](https://pixabay.com/).

### 1.WeatherBit API:
This API Return the weather information of a place by it coordinates (longitude, latitude).

### 2.Geonames API:
This API returns the coordinates of a location by its name.

### 3.Pixabay API:
This API is used to take the picture of the Location.

## Run the application
To Run this project you need to follow following steps:

1. **Pre-requisite** : 
Install [node.js](https://nodejs.org/)

2. Clone this project file

3. Unzip the project fi;e.

3. install the dependencies
```
npm install
```
4. Run build for the project using the cmd in respective directory:
  To build project in production mode
```
npm run build-prod
```
  To run project in development mode.
```
npm run build-dev
```

5. Start the server.
```
npm start
```

6. View the URL **http://localhost:7000/** in browser.

7. Run the testing.
```
npm run test.
```
## Tools

This Project uses (Webpack)[webpack.js.org] and it contains:

- Webpack Plugins
- Webpack Loaders
- Webpack Modes

### Additional Feature:
You can also print the data displayed on the screen. This function is performed by printPDF function. 
