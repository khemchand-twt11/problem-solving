/*

Given a string, find the length of the longest substring in it with no more than K distinct characters.

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more
than '2' distinct characters is "araa".


Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more
than '1' distinct characters is "aa".

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more
than '3' distinct characters are "cbbeb" & "bbebi".
*/

function longestSubstringWithKDistinct(str, k) {
  let maxlen = -Infinity;
  let map = new Map();
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    map.set(str[windowEnd], (map.get(str[windowEnd]) || 0) + 1);

    while (map.size > k) {
      map.set(str[windowStart], map.get(str[windowStart]) - 1);
      if (map.get(str[windowStart]) === 0) {
        map.delete(str[windowStart]);
      }
      windowStart++;
    }

    // No more than k distint characters

    maxlen = Math.max(maxlen, windowEnd - windowStart + 1);
  }
  return maxlen === -Infinity ? 0 : maxlen;
}

module.exports = longestSubstringWithKDistinct;
