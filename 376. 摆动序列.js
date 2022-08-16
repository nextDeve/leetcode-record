/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
    let n = nums.length;
    if (n < 2) {
        return n;
    }
    let prediff = nums[1] - nums[0];
    let res = prediff === 0 ? 1 : 2;
    for (let i = 2; i < n; i++) {
        let diff = nums[i] - nums[i - 1];
        if ((diff < 0 && prediff >= 0) || (diff > 0 && prediff <= 0)) {
            res++;
            prediff = diff;
        }
    }
    return res;
};