/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let matrix = [];
    nums.sort((a, b) => a - b);

    while (nums.length > 0) {
    let row = [nums.shift()];

    // Add distinct elements to the current row
    for (let i = 0; i < nums.length; i++) {
      if (!row.includes(nums[i])) {
        row.push(nums[i]);
        nums.splice(i, 1);
        console.log(nums)
        i--; // Adjust index after splicing
      }
    }

    matrix.push(row);
  }

  return matrix;
};