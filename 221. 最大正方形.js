/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let [m, n] = [matrix.length, matrix[0].length];
    let dp = new Array(m).fill(1).map(() => new Array(n).fill(1));
    let maxRadio = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '0') {
                dp[i][j] = 0;
            } else {
                if (i - 1 >= 0 && j - 1 >= 0) {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
                }
                maxRadio = Math.max(dp[i][j], maxRadio)
            }
        }
    }
    return maxRadio ** 2
};
console.log(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]));