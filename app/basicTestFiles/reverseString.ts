
function reverseString(word: string) {
  return word.split("").reverse().join("").replaceAll(",", "");
}

module.exports = reverseString;
