// toMatch
// not.toMatch

describe("Test string matches a regular expression", () => {
    test('there is no "word" in hello world', () => {
        expect('hello world').not.toMatch(/word/);
    })

    test('there is "world" in hello world', () => {
        expect('hello world').toMatch(/world/);
    })
});