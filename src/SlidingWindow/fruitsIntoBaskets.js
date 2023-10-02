/*

Problem Statement:

Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.
You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
Write a function to return the maximum number of fruits in both the baskets.

Example 1 :
Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in
the other from the subarray ['C', 'A', 'C']

Example 2 :
Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in
the other basket.
This can be done if we start with the second letter:
['B', 'C', 'B', 'B', 'C']
*/

function fruitsIntoBaskets(arr) {
  let windowStart = 0;
  let maxFruits = 0;
  let map = new Map();
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    const char = arr[windowEnd];
    map.set(char, (map.get(char) || 0) + 1);

    while (map.size > 2) {
      const charToRemove = arr[windowStart];
      map.set(charToRemove, map.get(charToRemove) - 1);
      if (map.get(charToRemove) === 0) {
        map.delete(charToRemove);
      }
      windowStart++;
    }
    if (map.size === 2)
      maxFruits = Math.max(maxFruits, windowEnd - windowStart + 1);
  }
  return maxFruits;
}

/*
Time Complexity: O(N+N);  for iterating through array and processing each element only once
Space Complexity: O(1)
*/

module.exports = fruitsIntoBaskets;
