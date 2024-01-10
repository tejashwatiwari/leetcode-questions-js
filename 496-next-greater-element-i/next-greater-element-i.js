/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let blankArr = []
    for(let i = 0; i < nums1.length; i++){
        let max = -1;
        for(let j = 0; j < nums2.length; j++){
            let index = j;
            if(nums1[i] == nums2[j]){ 
                while(index !== nums2.length){ 
                    if(nums2[index] > nums1[i]){
                        max = nums2[index]; 
                        break;
                    }
                    index++;
                }
            }
        }
        blankArr.push(max);
    // let currElement;
    // for (let i = 0; i<nums1.length;i++){
    //     let found = false;
    //     let hasGreater = false;
    //     for (let j = 0;j<nums2.length;j++){
    //         if (nums1[i]==nums2[j]){
    //             found = true
    //             for (let k = j+1;k<nums2.length;k++){
    //                 if (nums2[j+1] > nums1[i]) {
    //                     blankArr.push(nums2[j+1]);
    //                     currentElement = nums2[j+1]
    //                     break;
    //                 }
    //                 else if (currentElement<nums2[j+2]){
    //                     k++;
    //                 }
    //                 else {
    //                     blankArr.push(-1)
    //                     break;
    //                 }
    //             }
    //             // if (!hasGreater) blankArr.push(-1)
    //             // break;

    //             // if (nums1[i]<nums2[j+1]) blankArr.push(nums2[j+1])
    //             // else blankArr.push(-1)
                
    //         }
    //         if(!found) {
    //             blankArr.push(-1);
    //             break;
    //         }
    // }
    // }
    }
        return blankArr;

};
