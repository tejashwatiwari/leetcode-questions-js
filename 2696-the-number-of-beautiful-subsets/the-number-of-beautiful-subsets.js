/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) {
       let allSet = [];

    for (let num of nums) {
        let newSet = [];

        for (let sub of allSet) {
            if (!sub.has(num - k) && !sub.has(num + k)) {
                let curr = new Set(sub);
                curr.add(num);
                newSet.push(curr)
            }
        }

        if (newSet.length)
            allSet.push(...newSet);

        allSet.push(new Set([num]));
    }
    
    return allSet.length;
};