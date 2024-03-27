/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0; 
    
    let product = 1,start = end = 0, count = 0;
    
    while (end < nums.length) {
        product *= nums[end];
        while (product >= k) {
            product = product / nums[start];
            start++;
        }
        count += end - start + 1;
        end++;
    }
    
    return count;
};