const { fizzBuzz } = require('../src/fizzbuzz');
// Fizz Buzz
// Write a program that prints the numbers from 1 to 100
// For multiples of 3 print 'Fizz', for multiples of 5 print 'Buzz'
// For numbers which are multiples of both 3 and 5 print 'FizzBuzz'.


describe('fizzbuzz', () => {
    test('return "FizzBuzz" for multiples of 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
    });

    test('return "Fizz" for multiples of 3', () => {
        expect(fizzBuzz(6)).toBe('Fizz');
        expect(fizzBuzz(99)).toBe('Fizz');
    });

    test('return "Buzz" for multiples of 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(40)).toBe('Buzz');
    });

    test('returns the number for multiples of neither 3 or 5', () => {
        expect(fizzBuzz(1)).toBe(1);
        expect(fizzBuzz(7)).toBe(7);
    });
});