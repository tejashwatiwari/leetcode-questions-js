/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let positive = []
    let negative = []
    let blankArr = []
    let n = nums.length
    for(let i = 0;i<nums.length;i++){
        if (nums[i]>0) {positive.push(nums[i])}
        else {negative.push(nums[i])}
    }
    for (let i = 0;i<positive.length;i++){
        blankArr.push(positive[i])
        blankArr.push(negative[i])
    }
    return blankArr
    
};