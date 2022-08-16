/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
    let ans = 0;
    while (n !== 1) {
        if (n % 2 === 0) {
            ++ans;
            n = Math.floor(n / 2);
        } else if (n % 4 === 1) {
            ans += 2;
            n = Math.floor(n / 2);
        } else {
            if (n === 3) {
                ans += 2;
                n = 1;
            } else {
                ans += 2;
                n = Math.floor(n / 2) + 1;
            }
        }
    }
    return ans;
};