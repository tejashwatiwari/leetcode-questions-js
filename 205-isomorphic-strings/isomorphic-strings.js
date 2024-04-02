/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    if (s.length!=t.length) return false
    let sToTMap = {}, tToSMap = {};
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        
        if (sToTMap[charS] === undefined && tToSMap[charT] === undefined) {
            sToTMap[charS] = charT;
            tToSMap[charT] = charS;
        } else if (sToTMap[charS] !== charT || tToSMap[charT] !== charS) {
            return false;
        }
    }
    
    return true

};