/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let i = 0, j = s.length - 1;
    while (i < j && s[i] === s[j]) {
        let char = s[i];
        while (i <= j && s[i] === char)i++;
        while (i <= j && s[j] === char)j--;
    }
return j - i + 1;
};