import {updateUI} from '../client/js/app'
import {postData} from '../client/js/app'

/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });

test('updateUi Returns string',async () =>{
    expect(typeof (updateUI)).toBe("function")
});

test('function sends data', async () =>{
    expect(typeof postData).toBe('function')
})