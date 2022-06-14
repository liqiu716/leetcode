var maxValue = function(grid) {
    let row = grid.length, col = grid[0].length
    let dp = new Array(row).fill(0).map(_ => new Array(col).fill(0))
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            dp[i][j] = Math.max(dp?.[i-1]?.[j] ?? 0, dp?.[i]?.[j-1] ?? 0) + grid[i][j]
        }
    }
    return dp[row-1][col-1]
};