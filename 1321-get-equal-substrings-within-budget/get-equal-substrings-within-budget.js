/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
      let maxLength = 0;
    let currentCost = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        currentCost += Math.abs(s[right].charCodeAt(0) - t[right].charCodeAt(0));

        while (currentCost > maxCost) {
            currentCost -= Math.abs(s[left].charCodeAt(0) - t[left].charCodeAt(0));
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};