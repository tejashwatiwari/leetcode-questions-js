/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length!==t.length) return false
    let maps1 = {}, maps2={}
    for (let i = 0;i<s.length;i++){
        let val = maps1[s[i]]
        if (val == undefined) maps1[s[i]] = 1
        else maps1[s[i]] = val + 1
    }
      for(let i=0; i<t.length;i++){
            let value = maps1[t[i]];
            if(value==undefined || value==0) return false
            maps1[t[i]]=value-1   
    }
    return true
    
};