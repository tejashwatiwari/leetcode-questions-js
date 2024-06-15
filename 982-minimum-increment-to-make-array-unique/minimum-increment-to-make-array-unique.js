/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
       let i=1, x=0
    nums.sort((a,b)=> a-b)
    for(i,x; i<nums.length; i++){
        if(nums[i-1]>=nums[i]){
            x=x+nums[i-1]-nums[i]+1
            nums[i]=nums[i-1]+1
        }
    }
    return x;
};