//INITIALIZE assertEqual
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//INITIALIZE countLetters
const countLetters = function (sentence) {
  const numOfLetters = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (numOfLetters[sentence[i]]) {
        numOfLetters[sentence[i]] += 1;
      } else {
        numOfLetters[sentence[i]] = 1;
      }
    }
  }
  return numOfLetters;
}

let testSentence = countLetters("lighthouse in the house");

assertEqual(testSentence["h"], 4);
assertEqual(testSentence["e"], 3);
assertEqual(testSentence["z"], undefined);
assertEqual(testSentence[" "], undefined);