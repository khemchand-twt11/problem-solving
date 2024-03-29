/*
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.

Examples:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].
*/

function removeDuplicates(arr) {
  let nonDuplicate = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[nonDuplicate - 1] !== arr[i]) {
      arr[nonDuplicate] = arr[i];
      nonDuplicate++;
    }
  }
  return nonDuplicate;
}

module.exports = removeDuplicates;
