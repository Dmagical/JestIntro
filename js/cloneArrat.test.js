const cloneArray = require('./cloneArray');

test('properley clojnes array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).not.toBe(array)
    expect(cloneArray(array)).toEqual(array)

})