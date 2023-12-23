const sumTest = require("../app/basicTestFiles/sum")

test("adds 1 + 2 = 3", () => {
  expect(sumTest(1, 2)).toBe(3)
})
