/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
     // Create an empty object 'map' to store the frequency of each number in the array.
    let map = {}, count = 0;

    // Iterate through the given array 'nums'
    for (let num of nums) {
        // If the current number is not present in 'map', initialize its frequency to 1.
        // Otherwise, increment its frequency.
        if (map[num] == undefined) map[num] = 1;
        else map[num] = map[num] + 1;
    }

    // Iterate through the keys (unique numbers) in 'map'
    for (key in map) {
        // Get the frequency of the current number
        let freq = map[key];

        // If the frequency is 1, it means there's only one occurrence of the number,
        // and we cannot perform any operation, so return -1.
        if (freq === 1) return -1;

        // For every group of three occurrences of the number, perform one operation.
        count += Math.floor(freq / 3);

        // If there are remaining elements (1 or 2) after grouping in threes,
        // perform additional operations for them.
        if (freq % 3 !== 0) count++;
    }

    // Return the total count of operations needed to make the array empty.
    return count;
};