/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let strNum = n.toString();
    let total = 0;

    for(let j = 0;j<7;j++){
        for(let i = 0;i<strNum.length;i++){
            total += parseInt(strNum[i])**2;
        }
        if(total == 1){
            return true;
        }
        strNum = total.toString();
        total = 0;
    }

    return false;
};