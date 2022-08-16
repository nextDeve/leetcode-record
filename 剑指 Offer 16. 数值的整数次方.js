/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    const quickMul = (n, x) => {
        if (n === 0) return 1;
        let y = quickMul(Math.floor(n / 2), x);
        return n % 2 === 0 ? y * y : y * y * x;
    }
    return n <= 0 ? 1 / quickMul(-n, x) : quickMul(n, x);
};
console.log(myPow(2,10))