/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0
    let len = grid.length
    if (len === 0) {
        return count
    }
    let len1 = grid[0].length
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len1; j++) {
            if (grid[i][j] === '1') {
                DFSMarking(i, j)
                    ++count
            }
        }
    }
    return count

    function DFSMarking(m, n) {
        if (m < 0 || n < 0 || m >= len || n >= len1 || grid[m][n] !== '1') {
            return
        }
        grid[m][n] = '0'
        DFSMarking(m + 1, n)
        DFSMarking(m - 1, n)
        DFSMarking(m, n + 1)
        DFSMarking(m, n - 1)
    }
};