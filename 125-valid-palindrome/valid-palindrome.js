/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    function replacesString(string){
        return string.replace(/[^A-Z0-9]+/gi, "").toLowerCase()
    }
   let str=replacesString(s)
   let l = 0, r = str.length-1
   while (l<=r){
       if (str[l]==str[r]) {
           l++
           r--
       }
       else return false
   }
   return true
};