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

//INITIALIZE letterPositions
const letterPositions = function(inputString) {
  const results = {};
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] !== " ") {
      if (results[inputString[i]]) {
        results[inputString[i]].push(i);
      } else {
        results[inputString[i]] = [i];
      }
    }
  }
  return results;
};

const testSentence = letterPositions("lighthouse in the house");

assertArraysEqual(testSentence["i"], [1, 11]);
assertArraysEqual(testSentence["h"], [3, 5, 15, 18]);
assertArraysEqual(testSentence["z"], undefined);