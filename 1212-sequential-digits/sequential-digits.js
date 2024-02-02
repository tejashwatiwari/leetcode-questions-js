/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let blankArr = []
    for (let i = 1;i<=9;i++){
        let num = i
        for (let j = i+1;j<=9;j++){
            num = num * 10 + j
            if (num >=low && num<=high){
                blankArr.push(num)
            }
        }
    }
    return blankArr.sort((a,b)=>(a-b))

};


