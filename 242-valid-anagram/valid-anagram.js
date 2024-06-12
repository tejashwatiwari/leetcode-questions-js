/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length!=t.length) return false;
    let stringS = s.split('').sort().join('');
    let stringT = t.split('').sort().join('');
    for(let i = 0;i<stringS.length;i++){
        if (stringS[i]!==stringT[i]) return false;
    }
    return true;

};