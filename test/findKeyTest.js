const assert = require("chai").assert;
const findKey = require("../findKey");

//
const data = {
  elBulli: {stars: 3},
  akaleri: {stars: 2},
  noma: {stars: 4}
};
console.log("data = ", data);
//

describe("#findKey", () => {
  it("returns 'noma' for findKey(data, x => x.stars === 4)", () => {
    assert.strictEqual(findKey(data, x => x.stars === 4), "noma");
  });
  it("returns 'elBulli' for findKey(data, x => x.stars > 1)", () => {
    assert.strictEqual(findKey(data, x => x.stars > 1), "elBulli");
  });
  it("returns undefined for findKey(data, x => x.stars === 5)", () => {
    assert.strictEqual(findKey(data, x => x.stars === 5), undefined);
  });
});


// const result1 = findKey(
//   {
//     "Blue Hill": { stars: 1 },
//     Akaleri: { stars: 3 },
//     noma: { stars: 2 },
//     elBulli: { stars: 3 },
//     Ora: { stars: 2 },
//     Akelarre: { stars: 3 },
//   },
//   (x) => x.stars === 2
// ); // => "noma"

// assertEqual(result1, "noma");

// // #2:
// const result2 = findKey(
//   {
//     "Jason Alexander": { genre: "ambient"},
//     "Software": { genre: "ambient" },
//     "Rococo Rot": { genre: "post-rock"}
//   },
//   (x) => x.genre !== "ambient"
// ); // => "Rococo Rot"

// assertEqual(result2, "Rococo Rot");