/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels=['a','e','i','o','u']
    let maxCount=Number.MIN_SAFE_INTEGER, start=count=0;

    for(let i=0; i<s.length; i++){
        if(vowels.includes(s[i])) count++
        if(i-start+1>k){
            if(vowels.includes(s[start]))count--
            start++
        }
        maxCount=Math.max(maxCount,count)
    }
   return maxCount 
};
