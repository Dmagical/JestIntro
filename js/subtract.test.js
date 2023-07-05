const subtract = require('./subtract');

test('propperly subtracts two numbers', () => {
    expect(subtract(1, 2)).toBe(-1)
})