/*

Problem: Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

Examples:
Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.


Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.
 */

function longestArrayWithOnesAfterReplacement(arr, k) {
  let windowStart = 0;
  let maxLen = 0;
  let map = new Map();
  let maxCountOnes = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    const value = arr[windowEnd];
    map.set(value, (map.get(value) || 0) + 1);
    if (map.get(0) > k) {
      const valueToRemove = arr[windowStart];
      map.set(valueToRemove, map.get(valueToRemove) - 1);
      windowStart++;
    }
    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }
  return maxLen;

  //     if (arr[windowEnd] === 1) {
  //       maxCountOnes += 1;
  //     }

  //     if (windowEnd - windowStart + 1 - maxCountOnes > k) {
  //       if (arr[windowStart] === 1) {
  //         maxCountOnes -= 1;
  //       }
  //       windowStart++;
  //     }

  //     maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  //   }
  //   return maxLen;
}

module.exports = longestArrayWithOnesAfterReplacement;
