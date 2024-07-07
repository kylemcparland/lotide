const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(checkObj1, checkObj2) {
  const inspect = require("util").inspect;
  const areObjectsEqual = eqObjects(checkObj1, checkObj2);
  if (areObjectsEqual === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(checkObj1)} === ${inspect(checkObj2)}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${inspect(checkObj1)} !== ${inspect(checkObj2)}`);
  }
};

const myShirt = { colors: ["red", "blue"], size: "medium" };
const yourShirt = { size: "medium", colors: ["red", "blue"] };

assertObjectsEqual(myShirt, yourShirt);

module.exports = assertObjectsEqual;