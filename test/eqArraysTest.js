const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// TEST CODE:
console.log("Arrays match exactly.", eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log("Arrays do not match.", eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log("Arrays do not match. Different lengths.", eqArrays([1, 2, 3, 4], [1, 2, 3])); // => false
console.log("Arrays match exactly (strings).", eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log("Arrays do not match in type.", eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
console.log("Assertion should pass:");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
console.log("Assertion should fail:");
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), true); // => should FAIL