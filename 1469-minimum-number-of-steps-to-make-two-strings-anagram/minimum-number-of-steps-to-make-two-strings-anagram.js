/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let maps1 = {}
    let count = 0;
    let maps2 = {};
    for(let i = 0;i<s.length;i++){
        let val = maps1[s[i]]
        if (val == undefined) maps1[s[i]] = 1
        else maps1[s[i]] = val + 1
    } 
    for(let i = 0;i<t.length;i++){
        let val = maps2[t[i]]
        if (val == undefined) maps2[t[i]] = 1;
        else maps2[t[i]] = val + 1
    }
    for (let key in maps2){
        console.log(maps1[key] , maps2[key])
        count += Math.max(0, maps2[key] - (maps1[key] || 0));
    }
    return count;
    
    
};