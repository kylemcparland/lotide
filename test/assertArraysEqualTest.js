const assertArraysEqual = require("../assertArraysEqual");

// TEST CODE:
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => Pass. Matching arrays.
assertArraysEqual([1, 2, 4], [1, 2, 3]); // => Fail. Non-matching arrays.
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); // => Fail. Arrays are different lengths.
assertArraysEqual([], [1, 2, 3]); // => Fail. Empty array.