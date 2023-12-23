const shallowObjCloneTest = require("../app/basicTestFiles/shallowObjClone.ts");

test("Create a clone of the obj parameters", () => {
  const myObj = { person: "Dave Ghrol", number: 1}
  expect(shallowObjCloneTest(myObj)).toStrictEqual(myObj)
})


// https://jestjs.io/docs/api
