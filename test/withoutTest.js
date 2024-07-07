const assert = require("chai").assert;
const without = require("../without");

describe("#without", () => {
  it("returns [1, 2] for without([1, 2, 3], [3])", () => {
    assert.deepEqual(without([1, 2, 3], [3]), [1, 2]);
  });
  it("returns [1, 2, 3] for without([1, 2, 3], [4])", () => {
    assert.deepEqual(without([1, 2, 3], [4]), [1, 2, 3]);
  });
  it("returns [2, 3, 6] for without([1, 2, 3, 4, 5, 6], [4, 1, 5])", () => {
    assert.deepEqual(without([1, 2, 3, 4, 5, 6], [4, 1, 5]), [2, 3, 6]);
  });
  it("returns [] for without([], [])", () => {
    assert.deepEqual(without([], []), []);
  });
});

// //test cases
// console.log("without returns [ 1, 2 ]:", (without([1, 2, 3], [3])));
// console.log("without returns [ 1, 2, 3 ]:", (without([1, 2, 3], [4])));
// console.log("without returns [ 2, 3, 6 ]:", (without([1, 2, 3, 4, 5, 6], [4, 1, 5])));

// //assignment test cases
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);