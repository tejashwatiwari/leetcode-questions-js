/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0;
    let r = s.length-1
    while (s[r] == ' ') {
        r--
    }
    while (s[r]!== ' ') {
        if (s[r] === undefined) break
        count++ ;
        r--;
    } 
    return count;
};