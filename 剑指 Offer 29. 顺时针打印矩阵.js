/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let m = matrix.length;
    if (m === 0) return [];
    if (m === 1) return matrix[0];
    let n = matrix[0].length;
    let ret = new Array(m * n);
    let count = 0;
    let [left, right, top, bottom] = [0, n - 1, 0, m - 1];
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            ret[count++] = matrix[top][i];
        }
        for (let i = top + 1; i <= bottom; i++) {
            ret[count++] = matrix[i][right];
        }
        if (left < right && top < bottom) {
            for (let i = right - 1; i > left; i--) {
                ret[count++] = matrix[bottom][i];
            }
            for (let i = bottom; i > top; i--) {
                ret[count++] = matrix[i][left];
            }
        }
        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }
    return ret;
};