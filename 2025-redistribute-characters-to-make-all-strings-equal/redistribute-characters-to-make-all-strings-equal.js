/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    let maps = [];
    for (let i = 0 ; i< words.length;i++){
        for (let j = 0;j<words[i].length;j++){
        let val = maps[words[i][j]];
        if (val == undefined) maps[words[i][j]] = 1;
        else maps[words[i][j]] = val + 1;
        }
    }
    for (key of Object.keys(maps)){
        if (maps[key]% words.length != 0) return false;
    }
    return true;
};