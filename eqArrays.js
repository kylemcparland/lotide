const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// INITIALIZE eqArrays
const eqArrays = function(arr1, arr2) {
  //check if either array is undefined
  if (arr1 === undefined || arr2 === undefined) {
    if (arr1 === arr2) {
      return true;
    } else {
      return false;
    }
  }
  //check if array lengths do not match
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


console.log("Arrays match exactly.", eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log("Arrays do not match.", eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log("Arrays do not match. Different lengths.", eqArrays([1, 2, 3, 4], [1, 2, 3])); // => false

console.log("Arrays match exactly.", eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log("Arrays do not match in type.", eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

console.log("Assertion should pass:");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
console.log("Assertion should fail:");
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), true); // => should FAIL