/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let prefix = new Map();
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j >= 0; j--) {
            sum += nums[j];
            if (sum === k) res++;
        }
    }
    return res;
};