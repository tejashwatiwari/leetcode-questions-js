/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
     let counter = 0;
    for (let i of arr) {
        if (!!(i%2)) counter++;
        else counter = 0;
        if (counter == 3) return true;
    }
    return false
};