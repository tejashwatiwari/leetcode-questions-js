/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let mid=Math.floor(nums.length/2)
    if(nums.length<=1)return nums
    let left=sortArray(nums.slice(0,mid))
    let right=sortArray(nums.slice(mid))

 return mergeSort(left, right)   
};

function mergeSort(left,right){
let sortedArray=[]
    if(left&&right){
        while(left.length && right.length){
            if(left[0]<right[0])sortedArray.push(left.shift())
            else sortedArray.push(right.shift())
        }
    }
return [...sortedArray, ...left, ...right]    
}