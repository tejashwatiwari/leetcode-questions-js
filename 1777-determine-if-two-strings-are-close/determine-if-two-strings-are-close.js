/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length!=word2.length) return false;
      let map1={}, map2={}
    for(let word of word1){
        if(map1[word]==undefined)map1[word]=1
        else map1[word]++
    }
     for(let char of word2){
        if(map2[char]==undefined)map2[char]=1
        else map2[char]++
    }
    let chars1 = Object.keys(map1).sort();
    let chars2 = Object.keys(map2).sort();
     if (chars1.join('') !== chars2.join(''))return false;
 
    let frequencies1 = Object.values(map1).sort();
    let frequencies2 = Object.values(map2).sort();

    return frequencies1.join('') === frequencies2.join('');
};