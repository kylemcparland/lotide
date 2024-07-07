const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("returns {a: [0], b: [1], c: [2]} for letterPositions('abc')", () => {
    assert.deepEqual(letterPositions('abc'), {a: [ 0 ], b: [ 1 ], c: [ 2 ]});
  });
  it("returns {a: [0, 1, 2, 3]} for letterPositions('aaaa')", () => {
    assert.deepEqual(letterPositions('aaaa'), {a: [0, 1, 2, 3]});
  });
  it("returns {a: [0]} for letterPositions('a')", () => {
    assert.deepEqual(letterPositions('a'), {a: [ 0 ]});
  });
  it("returns {} for letterPositions('')", () => {
    assert.deepEqual(letterPositions(''), {});
  });
});


// assertArraysEqual(testSentence["i"], [1, 11]);
// assertArraysEqual(testSentence["h"], [3, 5, 15, 18]);
// assertArraysEqual(testSentence["z"], undefined);