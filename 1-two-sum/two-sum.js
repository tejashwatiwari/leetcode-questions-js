/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let maps = {}
    for (let i = 0;i<nums.length;i++){
        let finalNum = target - nums[i]
        if (maps[finalNum]!==undefined) {return [maps[finalNum],i]}
         maps[nums[i]] = i;
    }
};