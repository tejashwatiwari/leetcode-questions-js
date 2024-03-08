/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let maps = {};
    for (let i =0;i<nums.length;i++){
    let val = maps[nums[i]];
    if (val == undefined) maps[nums[i]]=1;
    else maps[nums[i]] = val +1;
    }
    let max = 0;
    for (keys in maps){
        if (maps[keys]>max) max = maps[keys];
        }
        let total_max = 0;
    for (let key in maps) {
        if (maps[key] == max) {
            total_max += max;
        }
    }
    return total_max;
};