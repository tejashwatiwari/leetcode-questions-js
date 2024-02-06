/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map={}
    for(let str of strs){
        let sortedString=str.split('').sort().join('')
        if(!map[sortedString])map[sortedString]=[]
        map[sortedString].push(str)
    }
return  Object.values(map)
};