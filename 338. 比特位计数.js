/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let ans = new Array(n + 1);
    let getBit = (num) => {
        let res = 0;
        while (num > 0) {
            num &= (num - 1);
            res++;
        }
        return res;
    }
    for (let i = 0; i <= n; i++) {
        ans[i] = getBit(i);
    }
    return ans;
};