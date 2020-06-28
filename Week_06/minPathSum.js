/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const n = grid.length
    const m = grid[0].length
    const dp = Array.from(new Array(n), () => new Array(m))
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i !== 0 && j !== 0) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
            }
            if (i === 0 && j !== 0) {
                dp[i][j] = dp[i][j - 1] + grid[i][j]
            }
            if (i !== 0 && j === 0) {
                dp[i][j] = dp[i - 1][j] + grid[i][j]
            }
            if (i === 0 && j === 0) {
                dp[i][j] = grid[i][j]
            }
        }
    }
    return dp[n - 1][m - 1]
};