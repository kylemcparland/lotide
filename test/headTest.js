const assertEqual = require("../assertEqual");
const head = require("../head");

// TEST CODE:
assertEqual(head([5, 6, 7]), 5); // => Pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // => Pass
assertEqual(head([3]), 5); // => Fail
assertEqual(head([]), 5); // => Fail