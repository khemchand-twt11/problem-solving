const removeDuplicate = require("../../src/TwoPointers/removeDuplicates");

test("array with [1,2,5,7,9]  ", () => {
  const arr = [1, 2, 2, 2, 2, 3, 4, 4, 7, 9];
  const result = removeDuplicate(arr);
  expect(arr).toEqual([1, 2, 3, 4, 7, 9, 4, 4, 7, 9]);
  expect(result).toBe(6);
});

test("array with [1, 5, 6, 8, 9, 10, 11, 12, 12, 13, 13]", () => {
  const arr = [1, 5, 6, 8, 9, 10, 11, 12, 12, 13, 13];
  const result = removeDuplicate(arr);
  expect(arr).toEqual([1, 5, 6, 8, 9, 10, 11, 12, 13, 13, 13]);
  expect(result).toBe(9);
});

test("array with [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  ", () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const result = removeDuplicate(arr);
  expect(arr).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  expect(result).toBe(1);
});

test("array with [1, 3, 5, 6, 7, 8, 8, 8, 9, 9, 10, 12, 12]", () => {
  const arr = [1, 3, 5, 6, 7, 8, 8, 8, 9, 9, 10, 12, 12];
  const result = removeDuplicate(arr);
  expect(arr).toEqual([1, 3, 5, 6, 7, 8, 9, 10, 12, 9, 10, 12, 12]);
  expect(result).toBe(9);
});
