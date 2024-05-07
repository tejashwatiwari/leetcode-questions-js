/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    var count=0;
    var word1 = _.uniq(word.split("")).join("")
    for(let i=0;i<word1.length;i++){
        var x = word1[i].toLowerCase()
        var y = word1[i].toUpperCase()
        if(word.includes(x) && word.includes(y)){
            count++
        }
    }
    return count/2
};