const fun = require("../../src/SlidingWindow/longestSubstringWithSameCharAfterReplacement");

test("string aabccbb with k=2  ", () => {
  expect(fun("aabccbb", 2)).toBe(5);
});

test("string  abccde with k = 1 ", () => {
  expect(fun("abccde", 1)).toBe(3);
});

test("string aaabbcefbd with k =2 ", () => {
  expect(fun("aacdaaaegfaaaaa", 2)).toBe(7);
});

test("string abcdefgh with k = 3", () => {
  expect(fun("abcddfgh", 3)).toBe(5);
});
