/*
Problem: Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.


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
  let maxRepeatingCharCount = 0;
  let map = new Map();

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const char = str[windowEnd];
    map.set(char, (map.get(char) || 0) + 1);
    maxRepeatingCharCount = Math.max(maxRepeatingCharCount, map.get(char));
    if (windowEnd - windowStart + 1 - maxRepeatingCharCount > k) {
      const charToRemove = str[windowStart];
      map.set(charToRemove, map.get(charToRemove) - 1);
      windowStart++;
    }

    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }
  return maxLen;
}
module.exports = longestSubstringWithSameCharAfterReplacement;
