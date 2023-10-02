/*
Problem: Given a string, find the length of the longest substring which has no repeating characters.

Examples:

Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".

Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".

Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".
*/

function noReapeatSubstring(str) {
  let windowStart = 0;
  let maxLen = 0;
  let map = new Map();
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const char = str[windowEnd];
    // pushing characters to map
    map.set(char, (map.get(char) || 0) + 1);

    // If map size is not equal to the length of the substring that means we have repeating characters
    while (map.size !== windowEnd - windowStart + 1) {
      const charToRemove = str[windowStart];
      map.set(charToRemove, map.get(charToRemove) - 1);
      // If charToRemove frequency is zero then remove it from map
      if (map.get(charToRemove) === 0) map.delete(charToRemove);
      windowStart++;
    }

    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }
  return maxLen;
}

module.exports = noReapeatSubstring;
