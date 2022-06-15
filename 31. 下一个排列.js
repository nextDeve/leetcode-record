/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let min = Number.MAX_SAFE_INTEGER;
    let index = nums.length - 1;
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] < min) {
            min = nums[i];
            index = i
        }
        if (nums[i - 1] < nums[i]) {
            if (i === 1) {
                [nums[0], nums[index]] = [nums[index], nums[0]];
                
                return;
            } else {
                [nums[i - 1], nums[i]] = [nums[i], nums[i - 1]];
                return;
            }
        }
    }
    nums.reverse();
    return;
};