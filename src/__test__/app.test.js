import {updateUI} from '../client/js/app'
import {postData} from '../client/js/app'


test('updateUi Returns string',async () =>{
    expect(typeof (updateUI)).toBe("function")
});

test('function sends data', async () =>{
    expect(typeof postData).toBe('function')
})