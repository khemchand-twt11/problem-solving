/*
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Examples:

Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11
*/

function pairWithTargetSum(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let currentSum = arr[start] + arr[end];
    if (currentSum === target) {
      return [start, end];
    } else if (currentSum < target) {
      start++;
    } else {
      end--;
    }
  }
  return [-1, -1];
}
module.exports = pairWithTargetSum;
