const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2) {
  let input = eqArrays(arr1, arr2);
  if (input === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;