const reverseStringExport = require("./reverseString")

function isPalindrome(word: string) {
return word.toLowerCase() === reverseStringExport(word).toLowerCase()
}


module.exports = isPalindrome;
