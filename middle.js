const middle = function(array) {
  let middleOfArr = [];
  if (array.length <= 2) {
    return middleOfArr;
  }
  if (array.length % 2 === 0) {
    let middleVar = array.length / 2 - 1;
    middleOfArr.push(array[middleVar]);
    middleOfArr.push(array[middleVar + 1]);
  } else {
    let middleVar = Math.floor(array.length / 2);
    middleOfArr.push(array[middleVar]);
  }
  return middleOfArr;
};

module.exports = middle;