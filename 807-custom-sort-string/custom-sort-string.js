/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let map = {};
    let res = '';

    // Count frequency of characters in s
    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }

    // Iterate through order, append characters in the order they appear
    for (let char of order) {
        if (map[char] !== undefined) {
            res += char.repeat(map[char]);
            delete map[char];
        }
    }

    // Append remaining characters in s that are not in order
    for (let char in map) {
        res += char.repeat(map[char]);
    }

    return res;
};