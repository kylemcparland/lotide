const assertArraysEqual = function(arr1, arr2) {
  let input = eqArrays(arr1, arr2);
  if (input === true) {
    console.log(`✅✅✅ Assertion Passed: Arrays match`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: Arrays do not match`);
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

console.log("//Matching arrays = Assertion passed:");
assertArraysEqual([1, 2, 3], [1, 2, 3]);

console.log("//Non-matching arrays = Assertion failed:");
assertArraysEqual([1, 2, 4], [1, 2, 3]);

console.log("//Non-matching arrays (different lengths) = Assertion failed:");
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);