/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    let count = Math.pow(10, n) - 1
    let res = new Array(count);
    for (let i = 1; i <= count; i++) {
        res[i-1] = i;
    }
    return res;
};
console.log(printNumbers(2))
