/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let maps = {};
    for (let i=0;i<s.length;i++){
        let values = maps[s[i]];
        if (values == undefined) maps[s[i]] = 1;
        else maps[s[i]] = values +1;
    }
    for (key in maps){
        for (let i=0;i<s.length;i++){
        if (maps[s[i]] === 1) return i;
        }
    return -1;
    }
};