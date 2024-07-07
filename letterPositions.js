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

module.exports = letterPositions;