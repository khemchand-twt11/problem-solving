/*
  Problem: Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
*/

const arr = [1, 2, 3, 6, 7, 9];
const k = 3;
function maxSumSubarrayOfSizeK(arr, k) {
  let windowSum = 0;
  let max = -Infinity;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      console.log(windowSum);
      if (max < windowSum) {
        max = windowSum;
      }
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return max;
}
const result = maxSumSubarrayOfSizeK(arr, k);

console.log(result);
