/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if (nums.length == 1) return [nums[0]]
    let map = {}, blankArr = [], pairs=[]
    for (let i = 0;i<nums.length;i++){
        let val = map[nums[i]]
        if (val == undefined) map[nums[i]] = 1
        else map[nums[i]] = val + 1
    }
    for (keys in map){
        blankArr.push([keys, map[keys]])
    }
    blankArr.sort((a,b)=>(b[1]-a[1]))
    for(let i = 0;i<k;i++){
        pairs.push(blankArr[i][0])
    }
    console.log(pairs,"pairs")

    return pairs
    // return blankArr
    // for (let i = 0;i<bl)
    // blankArr.sort((a,b)=>(a-b))
    // return blankArr
};