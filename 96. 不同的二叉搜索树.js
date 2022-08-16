/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    if (n === 1 || n === 0) return 1;
    if (n === 2) return 2;
    let res = 0;
    for (let i = 0; i < n; i++) {
        res += numTrees(i) * numTrees(n - i - 1)
    }
    return res;
};
console.log(numTrees(4));