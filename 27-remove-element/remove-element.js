/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let start = 0;
    // let count = 0;
    let end = nums.length-1;
    while(start<=end){
        if (nums[start]==val){
            let temp = nums[start];
            nums[start] = nums[end];
            end--;
        }else start++;
        console.log(nums,start,end,"else")
    }
    return start;
    console.log(nums,start,end,"if");
};