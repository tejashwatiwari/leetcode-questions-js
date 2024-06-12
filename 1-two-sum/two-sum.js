/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    for (let i = 0;i<nums.length;i++){
        let diff = target-nums[i]
        let index = nums.indexOf(diff)
        if (index!= -1 && index!=i) return [index, i]
        else diff = 0;
    }

};