//eqArrays initialization
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

//assertArraysEqual initialization
const assertArraysEqual = function(arr1, arr2) {
  let input = eqArrays(arr1, arr2);
  if (input === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(array) {
  let middleOfArr = [];
  if (array.length >= 3 && array.length % 2 === 0) {
    //console.log("Array has at least 3 variables and is an even number.");
    let middleVar = array.length / 2 - 1;
    middleOfArr.push(array[middleVar]);
    middleVar++;
    middleOfArr.push(array[middleVar]);
  } else if (array.length >= 3) {
    //console.log("Array has at least 3 variables and is an odd number.");
    let middleVar = Math.floor(array.length / 2);
    middleOfArr.push(array[middleVar]);
  }
  return middleOfArr;
};

//Test cases:
console.log("Even array:");
console.log(middle([1, 2, 3, "middleEven1/2", "middleEven2/2", 6, 7, 8]));
console.log("Uneven array:");
console.log(middle([1, 2, "middleOdd", 4, 5]));
console.log("Array is less than three:")
console.log(middle([1, 2]));
console.log("Array is empty:")
console.log(middle([]));

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2]), []);
