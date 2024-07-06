const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns ['even1/2', 'even2/2'] for [1, 2, 3, 'even1/2', 'even2/2', 6, 7, 8]", () => {
    assert.deepEqual(middle([1, 2, 3, "even1/2", "even2/2", 6, 7, 8]), ["even1/2", "even2/2"]);
  });
  it("returns ['odd'] for [1, 2, 'odd', 4, 5]", () => {
    assert.deepEqual(middle([1, 2, "odd", 4, 5]), ["odd"]);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
});


// const assertArraysEqual = require("../assertArraysEqual");
// const middle = require("../middle");

// // TEST CODE:
// assertArraysEqual(middle([1, 2, 3, "even1/2", "even2/2", 6, 7, 8]), ["even1/2", "even2/2"]); // => Pass. Even array.
// assertArraysEqual(middle([1, 2, "middleOdd", 4, 5]), ["middleOdd"]); // => Pass. Odd array.
// assertArraysEqual(middle([1, 2]), []); // => Pass. Array is 2 or fewer values. Returns empty array.
// assertArraysEqual(middle([]), []); // => Pass. Array is empty. Returns empty array.