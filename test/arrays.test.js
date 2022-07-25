
const coloursList = [
    'violet',
    'pink',
    'blue',
    'green',
    'purple',
    'yellow'
];

describe('Check if an array or iterable contains and item using toContain', () => {
    test('the colours list has green in it', () => {
        expect(coloursList).toContain('green');
    })

    test("the colours list doesn't have red", () => {
        expect(coloursList).not.toContain("red");
    })

    test("the colours set doesn't have red", () => {
        expect(new Set(coloursList)).not.toContain("red");
    })
});

// expect.arrayContaining()

describe('arrayContaining', () => {
    test("check if array contains ['pink', 'blue']", () => {
        let expected = ['pink', 'blue']
        expect(coloursList).toEqual(expect.arrayContaining(expected));
    })
});