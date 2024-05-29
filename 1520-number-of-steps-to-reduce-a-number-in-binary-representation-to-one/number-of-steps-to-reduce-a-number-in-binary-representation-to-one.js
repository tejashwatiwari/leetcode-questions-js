/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
       let count = 0;
    let balance = 0;
    let arrayValue = s.split("");

    for( let i = arrayValue.length -1; i > 0 ; i--) {
        if(arrayValue[i] == '0') {
            count += balance ? 2: 1; 
        }else{
            count +=  balance ? 1: 2;
            balance = 1;
        }

    }
        return count + balance;
    
};