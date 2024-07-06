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

//assertArraysEqual initialization
const assertArraysEqual = function (arr1, arr2) {
  let input = eqArrays(arr1, arr2);
  if (input === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//loop through the array, pushing each element to new array
//if... the variable is an array, it performs a second loop where it pushes each item inside that array into the new array

const flatten = function (array) {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatArray = flatArray.concat(array[i]);
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
//Check if array is flattened:
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);



////Two nested loop method:
// const flatten = function (array) {
//   let flatArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       for (let x = 0; x < array[i].length; x++) {
//         let nestedVar = array[i][x];
//         flatArray.push(nestedVar);
//       }
//     } else {
//       flatArray.push(array[i]);
//     }
//   }
//   return flatArray;
// };

module.exports = flatten;