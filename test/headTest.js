const assert = require("chai").assert;
const head = require("../head");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
});


// const assertEqual = require("../assertEqual");
// const head = require("../head");

// // TEST CODE:
// assertEqual(head([5, 6, 7]), 5); // => Pass. 5 is the first value.
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // => Pass. "Hello" is the first value.
// assertEqual(head([3]), 5); // => Fail. 5 is not the first value.
// assertEqual(head([]), 5); // => Fail. 5 is not the first value.