/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    // Deque to maintain the max elements in the current window
    let maxDeque = [];
    // Deque to maintain the min elements in the current window
    let minDeque = [];
    // Variables to keep track of the left boundary of the window and the maximum length of the subarray
    let left = 0;
    let maxLength = 0;

    // Iterate through each element in the array
    for (let right = 0; right < nums.length; right++) {
        // Maintain the maxDeque in a decreasing order
        while (maxDeque.length && nums[right] > maxDeque[maxDeque.length - 1]) {
            maxDeque.pop();
        }
        maxDeque.push(nums[right]);

        // Maintain the minDeque in an increasing order
        while (minDeque.length && nums[right] < minDeque[minDeque.length - 1]) {
            minDeque.pop();
        }
        minDeque.push(nums[right]);

        // Check if the current window is valid by comparing the max and min values
        while (maxDeque[0] - minDeque[0] > limit) {
            // If not valid, move the left pointer to shrink the window
            if (nums[left] === maxDeque[0]) {
                maxDeque.shift();
            }
            if (nums[left] === minDeque[0]) {
                minDeque.shift();
            }
            left++;
        }

        // Update the maximum length of the valid subarray
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};