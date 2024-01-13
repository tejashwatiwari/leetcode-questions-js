/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    let l = r = 0;
    let mid = s.length/2
    for (let i = 0;i<mid;i++){
        if (vowels.includes(s[i])) l++;
    }
    for (let i=mid;i<s.length;i++){
        if (vowels.includes(s[i])) r++;
    }
    if (l == r) return true;
    else return false
};