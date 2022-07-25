const { functionThatThrowsError } = require('../src/exceptions');
// toThrow

describe('exceptions', () => {
    test('throws error as expected', () => {
        expect(() => functionThatThrowsError()).toThrow('something bad happened');

        expect(() => functionThatThrowsError()).toThrow(Error);

        expect(() => functionThatThrowsError()).toThrow(/bad/);

        expect(() => functionThatThrowsError('my message')).toThrow('my message');
    });
})