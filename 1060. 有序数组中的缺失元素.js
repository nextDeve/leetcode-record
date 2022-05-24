/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function (nums, k) {
    let missingCount = nums[nums.length - 1] - nums[0] + 1 - nums.length;
    if (k > missingCount) return nums[nums.length - 1] + k - missingCount;
    let beforCount = 0;
    for (let i = 1; i < nums.length; i++) {
        missingCount = nums[i] - nums[0] - i;
        if (missingCount >= k) {
            return nums[i - 1] + k - beforCount;
        }
        beforCount = missingCount;
    }
};