/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxCandy = Math.max(...candies)
    let newCandies = []
    for (let i = 0;i<candies.length;i++){
        let sum = candies[i] + extraCandies
        if (sum >= maxCandy) newCandies.push(true)
        else newCandies.push(false)
    }
    return newCandies
    
    
};