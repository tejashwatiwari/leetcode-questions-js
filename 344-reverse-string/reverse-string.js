/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
      let start = 0;
    end = s.length-1
    for (let i=0;i<s.length;i++){
        while (start <= end){
            let temp = s[start];
            s[start] = s[end] ;
            s[end]=temp;
            start++;
            end--;
        }
    }  
};