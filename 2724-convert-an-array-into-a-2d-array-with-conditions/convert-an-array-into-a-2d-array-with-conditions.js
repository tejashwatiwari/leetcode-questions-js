/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let blankArr = []
    for (let i = 0;i<nums.length;i++){
        let placed = false;
        for (let j = 0; j<blankArr.length;j++){
            if (!blankArr[j].includes(nums[i])){
                blankArr[j].push(nums[i])
                placed = true;
                break;
            }
        }
        if(!placed) blankArr.push([nums[i]])

    }
    return blankArr    
};