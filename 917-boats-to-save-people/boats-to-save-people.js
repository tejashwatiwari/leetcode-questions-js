/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b)=>(a-b))
    let res = 0
    let l = 0, r = people.length-1
    while(l<=r){
        let diff = limit - people[r]
        console.log(diff)
        res++
        r--
        if(diff >= people[l]) l++;
    }
    return res;
};