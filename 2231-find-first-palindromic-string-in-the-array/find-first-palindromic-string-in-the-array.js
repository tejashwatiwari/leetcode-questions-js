/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let i = 0;i<words.length;i++){
        let str = words[i]
        let start = 0, end = str.length-1
        while (start<=end){
            if (str[start]!=str[end]) break
            start++
            end--
        }
        if (start > end) return str
    }
    return ""
};