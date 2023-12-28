/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let blankArr = []
    nums.sort(function(a, b){return a - b})
    for (let i = 0;i<nums.length;i++){
        if(nums[i]==nums[i-1])continue
        // if(nums[i]+nums[i+1]+nums[i+2]+nums[i+3]>target)break
        for (let j=i+1;j<nums.length;j++){
            if(j>i+1&&nums[j]==nums[j-1])continue
            let l = j+1,r = nums.length-1;
            while (l<r){
                let sum = nums[l]+nums[r]+nums[i] + nums[j];
                if (sum == target) {
                    blankArr.push([nums[i],nums[j],nums[l],nums[r]]);
                    while(l<r && nums[r]==nums[r-1]) r--;
                    while(l<r && nums[l]==nums[l+1]) l++;
                    l++;
                    r--;
                } else if (sum < target) l++;
                else r--;
            }
        }
    }
    return blankArr;
    
};