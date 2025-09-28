/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    for (let i = n - 1; i >= 2; i--) {
        if (nums[i-2] + nums[i-1] > nums[i]) {
            return nums[i] + nums[i-1] + nums[i-2];
        }
    }
    return 0;
};