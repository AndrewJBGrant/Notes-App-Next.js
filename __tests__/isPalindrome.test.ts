const isPalindromeTest = require("../app/basicTestFiles/isPalindrome");

test("HanNah returns true", () => {
expect(isPalindromeTest("HanNah")).toBe(true);
});

test("Andrew returns false", () => {
  expect(isPalindromeTest("Andrew")).toBe(false);
})
