

describe("Ways to compare numbers", () => {
    test("one plus one", () => {
        const value = 1 + 1; // 2
        expect(value).toBeGreaterThan(1); // value > 1
        expect(value).toBeGreaterThanOrEqual(2); // value >= 1
        expect(value).toBeLessThan(100); // value < 100
        expect(value).toBeLessThanOrEqual(2); // value <= 2

        // These are the same for numbers
        expect(value).toBe(2);
        expect(value).toEqual(2);
        // expect(value).toBeEqual(2); // Not in the docs
    });
})

describe("adding floating point numbers (decimal places)", () => {
    test("0.2 + 0.1", () => {
        const value = 0.2 + 0.1;
        expect(value).not.toBe(0.3); // 0.30000000000000004

        expect(value).toBeCloseTo(0.3); // By default it will check 2 decimal places
        expect(value).toBeCloseTo(0.3, 15); 
        // expect(value).toBeCloseTo(0.3, 16);
    })
});