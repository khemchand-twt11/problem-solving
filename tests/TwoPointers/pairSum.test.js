const fun = require("../../src/TwoPointers/pairSum");

test("array with [1,2,5,7,9] with target = 13 ", () => {
  expect(fun([1, 2, 4, 7, 9], 13)).toEqual([2, 4]);
});

test("array with [1,3,5,8,9,10] with k = 9 ", () => {
  expect(fun([1, 3, 5, 8, 9, 10], 9)).toEqual([0, 3]);
});

test("array with [2,6,9,22,56,40,22] k=62 ", () => {
  expect(fun([2, 6, 9, 10, 21, 22, 40], 62)).toEqual([5, 6]);
});

test("array with [2, 6, 9, 22, 56, 40, 22] k = -78 ", () => {
  expect(fun([2, 6, 9, 22, 56, 40, 22], -78)).toEqual([-1, -1]);
});
