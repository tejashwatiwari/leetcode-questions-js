/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b) 
    minival = 0;
    for (let i=0;i<nums.length;i++){
    if (minival == nums[i]) minival++ 
    }
    return minival
};