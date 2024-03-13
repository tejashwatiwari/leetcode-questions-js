/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    // let leftSum = 0, leftArr= [], rightSum=0, rightArr=[]
    // for(let i = 1;i<=n;i++){
    //     leftSum +=i
    //     leftArr.push(leftSum)
    // }
    // for(let i = n; i >= 1; i--){
    //     rightSum += i
    //     rightArr.push(rightSum)
    // }
    //  for (let i = 0; i < leftArr.length; i++) {
    //     const element = leftArr[i];
    //     if (rightArr.includes(element)) {
    //         return i + 1;
    //     }
    // }
    // return -1; // If no match found
    
     let totalSum = (n * (n + 1)) / 2; 
    let leftSum = 0;

    for (let i = 1; i <= n; i++) {
        leftSum += i;
        if (leftSum === totalSum - leftSum + i) {
            return i;
        }
    }

    return -1;
};