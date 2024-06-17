//ASSERT EQUAL INITIALIZATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    //Currently item = "Karl" because we are on the first loop through allItems
    if (itemsToCount[item]) {
      //If... itemsToCount("Karl") is truthy... (the object is looped 
      //through looking for the key, if it exists, if the value is true...)
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
      //the if statements check if the key already exists within results,
      //which would cause it to increment by one. Otherwise, add the key and
      //initialize at a value of 1.
    }
  }
  return results;
};

//TEST CASES
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);