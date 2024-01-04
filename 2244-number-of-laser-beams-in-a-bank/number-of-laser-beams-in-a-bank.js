/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let count, prev = ans = 0;
    for (let i = 0;i<bank.length;i++){
        count = 0;
        for (let j = 0;j<bank[0].length;j++){
            if (bank[i][j]=='1') count++;
        }
        if (count!==0) {
            ans += count*prev
            prev = count;
        }
    }
    return ans;


};