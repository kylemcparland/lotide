const without = function(original, exclude) {
  let newArray = [];
  let matchFound = false;
  for (let i = 0; i < original.length; i++) {
    for (let x = 0; x < exclude.length; x++) {
      if (original[i] === exclude[x]) {
        matchFound = true;
        break;
      }
    }
    if (!matchFound) {
      newArray.push(original[i]);
    }
    matchFound = false;
  }
  return newArray;
};

module.exports = without;