/**
 * @param {number} c
 * @return {boolean}
 */
function judgeSquareSum(c) {
    for (let a = 0;  a * a <=c ; a++) {
        let b = Math.sqrt(c - a * a)
        if(b === Math.floor(b)) {
        return true
        }
    }
    return false
}