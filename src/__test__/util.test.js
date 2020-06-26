import  { sum } from '../client/js/util'
import  { validateString } from '../client/js/util'
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('validate strings', () => {
  expect(validateString("")).toBe(false);
  expect(validateString("Hello")).toBe(true);
});
