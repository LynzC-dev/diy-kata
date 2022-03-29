const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  // how do we create specs again???
  expect(booleanToWord(true)).toBe('Yes')
  expect(booleanToWord(false)).toBe('No')
});
