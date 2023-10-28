/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let start=0, end=1
    while(end<nums.length){
        if(nums[start]==0 && nums[end]!==0){
            nums[start]=nums[end]
            nums[end]=0
            start++
        }
        if(nums[start]!==0){
            start++
        } 
        end++
  
   }
 
};