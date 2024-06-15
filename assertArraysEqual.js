const assertArraysEqual = function(arr1, arr2, expected) {
  let actual = eqArrays(arr1, arr2);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

console.log("//Matching arrays + true = Assertion passed:");
assertArraysEqual([1, 2, 3], [1, 2, 3], true);

console.log("//Matching arrays + false = Assertion failed:");
assertArraysEqual([1, 2, 3], [1, 2, 3], false);

console.log("//Non-matching arrays + false = Assertion passed:");
assertArraysEqual([1, 2, 4], [1, 2, 3], false);

console.log("//Non-matching arrays + true = Assertion failed:");
assertArraysEqual([1, 2, 4], [1, 2, 3], true);

console.log("//Non-matching arrays (different lengths) + false = Assertion passed:");
assertArraysEqual([1, 2, 3, 4], [1, 2, 3], false);

console.log("//Non-matching arrays (different lengths) + true = Assertion failed:");
assertArraysEqual([1, 2, 3, 4], [1, 2, 3], true);