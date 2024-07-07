// INITIALIZE assertArraysEqual
const assertArraysEqual = function(arr1, arr2) {
  let input = eqArrays(arr1, arr2);
  if (input === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// INITIALIZE eqArrays
const eqArrays = function(arr1, arr2) {
  if (arr1 === undefined || arr2 === undefined) {
    if (arr1 === arr2) {
      return true;
    } else {
      return false;
    }
  }
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

// INITIALIZE map
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// TEST CASES:
// #1:
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word => word[0]));
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// #2:
const results2 = map(words, (word => word.length));
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
// #3:
const results3 = map(words, (word => word[word.length - 1]));
assertArraysEqual(results3, ['d', 'l', 'o', 'r', 'm']);

module.exports = map;