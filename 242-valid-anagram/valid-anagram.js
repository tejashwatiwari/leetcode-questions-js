/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //check if the length is equal
    if (s.length!==t.length) return false;
    
        let map1={};
        for (let i =0;i<s.length;i++){
            let value = map1[s[i]];
            if (value == undefined){
                map1[s[i]] = 1;
            }else{
                map1[s[i]] = value + 1;
            }
        }
        
        for(let i=0; i<t.length;i++){
            let value = map1[t[i]];
            if(value==undefined || value==0) return false
            map1[t[i]]=value-1   
        }
return true
    
};