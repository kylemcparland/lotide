const assertEqual = require("../assertEqual")

// TEST CODE:
assertEqual("Lighthouse Labs", "Bootcamp"); // => Fail. Different strings.
assertEqual(1, 1); // => Pass. Same number.
assertEqual(1, 2); // => Fail. Different numbers.
assertEqual("Lighthouse Labs", "Lighthouse Labs"); // => Pass. Same string.