const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


console.log("Arrays match exactly.", eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log("Arrays do not match.", eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log("Arrays match exactly.", eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log("Arrays do not match in type.", eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

console.log("Assertion should pass:");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
console.log("Assertion should fail:");
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), true); // => should FAIL