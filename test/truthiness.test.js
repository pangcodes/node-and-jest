// Sometimes you want to distinguish between undefined, null and false/true

// toBeNull
// toBeUndefined
// toBeDefined
// toBeTruthy
// toBeFalsy

describe("Test null", () => {
    test("to be null", () => {
        expect(null).toBeNull();
        expect(1).not.toBeNull();
    });

    test("to be defined", () => {
        //let x = null;
        expect(null).toBeDefined();
        expect(undefined).not.toBeDefined();
        expect(undefined).toBeUndefined(); // same thing as the line above
    });

    test("to be falsy", () => {
        expect(null).toBeFalsy();
        expect(null).not.toBeTruthy();
    });

})