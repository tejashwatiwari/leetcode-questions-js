/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums.sort((a,b)=>(b-a))
    let max = 0, max_nega = 0
    for (let i = 0;i<nums.length;i++){
        let nega = nums[i]*(-1)
        if(nums.includes(nega)) return nums[i]
        else {
            nega = 0
        };
    }
    return -1
    
};