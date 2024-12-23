/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const m = s.length;
  const n = p.length;

  // Create a DP table to store results of subproblems
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

  // Empty string matches empty pattern
  dp[0][0] = true;

  // Handle patterns starting with '*'
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2];
    }
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2]; // Match zero occurrences of the preceding element
        if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
          dp[i][j] = dp[i][j] || dp[i - 1][j]; // Match one or more occurrences
        }
      } else {
        dp[i][j] = false;
      }
    }
  }

  return dp[m][n];
};