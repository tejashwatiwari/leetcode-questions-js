/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let curr, prev=ans=0
  for(let i=0; i<bank.length;i++){
        curr = 0; // Reset the current count of security devices for each row
         for (let j = 0; j < bank[0].length; j++) {
             // Count the number of security devices in the current row
            if (bank[i][j] == '1') curr++; 
        }
          if (curr != 0) {
                // Accumulate the product of current count and previous count
                ans += curr * prev;
                prev = curr; // Update the previous count for the next iteration
            }
  }
  return ans
};