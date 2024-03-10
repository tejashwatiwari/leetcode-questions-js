/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
      const map = {};
    const result = [];
    // Populate hashmap with counts of elements from nums1
    for (const num of nums1) {
        map[num] = (map[num] || 0) + 1;
    }
    // Check if each element in nums2 exists in the hashmap
    for (const num of nums2) {
        if (map[num] > 0) {
            result.push(num);
            map[num]--; // Decrement count to handle duplicates
        }
    }
    return result;
};