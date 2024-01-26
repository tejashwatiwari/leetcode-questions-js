/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let count = 0, line = 0;
    for (let i = 0;i<s.length;i++){
        if (s[i]=='|') line++
        if(line%2==0){
            if (s[i]=='*') count++;
        }
    }
    return count;
};