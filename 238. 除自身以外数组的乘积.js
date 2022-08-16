/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let l = nums.length;
    let res = new Array(l);
    let L = new Array(l), R = new Array(l);
    L[0] = 1;
    for (let i = 1; i < l; i++) {
        L[i] = nums[i - 1] * L[i - 1]
    }
    R[l - 1] = 1;
    for (let i = l - 2; i >= 0; i--) {
        R[i] = nums[i + 1] * R[i + 1]
    }
    for (let i = 0; i < l; i++) {
        res[i] = L[i] * R[i]
    }
    return res;
};
console.log(productExceptSelf([-1, 1, 0, -3, 3]));