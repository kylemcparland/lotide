const assertEqual = require("../assertEqual");
const tail = require("../tail");

// TEST CODE:
const original = [1, 2, 3, 4, 5, 6, 7];
const result = tail(original);

assertEqual(result.length, 6); // => Pass
assertEqual(result[5], 7); // => Pass
assertEqual(result[0], 1); // => Fail
assertEqual(original.length, 7); // => Pass
console.log("Array with one element returns empty:", tail([1]));
console.log("Empty array returns empty:", tail([]));