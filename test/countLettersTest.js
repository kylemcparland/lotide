const assert = require("chai").assert;
const countLetters = require("../countLetters");

describe("#countLetters", () => {
  it("returns {a: 1, b: 1, c: 1} for countLetters('abc')", () => {
    assert.deepEqual(countLetters("abc"), {a: 1, b: 1, c: 1});
  });
  it("returns {a: 3, b: 1} for countLetters('aaab')", () => {
    assert.deepEqual(countLetters("aaab"), {a: 3, b: 1});
  });
  it("returns {a: 1} for countLetters('a')", () => {
    assert.deepEqual(countLetters("a"), {a: 1});
  });
  it("returns {} for countLetters('')", () => {
    assert.deepEqual(countLetters(""), {});
  });
});

// assertEqual(testSentence["h"], 4);
// assertEqual(testSentence["e"], 3);
// assertEqual(testSentence["z"], undefined);
// assertEqual(testSentence[" "], undefined);