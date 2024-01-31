/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let count = 0, vari = 0
    for (let i = 0;i<s.length;i++){
        if (s[i]=='[') count++
        else if (count == 0) {
            vari++
            count++
        }
        else count--
    } 
    return vari
};