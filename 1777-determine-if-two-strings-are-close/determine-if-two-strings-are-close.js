/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    let map1 = {}, map2 = {}
    for (let i = 0;i<word1.length;i++){
        let val = map1[word1[i]]
        if(val == undefined) map1[word1[i]] = 1
        else map1[word1[i]] = val + 1
    }
    for (let i = 0;i<word2.length;i++){
        let val = map2[word2[i]]
        if(val == undefined) map2[word2[i]] = 1
        else map2[word2[i]] = val + 1
    }
    let chars1 = Object.keys(map1).sort();
    let chars2 = Object.keys(map2).sort();
     if (chars1.join('') !== chars2.join(''))return false;
 
    let frequencies1 = Object.values(map1).sort();
    let frequencies2 = Object.values(map2).sort();

    return frequencies1.join('') === frequencies2.join('');
    
};