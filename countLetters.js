const countLetters = function(sentence) {
  const numOfLetters = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (numOfLetters[letter]) {
        numOfLetters[letter] += 1;
      } else {
        numOfLetters[letter] = 1;
      }
    }
  }
  return numOfLetters;
};

module.exports = countLetters;