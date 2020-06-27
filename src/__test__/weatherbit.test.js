import {getWeatherBitData} from '../client/js/weatherbit'
const fetch = require('node-fetch');

 test('should return json', async() => {
     expect(typeof getWeatherBitData).toBe('function')
 }) 
 
 test('should return json', async() => {
    const res = await fetch('http://api.geonames.org/searchJSON?q=Delhi&username=khushal_abrol')
    res => expect('Content-Type',/json/)
})