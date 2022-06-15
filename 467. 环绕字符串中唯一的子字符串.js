/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {
    let ans = new Array(26).fill(0);
    let k = 0;
    for (let i = 0; i < p.length; i++) {
        if (i > 0 && (p[i].charCodeAt() - p[i - 1].charCodeAt() + 26) % 26 === 1) {
            k++;
        } else {
            k = 1;
        }
        ans[p[i].charCodeAt() - 'a'.charCodeAt()] = Math.max(k, ans[p[i].charCodeAt() - 'a'.charCodeAt()]);
    }
    return ans.reduce((p, v) => p + v, 0)
};

