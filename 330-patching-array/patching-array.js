/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
       let count = 0,i=0,unfind=1;
    while (unfind <= n) {
        if (i < nums.length && nums[i] <= unfind) {
            unfind += nums[i++];
        } else {
            unfind += unfind;
            count++;
        }
    }
    
    return count;
};