/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let ans = count = prev = 0;
    for (let i = 0;i<bank.length;i++){
        let count = 0
        for (let j = 0;j<bank[i].length;j++){
            if (bank[i][j] == 1) count++
        }
        if (count!==0) {
            ans += count*prev
            prev = count;
        }
    }
    return ans;
};