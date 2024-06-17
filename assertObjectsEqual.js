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

// INITIALIZE eqObjects
const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let key of obj1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(checkObj1, checkObj2) {
  const inspect = require("util").inspect;
  const input = eqObjects(checkObj1, checkObj2);
  if (input === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(checkObj1)} === ${inspect(checkObj2)}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${inspect(checkObj1)} !== ${inspect(checkObj2)}`);
  }
};

const myShirt = { colors: ["red", "blue"], size: "medium" };
const yourShirt = { size: "medium", colors: ["red", "blue"] };

assertObjectsEqual(myShirt, yourShirt);