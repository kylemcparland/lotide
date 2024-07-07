const assert = require("chai").assert;
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

console.log("firstNames =", firstNames);

describe("#countOnly", () => {
  it("returns {Jason: 1} for countOnly(firstNames, {Jason: true})", () => {
    assert.deepEqual(countOnly(firstNames, {Jason: true}), {Jason: 1});
  });
  it("returns {Fang: 2} for countOnly(firstNames, {Fang: true})", () => {
    assert.deepEqual(countOnly(firstNames, {Fang: true}), {Fang: 2});
  });
  it("returns {} for countOnly(firstNames, {Karima: true})", () => {
    assert.deepEqual(countOnly(firstNames, {Karima: true}), {});
  });
  it("returns {} for countOnly(firstNames, {})", () => {
    assert.deepEqual(countOnly(firstNames, {}), {});
  });
});


// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
