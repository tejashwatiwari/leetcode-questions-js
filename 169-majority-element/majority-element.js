/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let maps = {};
    for (let i =0;i<nums.length;i++){
        let values = maps[nums[i]]
        if (values == undefined) maps[nums[i]]=1
        else maps[nums[i]] = values +1
    }
    for (key in maps){
        if (maps[key]>=(nums.length/2)){
        return key
    }
   
  }
    
};