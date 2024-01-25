/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let maps = {}
    for(let i = 0;i<nums.length;i++){
        let val = maps[nums[i]]
        if (val == undefined) maps[nums[i]] = 1
        else maps[nums[i]] = val + 1;
    }
    for (keys in maps){
        if (maps[keys]>1) return true
    }
    return false
};