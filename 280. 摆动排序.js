/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
    let less = true;
    let n = nums.length - 1;
    for (let i = 0; i < n; i++) {
        if (less) {
            if (nums[i + 1] < nums[i]) {
                [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]
            }
        } else {
            if (nums[i + 1] > nums[i]) {
                [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]
            }
        }
        less = !less;
    }
};