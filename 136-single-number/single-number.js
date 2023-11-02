/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let maps = {}
    for (let i=0;i<nums.length;i++){
        let val = maps[nums[i]];
    if (val == undefined){
      maps[nums[i]] = 1;
    }else {
      maps[nums[i]] = val +1;
    }
    }
    for (key in maps){
    if (maps[key]==1){
        return key;
    }
    }
    
};