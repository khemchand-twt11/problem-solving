const fun = require("../../src/SlidingWindow/longestSubstringWithKDifferentCharacters");

test("string arbaaaa with k=2", () => {
  expect(fun("arbaaaa", 2)).toBe(5);
});

test("string amzrbadt with k=1", () => {
  expect(fun("amzrbadt", 2)).toBe(2);
});

test("string arbaaaa with k=2", () => {
  expect(fun("", 2)).toBe(0);
});

test("string atbraaabaaabbaa with k=2", () => {
  expect(fun("atbraaabaaabbaa", 2)).toBe(11);
});

test("string amarbcdaatbaabt with k=2", () => {
  expect(fun("amarbcdaatbaabt", 3)).toBe(8);
});

test("string aaaaaaaaaaaaa with k=2", () => {
  expect(fun("aaaaaaaaaaaaa", 5)).toBe(13);
});

test("string fntfntfntfnt with k=2", () => {
  expect(fun("arbaaaa", 1)).toBe(4);
});

test("string onetwothree with k=5", () => {
  expect(fun("onetwothree", 5)).toBe(7);
});
test("string rrrmtbsaaabssa with k=3", () => {
  expect(fun("rrrmtbsaaabssa", 3)).toBe(9);
});

test("string ftwnqarmarmarmarmbss with k=3", () => {
  expect(fun("ftwnqarmarmarmarmbss", 3)).toBe(12);
});

test("string aaabtwcbababababababaaaa with k=3", () => {
  expect(fun("aaabtwcbababababababaaaa", 2)).toBe(17);
});
