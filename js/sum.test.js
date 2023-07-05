const sum = require('./sum');

test('propperly adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
})