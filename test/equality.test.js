// Common matchers

// Javascript has 3 different value comparison operations

// == is loosely equal (NaN == NaN -> False, -0 == +0 -> True)
// === is strictly equal (NaN === NaN -> False, -0 === +0 -> True)
// Object.is doesnt do type conversion (Object.is(NaN, NaN) -> True, Object.is(-0, +0) -> False)


// toBe() uses Object.is
// use it when you want to assert that it is literally the same instance of an object
describe("Test exact equality", () => {
    test("using toBe()", () => {
        expect(1).toBe(1);
        expect(true).toBe(true);
        expect('hello').toBe('hello');
        expect(undefined).toBe(undefined);
        expect(NaN).toBe(NaN);
        expect(0).toBe(0);

        let person1 = {
            name: "Mark",
            age: 4000
        };

        expect(person1).toBe(person1);

        let person2 = {
            name: "Mark",
            age: 4000
        };

        expect(person2).toBe(person2);
        expect(person1.name).toBe(person2.name);
        expect("Mark").toBe("Mark");

        expect(person1).not.toBe(person2);

        // Doesn't do type conversion
        expect(1).not.toBe("1");
        expect(-0).not.toBe(+0);
        expect({}).not.toBe({});

    });
});

// To Equal
// Use .toEqual to compare recursively all properties of object instances (uses Object.is)
describe("Test value of objects", () => {
    test("using toEqual()", () => {

        expect(1).toEqual(1);
        expect(true).toEqual(true);
        expect('hello').toEqual('hello');
        expect(undefined).toEqual(undefined);
        expect(NaN).toEqual(NaN);
        expect(0).toEqual(0);

        let person1 = {
            name: "Elon",
            age: 3
        };

        expect(person1).toEqual(person1);

        let person2 = {
            name: "Elon", 
            age: 3
        };

        expect(person1).toEqual(person2); // Passes because it recursively compares object properties
        // expect(person1).toBe(person2); // Fails because they're different object instances

        expect(1).not.toEqual("1");
        expect(-0).not.toEqual(+0);
        //expect(2+1).toEqual(3); true

        expect({}).not.toBe({}); // Different object instances so this passes
        expect({}).toEqual({}); // Passes because it recursively compares object properties
    })

});


