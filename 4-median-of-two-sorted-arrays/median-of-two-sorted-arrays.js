/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    for (let i = 0 ; i <nums2.length; i++){
        nums1.push(nums2[i])
    }
    nums1.sort((a,b)=>(a-b))
    let l = 0, r = nums1.length, mid = Math.floor((l+r)/2)
    if (nums1.length%2 !==0) return nums1[mid]
    else {
        return (nums1[mid] + nums1[mid-1])/2
    }
}