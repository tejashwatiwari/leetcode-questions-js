/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    // let present = false;
    // for (let i = 0 ; i < nums.length ; i++){
    //     if (nums[i]<nums[i+1]) present = true;
    // }
    // if (!present) return false
    // return true;
    let first = Number.MAX_SAFE_INTEGER;
    let second = Number.MAX_SAFE_INTEGER;
     for (let num of nums) {
        if (num <= first) first = num;
         else if (num <= second) second = num; 
         else return true;
    }
    return false;
};