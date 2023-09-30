const smallestSubarrayWithGivenSum = require("./smallestSubarrayWithGivenSum");

describe("Return length of smallest subarray which is greater than or equal to S", () => {
  test("[1,-1,3,4,9,10,13]", () => {
    const arr = [1, -1, 3, 4, 9, 10, 13];
    expect(smallestSubarrayWithGivenSum(arr, 12)).toEqual(1);
  });

  test("[1, 1, 2, 2, 2, 1, 1, 1]", () => {
    const arr = [1, 1, 2, 2, 2, 1, 1, 1];
    expect(smallestSubarrayWithGivenSum(arr, 11)).toEqual(8);
  });

  test("[1,-1,3,4,9,10,13]", () => {
    const arr = [-1, 0, -1, 2, 0, 8, 1, 1];
    expect(smallestSubarrayWithGivenSum(arr, 17)).toEqual(0);
  });
});
