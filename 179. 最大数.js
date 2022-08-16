/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    nums.sort((a, b) => {
        return Number(b.toString() + a.toString()) - Number(a.toString() + b.toString());
    })
    let res = nums.join('');
    while (res.startsWith('0') && res.length > 1) {
        res = res.slice(1);
    }
    return res;
};