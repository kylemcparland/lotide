// INITIALIZE assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// INITIALIZE findKeyByValue
const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {
    if (object[keys[i]] === value) {
      return keys[i];
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

console.log("Assertion will pass. The Wire is found under \"drama\"");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
console.log("Assertion will pass. Value not found and returned as undefined");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70's Show"), undefined);
console.log("Assertion will fail. The Expanse indeed appears in the object");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), undefined);
console.log("Assertion will pass. Blank string returns as undefined.");
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);