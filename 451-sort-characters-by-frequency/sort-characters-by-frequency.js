/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = {}, blankArr = []
    for (let i = 0;i<s.length;i++){
        let val = map[s[i]]
        if (val == undefined) map[s[i]] = 1
        else map[s[i]] = val + 1
    }
    let finalArr = Object.keys(map);
    // finalArr.sort((a, b) => b - a);
    finalArr.sort((a, b) => map[b] - map[a]);

        console.log(finalArr)

    let finalStr = ''
    for (let char of finalArr) {
        finalStr += char.repeat(map[char]);
    }
    return finalStr
};