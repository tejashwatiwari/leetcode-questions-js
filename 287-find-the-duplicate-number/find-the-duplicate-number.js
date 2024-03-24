/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
        let maps = {};
    for (let i = 0; i < nums.length; i++) {
        let val = maps[nums[i]];
        if (val == undefined) {
        maps[nums[i]] = 1;
        } else {
        maps[nums[i]] = val + 1;
        }
    }
    let blankarr=[]
    for (key in maps) {
        if (maps[key] > 1) {
            blankarr.push(key);
        }
    }
    return blankarr;
};