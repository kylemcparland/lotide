const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

// TEST CODE:
console.log("Even array:");
console.log(middle([1, 2, 3, "middleEven1/2", "middleEven2/2", 6, 7, 8]));
console.log("Uneven array:");
console.log(middle([1, 2, "middleOdd", 4, 5]));
console.log("Array is less than three:")
console.log(middle([1, 2]));
console.log("Array is empty:")
console.log(middle([]));

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2]), []);