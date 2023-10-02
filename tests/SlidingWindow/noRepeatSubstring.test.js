const fun = require("../../src/SlidingWindow/noRepeatSubstring");

test("string with ababab ", () => {
  expect(fun("ababab")).toBe(2);
});

test("string with abcdefgh ", () => {
  expect(fun("abcdefgh")).toBe(8);
});

test("string with aaabbcefbd ", () => {
  expect(fun("aaabbcefbd")).toBe(5);
});

test("string with abcdefgh ", () => {
  expect(fun("abacefgdbabla")).toBe(7);
});
