/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let newArr = []
    for (let i = 0;i<nums.length;i++){
        newArr.push(nums[i]**2)
    }
    newArr.sort((a,b)=>(a-b))
    return newArr
    
};