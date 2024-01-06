/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let start = maxCount = count = 0;
    for (let i = 0;i<nums.length;i++){
        if (nums[i]==0) count++
        while(count>1){
            if(nums[start]==0) count--;
            start++
        }
        maxCount = Math.max(maxCount,i-start)
    }
    return maxCount;
    
};