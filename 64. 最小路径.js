/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const [m, n] = [grid.length, grid[0].length]
    const res = new Array(m).fill(0).map(() => new Array(n).fill(0));
    res[0][0] = grid[0][0];
    for (let i = 1; i < m; i++) {
        res[i][0] = res[i - 1][0] + grid[i][0]
    }
    for (let i = 1; i < n; i++) {
        res[0][i] = res[0][i - 1] + grid[0][i]
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            res[i][j] = Math.min(res[i - 1][j] + grid[i][j], res[i][j - 1] + grid[i][j]);
        }
    }
    return res[m - 1][n - 1];
};
console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));