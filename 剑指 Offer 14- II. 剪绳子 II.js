/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    if ([2, 3].includes(n)) return n - 1;
    let [a, b] = [Math.floor(n / 3), n % 3];
    if (b === 0) return Math.pow(3, a) % (1e9 + 7);
    if (b === 1) return (Math.pow(3, a - 1) * 4) % (1e9 + 7);
    return (Math.pow(3, a) * 2) % (1e9 + 7);
};
