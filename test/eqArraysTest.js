const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// TEST CODE:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => True. Arrays match exactly.
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => False. Arrays do not match.
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => False. Arrays do not match. Different lengths.
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => True. Arrays match exactly (strings).
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => False. Arrays do not match in type.