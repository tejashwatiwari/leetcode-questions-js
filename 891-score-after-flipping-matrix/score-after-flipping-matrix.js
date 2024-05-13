/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
 let rows = grid.length;
    let cols = grid[0].length;
    
    //insure the rows first digit is 1
    for(row of grid){
        if(row[0]){
            continue;
        }
        for(i in row){
            row[i] = 1 - row[i];
        }
    }

    //Calculate the value of each column, if the column mostly 0 then inverted
    let sum = 0;
    for(let col = 0; col < cols; col++){
        let setInCol = 0;
        for(row of grid){
            if(row[col])
                setInCol++;
        }
        if(rows > setInCol * 2)
            setInCol = rows - setInCol;
        sum += sum + setInCol;
    }
    return sum;
};