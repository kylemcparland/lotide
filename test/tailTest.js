const assertEqual = require("../assertEqual");
const tail = require("../tail");

// TEST CODE
const original = [1, 2, 3, 4, 5, 6, 7];
const result = tail(original);
assertEqual(result.length, 6);
assertEqual(result[5], 7);
assertEqual(result[0], 1);
// Test case: Original array is unchanged.
assertEqual(original.length, 7);
console.log("Array with one element:", tail([1]));
console.log("Empty array:", tail([]));