// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let headless = [];
  for (let i = 1; i < arr.length; i++) {
    headless.push(arr[i]);
  }
  return headless;
};

// TEST CODE
let original = [1, 2, 3, 4, 5, 6, 7];
const result = tail(original);
assertEqual(result.length, 6);
assertEqual(result[5], 7);
assertEqual(result[0], 3);
// Test case: Original array is unchanged.
assertEqual(original.length, 7);
// Test case: Array with one element as argument in tail.
console.log(tail([1]));
// Test case: Empty array as argument in tail.
console.log(tail([]));