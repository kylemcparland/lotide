const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

//
const shirt1 = {colors: ["red", "blue"], size: "medium"};
const shirt2 = {size: "medium", colors: ["red", "blue"]};
const shirt3 = {colors: ["red", "blue"], size: "medium", sleeveLength: "long"};
const shirt4 = {size: "large", colors: ["yellow"]};
console.log("shirt1 =", shirt1);
console.log("shirt2 =", shirt2);
console.log("shirt3 =", shirt3);
console.log("shirt4 =", shirt4);
//

describe("#eqObjects", () => {
  it("returns true for eqObjects(shirt1, shirt2)", () => {
    assert.strictEqual(eqObjects(shirt1, shirt2), true);
  });
  it("returns true for eqObjects(shirt2, shirt2)", () => {
    assert.strictEqual(eqObjects(shirt2, shirt2), true);
  });
  it("returns false for eqObjects(shirt1, shirt3)", () => {
    assert.strictEqual(eqObjects(shirt1, shirt3), false);
  });
  it("returns false for eqObjects(shirt2, shirt4)", () => {
    assert.strictEqual(eqObjects(shirt2, shirt4), false);
  });
});


// assertEqual(eqObjects(shirt1, shirt2), true); // => true
// const longSleeveshirt1 = {
//   size: "medium",
//   colors: ["red", "blue"],
//   sleeveLength: "long",
// };
// assertEqual(eqObjects(shirt1, longSleeveshirt1), false); // => false
