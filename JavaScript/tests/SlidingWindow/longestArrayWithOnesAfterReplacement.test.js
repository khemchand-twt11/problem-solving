const smallestSubarrayWithGivenSum = require("../../src/SlidingWindow/longestArrayWithOnesAfterReplacement");

describe("Return length of longest subarray with ones after replacement of atmost k zeroes", () => {
  test("array [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0] with k = 2", () => {
    const arr = [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0];
    expect(smallestSubarrayWithGivenSum(arr, 2)).toEqual(7);
  });

  test("array [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] with k = 3", () => {
    const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    expect(smallestSubarrayWithGivenSum(arr, 3)).toEqual(10);
  });

  test("array [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1] with k = 3", () => {
    const arr = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
    expect(smallestSubarrayWithGivenSum(arr, 3)).toEqual(7);
  });

  test("[1, 1, 1, 1, 1, 0, 1, 1, 1, 1]", () => {
    const arr = [1, 1, 1, 1, 1, 0, 1, 1, 1, 1];
    expect(smallestSubarrayWithGivenSum(arr, 1)).toEqual(10);
  });

  test("[0, 0, 0, 0, 0, 0, 0]", () => {
    const arr = [0, 0, 0, 0, 0, 0, 0];
    expect(smallestSubarrayWithGivenSum(arr, 1)).toEqual(1);
  });
});
