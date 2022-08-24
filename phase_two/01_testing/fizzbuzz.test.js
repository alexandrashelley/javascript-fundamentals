const fizzbuzz = require('./fizzbuzz.js');

describe('fizzbuzz', () => {
  it('returns Fizz if number is divisible by 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz')
  });
  it('returns Buzz if number is divisible by 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz')
  });
  it('returns number if number is isnt divisible by 3 or 5', () => {
    expect(fizzbuzz(8)).toBe(8)
  });
  it('returns FizzBuzz if number is divisible by 15', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz')
  });



});
