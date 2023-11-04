/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let start = 0;
    let end = s.length-1
    let str = s.split('')
    let vow = ['a','e','i','o','u','A','E','I','O','U']
    while (start<=end){
        if (!vow.includes(s[start])){
            start++;
        } else if (!vow.includes(s[end])){
            end--;}
        else {
            let temp = str[start];
            str[start] = str[end];
            str[end] = temp;
            start++;
            end--;
            }
    }
    return str.join('');
};