/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
    let column = matrix.length,row = matrix[0].length;
    for (let i = 0; i < row; i++) { 
        let maxColumn = 0;
        for (let j = 0; j < column; j++) {
            maxColumn = Math.max(maxColumn, matrix[j][i]);
        }
        for (let k = 0; k < column; k++) { 
            if (matrix[k][i] === -1) matrix[k][i] = maxColumn; 
        }
    }

    return matrix;

    
    
};