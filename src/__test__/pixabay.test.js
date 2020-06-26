/* const request = require('supertest');
const app = require('./index');

describe('GET endpoints', () => {
  it('should get the weather forecast', async () => {
    const res = await request(app).get(
      '/darkSky?latitude=-33.923189097929544&longitude=150.9193301849991&time=1577232000'
    );

    expect(res.statusCode).toEqual(200);
  })});


  expect({ position: { x: 0, y: 0 } }).toEqual(expect.objectContaining({
    position: {
      x: expect.any(Number)
    } */