const tail = function(arr) {
  let headless = [];
  for (let i = 1; i < arr.length; i++) {
    headless.push(arr[i]);
  }
  return headless;
};

module.exports = tail;