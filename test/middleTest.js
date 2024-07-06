const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

// TEST CODE:
assertArraysEqual(middle([1, 2, 3, "middleEven1/2", "middleEven2/2", 6, 7, 8]), ["middleEven1/2", "middleEven2/2"]); // => Pass. Even array.
assertArraysEqual(middle([1, 2, "middleOdd", 4, 5]), ["middleOdd"]); // => Pass. Odd array.
assertArraysEqual(middle([1, 2]), []); // => Pass. Array is 2 or fewer values. Returns empty array.
assertArraysEqual(middle([]), []); // => Pass. Array is empty. Returns empty array.