const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#assert", () => {
  it("returns true for eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for eqArrays([1, 2, 3], [3, 2, 1])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("returns false for eqArrays([1, 2, 3, 4], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
  });
  it("returns true for eqArrays(['1', '2', '3'], ['1', '2', '3'])", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("returns false for eqArrays(['1', '2', '3'], ['1', '2', 3])", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => True. Arrays match exactly.
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => False. Arrays do not match.
// assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => False. Arrays do not match. Different lengths.
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => True. Arrays match exactly (strings).
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => False. Arrays do not match in type.