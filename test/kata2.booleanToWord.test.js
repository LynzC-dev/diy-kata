const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  // how do we create specs again???
  it("returns Yes or No ", () => {
  expect(booleanToWord(true)).toBe('Yes');
  expect(booleanToWord(false)).toBe('No');
});
});
