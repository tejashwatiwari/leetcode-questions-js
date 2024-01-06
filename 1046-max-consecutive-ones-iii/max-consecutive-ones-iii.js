/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let start = maxCount = count = 0
    for (let i = 0;i<nums.length;i++){
        if (nums[i]==0) count++
        while(count>k){
            if(nums[start]==0) count--;
            start++
        }
        maxCount = Math.max(maxCount,i-start+1)
        } 
    return maxCount
};