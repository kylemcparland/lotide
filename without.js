//eqArrays initialization
const eqArrays = function (arr1, arr2) {
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

//assertArraysEqual initialization
const assertArraysEqual = function (arr1, arr2) {
  let input = eqArrays(arr1, arr2);
  if (input === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//without initialization
const without = function (original, exclude) {
  let newArray = [];
  let matchFound = false;
  for (let i = 0; i < original.length; i++) {
    for (let x = 0; x < exclude.length; x++) {
      if (original[i] === exclude[x]) {
        // console.log("Found a match. Excluding: ", original[i]);
        matchFound = true;
      }
    }
    if (matchFound === false) {
      // console.log("No match found. Pushing: ", original[i]);
      newArray.push(original[i]);
    }
    matchFound = false;
  }
  return newArray;
};

//test cases
console.log("without returns [ 1, 2 ]:", (without([1, 2, 3], [3])));
console.log("without returns [ 1, 2, 3 ]:", (without([1, 2, 3], [4])));
console.log("without returns [ 2, 3, 6 ]:", (without([1, 2, 3, 4, 5, 6], [4, 1, 5])));

//assignment test cases
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
