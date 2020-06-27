import {storeCoordinates} from '../server/index'

test('function sends data', () =>{
    expect(typeof storeCoordinates).toBe('function')
})

const request = require('supertest');


describe('The page should be running', () => {
    test('Page resonse successfully.', async () => {
        const response = await request('http://localhost:7000').get('/');
        expect(response.statusCode).toBe(200);
    });
});