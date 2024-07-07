const findKey = function(object, callback) {
  for (const name in object) {
    if (callback(object[name])) {
      return name;
    }
  }
};

module.exports = findKey;