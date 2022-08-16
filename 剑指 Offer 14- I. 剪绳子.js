/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    if ([2, 3].includes(n)) return n - 1;
    let [a, b] = [Math.floor(n / 3), n % 3];
    if (b === 0) return Math.pow(3, a);
    if (b === 1) return Math.pow(3, a - 1) * 4;
    return Math.pow(3, a) * 2;
};

console.log(cuttingRope(2));