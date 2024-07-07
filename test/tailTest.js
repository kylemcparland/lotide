const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
  it("returns [2] for [1, 2]", () => {
    assert.deepEqual(tail([1, 2]), [2]);
  });
  it("returns ['2', 3, '4'] for [1, '2', 3, '4']", () => {
    assert.deepEqual(tail([1, '2', 3, '4']), ['2', 3, '4']);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});


// const assertEqual = require("../assertEqual");
// const tail = require("../tail");

// // TEST CODE:
// const original = [1, 2, 3, 4, 5, 6, 7];
// const result = tail(original);

// assertEqual(result.length, 6); // => Pass. Length is 6.
// assertEqual(result[5], 7); // => Pass. 7 is in index 5.
// assertEqual(result[0], 1); // => Fail. 1 is not in index 0.
// assertEqual(original.length, 7); // => Pass. Length is 7.
// assertEqual(tail([1]), [1]); // => Fail. Array with one element returns empty array.