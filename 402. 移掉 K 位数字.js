/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    if (num.length === k) return '0';
    let res = [Number(num.charAt(0))];
    let count = 0;
    for (let i = 1; i < num.length; i++) {

        if (count < k) {
            while (res.length > 0 && res[res.length - 1] > Number(num.charAt(i)) && count < k) {
                res.pop();
                count++;
            }
        }
        res.push(Number(num.charAt(i)))
    }
    let ret = res.join('').slice(0, num.length - k);
    while (ret.startsWith('0') && ret.length > 1) {
        ret = ret.slice(1);
    }
    return ret;
};