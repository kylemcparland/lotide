const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

//
const tvShows = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
console.log("tvShows =", tvShows);
//

describe("#findKeyByValue", () => {
  it("returns 'drama' for findKeyByValue(tvShows, 'The Wire')", () => {
    assert.strictEqual(findKeyByValue(tvShows, 'The Wire'), "drama");
  });
  it("returns 'comedy' for findKeyByValue(tvShows, 'Brooklyn Nine-Nine')", () => {
    assert.strictEqual(findKeyByValue(tvShows, 'Brooklyn Nine-Nine'), "comedy");
  });
  it("returns undefined for findKeyByValue(tvShows, 'The Simpsons')", () => {
    assert.strictEqual(findKeyByValue(tvShows, 'The Simpsons'), undefined);
  });
  it("returns undefined for findKeyByValue(tvShows, '')", () => {
    assert.strictEqual(findKeyByValue(tvShows, ''), undefined);
  });
});


// console.log("Assertion will pass. The Wire is found under \"drama\"");
// assertEqual(findKeyByValue(tvShows, "The Wire"), "drama");
// console.log("Assertion will pass. Value not found and returned as undefined");
// assertEqual(findKeyByValue(tvShows, "That '70's Show"), undefined);
// console.log("Assertion will fail. The Expanse indeed appears in the object");
// assertEqual(findKeyByValue(tvShows, "The Expanse"), undefined);
// console.log("Assertion will pass. Blank string returns as undefined.");
// assertEqual(findKeyByValue(tvShows, ""), undefined);