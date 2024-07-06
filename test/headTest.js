const assertEqual = require("../assertEqual");
const head = require("../head");

// TEST CODE:
assertEqual(head([5, 6, 7]), 5); // => Pass. 5 is the first value.
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // => Pass. "Hello" is the first value.
assertEqual(head([3]), 5); // => Fail. 5 is not the first value.
assertEqual(head([]), 5); // => Fail. 5 is not the first value.