/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0;
    // let r = s.length-1
    // while (s[r] == ' ') {
    //     r--
    // }
    // while (s[r]!== ' ') {
    //     if (s[r] === undefined) break
    //     count++ ;
    //     r--;
    // } 
    // return count;
        for(let i= s.length-1; i>=0; i--){
        if(s[i]!=' '){
            count++;
            if(i>0 && s[i-1] == ' '){
                break;
            }
        }
    }
    return count;
};