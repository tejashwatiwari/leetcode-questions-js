/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {}
    for (let i = 0 ; i < arr.length ; i++){
        let val = map[arr[i]]
        if (val == undefined) map[arr[i]] = 1
        else map[arr[i]] = val + 1
    }
    let newMap = {}
    for (key in map){
        if (newMap[map[key]]) return false;
        else newMap[map[key]] = true;
        console.log(newMap)

    }
    return true;
};