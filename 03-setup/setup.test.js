let animals = [];


//too have beforeEach and afterAll only be used for one set of test,
//put them in the describe block
describe("animals array", () => {
    beforeAll(() => {
        console.log("before all");
        animals = ['elephant', 'zebra', 'bear', 'tiger'];
    })
    beforeEach(() => {
        console.log("before each");
        animals = ['elephant', 'zebra', 'bear', 'tiger'];
    })
    afterEach(() => {
        console.log("after each");
        animals = ['elephant', 'zebra', 'bear', 'tiger'];
    })
    afterAll(() => {
        console.log("after all");
        animals = ['elephant', 'zebra', 'bear', 'tiger'];
    })

    it("should add animal to end of the array", () => {
        animals.push("aligator");
        expect(animals[animals.length - 1]).toBe("aligator");
    })

    it("should add animal to beginnig of the array", () => {
        animals.unshift("monkey");
        expect(animals[0]).toBe("monkey");
    })

    it("should have initial length of 4", () => {
        expect(animals.length).toBe(4);
    })
})

//can test just one test in file by doing "it.only()"
describe("testing sum else", () => {
    it("true hould be thruthy", () => {
        expect(true).toBeTruthy();
    })
})
