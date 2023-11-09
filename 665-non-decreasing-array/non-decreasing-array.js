/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let modified = 0;
    for (let i=1;i<nums.length;i++){
        if (nums[i-1]>nums[i]){
            modified++;
        if (modified>1) return false;
        if (i<2 || nums[i-2]<=nums[i]){
            nums[i-1]=nums[i];
        }
        else nums[i]=nums[i-1]
    }
    }
    return true;
};