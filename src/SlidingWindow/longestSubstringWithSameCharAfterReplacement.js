/*
Problem: You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.


Examples:

Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".

Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".

Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
*/

function longestSubstringWithSameCharAfterReplacement(str, k) {
  let windowStart = 0;
  let maxLen = 0;
  let map = new Map();

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const char = str[windowEnd];
    map.set(char, (map.get(char) || 0) + 1);
    while (map.size - k > 1) {
      const charToRemove = str[windowStart];
      map.set(charToRemove, map.get(charToRemove) - 1);
      if (map.get(charToRemove) === 0) map.delete(charToRemove);
      windowStart++;
    }

    maxLen = Math.max(windowEnd - windowStart + 1);
  }
  return maxLen;
}
module.exports = longestSubstringWithSameCharAfterReplacement;
