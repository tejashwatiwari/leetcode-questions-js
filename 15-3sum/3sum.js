/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let finalArr = [];
    nums.sort(function(a, b){return a - b})
    for (let i = 0;i<nums.length;i++){
        let l = i+1; r = nums.length-1

        if(i>0&& nums[i]==nums[i-1])continue
        while(l<r){
        let sum = nums[i] + nums[l] + nums[r]
        if (sum == 0){
            finalArr.push([nums[i],nums[l],nums[r]])
            while(l<r && nums[r]==nums[r-1])r--
            while(l<r && nums[l]==nums[l+1])l++
            l++
            r--
        }else if(sum > 0)r--;
        else l++;
        }
    }

return finalArr;
};