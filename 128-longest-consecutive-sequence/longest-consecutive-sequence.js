/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    nums.sort((a,b)=>(a-b))

    if (nums.length == []) return 0;
    let count = 1, currentMax = 1
    for(let i = 1;i<nums.length;i++){
        if (nums[i]-nums[i-1]==1) {
            count++
            currentMax=Math.max(currentMax, count)
        }
        else if (nums[i]==nums[i-1]) continue
        else count = 1
    }
    return currentMax
};