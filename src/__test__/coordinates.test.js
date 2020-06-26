import {getCoordinates} from '../client/js/coordinates'
const obj =  { lat:'28.65195' }
test('coordinate must be object', async()=>{
    expect(getCoordinates('http://api.geonames.org/searchJSON?q=delhi&username=khushal_abrol')).toBe(obj)
})

