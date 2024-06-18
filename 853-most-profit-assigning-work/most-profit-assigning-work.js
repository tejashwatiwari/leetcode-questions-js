/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
    let mat = [];
    for (let i = 0; i < difficulty.length; i++) {
        mat.push([difficulty[i], profit[i]]);
    }
    mat.sort((a, b) => b[1] - a[1]);
    worker.sort((a, b)=> b-a);
    let sum = 0;
    let k = 0;
    for (let i = 0; i < worker.length; i++) {
        let j = k;
        for (; j < difficulty.length; j++) {
            if(worker[i]>=mat[j][0]){
                sum+= mat[j][1];
                break;
            }
        }
        k = j;
    }

    return sum;
};