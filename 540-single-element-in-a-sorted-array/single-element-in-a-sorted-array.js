/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let map = {}
    for (let i = 0;i<nums.length;i++){
        let val = map[nums[i]]
        if (val == undefined) map[nums[i]] = 1
        else map[nums[i]] = val + 1
    }
    for (keys in map){
        if (map[keys]==1) return keys
    }
};