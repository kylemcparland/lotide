const flatten = function(array) {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatArray = flatArray.concat(array[i]);
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
};

module.exports = flatten;

////Two nested loop method:
// const flatten = function (array) {
//   let flatArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       for (let x = 0; x < array[i].length; x++) {
//         let nestedVar = array[i][x];
//         flatArray.push(nestedVar);
//       }
//     } else {
//       flatArray.push(array[i]);
//     }
//   }
//   return flatArray;
// };