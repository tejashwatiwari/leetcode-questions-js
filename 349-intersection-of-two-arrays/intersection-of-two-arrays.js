/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
     const map = {}; // Hashmap to store counts of elements
    let blankArr = []

    // Populate hashmap with counts of elements from nums1
    for (const num of nums1) {
        map[num] = (map[num] || 0) + 1;
    }
    
    for (let j=0;j<nums2.length;j++){
        let val = map[nums2[j]]
        if (val!==undefined){
            map[nums2[j]]=val-1
            // if(map[nums2[j]]==0)
            
            if(!blankArr.includes(nums2[j])) 
            blankArr.push(nums2[j])       
        }
    }
   return blankArr 
   
}