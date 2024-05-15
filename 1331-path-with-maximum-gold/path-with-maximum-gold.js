var getMaximumGold = function(grid) {
    let maxSum = 0;
    let currMax = 0;
    const directions = [[-1,0], [0,1], [1,0], [0,-1]];
    const dfs = (row, col, currSum) => {
        if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === 0 ){
            return currSum;
        }
        let currGold = grid[row][col];
        grid[row][col] = 0;
        currMax = currSum;
        for(let direction of directions){
            currMax = Math.max(currMax, dfs(row + direction[0], col + direction[1],currSum + currGold))
        }
        grid[row][col] = currGold;
        return currMax;
    }
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 0){
                continue;
            }else{
                maxSum = Math.max(maxSum,dfs(i, j, 0));
            }
        }
    }
    return maxSum;
};