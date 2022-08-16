/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let [m, n] = [matrix.length, matrix[0].length]
    let i = 0, j = n - 1;
    while (j >= 0) {
        if (matrix[i][j] === target) return true;
        if (i === m - 1 && j === 0) break;
        if (i + 1 < m && matrix[i + 1][j] <= target) {
            i++;
        } else {
            j--;
        }
    }
    return false;
};