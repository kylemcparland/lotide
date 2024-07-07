const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {
  it("returns [1, 2, 3] for takeUntil([1, 2, 3, -4], x => x < 0)", () => {
    assert.deepEqual(takeUntil([1, 2, 3, -4], x => x < 0), [1, 2, 3]);
  });
  it("returns ['My', 'Name'] for takeUntil(['My', 'Name', '?', 'Kyle'], x => x === '?')", () => {
    assert.deepEqual(takeUntil(['My', 'Name', '?', 'Kyle'], x => x === '?'), ['My', 'Name']);
  });
  it("returns ['Call', 'Me'] for takeUntil(['Call', 'Me', 2, 'Kyle'], x => typeof x === 'number')", () => {
    assert.deepEqual(takeUntil(['Call', 'Me', 2, 'Kyle'], x => typeof x === 'number'), ['Call', 'Me']);
  });
});

// // TEST CASES:
// // #1:
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);

// console.log('---');

// // #2:
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

// console.log('---');

// // #3:
// const data3 = ["My", "Name", "Is", "Kyle", 2, "McParland"];
// const results3 = takeUntil(data3, x => typeof x === "number");
// assertArraysEqual(results3, ["My", "Name", "Is", "Kyle"]);