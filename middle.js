const middle = function(array) {
  let middleOfArr = [];
  if (array.length >= 3 && array.length % 2 === 0) {
    let middleVar = array.length / 2 - 1;
    middleOfArr.push(array[middleVar]);
    middleOfArr.push(array[middleVar + 1]);
  } else if (array.length >= 3) {
    let middleVar = Math.floor(array.length / 2);
    middleOfArr.push(array[middleVar]);
  }
  return middleOfArr;
};

module.exports = middle;