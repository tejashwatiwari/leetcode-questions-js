/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
      let ans = 0, freq = {};
  
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
    if (freq[char] % 2 == 0) ans += 2;
  }
  return s.length > ans ? ans + 1 : ans;
};