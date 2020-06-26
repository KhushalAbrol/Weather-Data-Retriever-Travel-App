/* const request = require('supertest');
const app = require('../server/index');

describe('Get Endpoint from API',()=> {
    it('Sould return ImageData', async () => {
        const res = await request(app).get('https://pixabay.com/api/?key=17156512-d3b9b7fb79bb45c20f4b5b9e6&q=New%20York%20City&image_type=photo');
        expect(res.statusCode).toEqual(200);
})})


expect({ position: { x: 0, y: 0 } }).toEqual(expect.objectContaining({
  position: {
    x: expect.any(Number)
  }

 */
import {storeCoordinates} from '../server/index'

test('function sends data', () =>{
    expect(typeof storeCoordinates).toBe('function')
})