/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let maps = {};
    let found=false;
  for (let i =0;i<nums.length;i++){
    let value = maps[nums[i]];
    if (value == undefined){
      maps[nums[i]] = 1;
    }
     else {
        found=true
      break
    }
  }
    console.log('found', found)
    if(found){
        return true
    }
    return false
    };
