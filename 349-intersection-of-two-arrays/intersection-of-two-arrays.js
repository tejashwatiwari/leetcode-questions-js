/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let blankArr = []
    let map={}
    for (let i=0;i<nums1.length;i++){
        let val = map[nums1[i]]
        if (val == undefined) map[nums1[i]] =  1
        else map[nums1[i]] = val +1    
    }
    for (let j=0;j<nums2.length;j++){
        let val = map[nums2[j]]
        if (val!==undefined){
            map[nums2[j]]=val-1
            if(map[nums2[j]]==0)
            console.log('arr', nums2[j])
            if(!blankArr.includes(nums2[j])) 
            blankArr.push(nums2[j])       
        }
    }
   return blankArr 
};