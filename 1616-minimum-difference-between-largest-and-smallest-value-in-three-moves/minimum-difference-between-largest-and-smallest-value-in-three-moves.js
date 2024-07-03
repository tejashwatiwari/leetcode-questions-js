/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    
    //at most 3 moves
    let len = nums.length

    //base case
    if(len <= 4) return 0;

    nums.sort((a,b)=> a-b);

    // minimum different between
    // the three smallest and three largest values in the array.

    let diff = Math.min(
        nums[len-1] - nums[3],
        nums[len-2] - nums[2],
        nums[len-3] - nums[1],
        nums[len-4] - nums[0]
    );

    return diff;
};