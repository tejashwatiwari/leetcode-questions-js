/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>(a-b))
    s.sort((a,b)=>(a-b))
    let count=index=0;
    while(index<s.length && count<g.length){
    if (s[index] >= g[count])count++;   
    index++;
}
    return count;
};