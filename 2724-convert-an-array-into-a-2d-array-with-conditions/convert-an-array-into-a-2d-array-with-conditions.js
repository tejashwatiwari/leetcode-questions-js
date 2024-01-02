/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {


    let tempA = [];

    for (const num of nums) {
        let present = false  
        for (const row of tempA) {
            if (!row.includes(num)) {
                row.push(num);
                present = true;
                break;
            }
        }
        if(!present){
        tempA.push([num]);
        }
    }
    return tempA;
};