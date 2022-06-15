/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let [red, white] = [0, 0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            [nums[i], nums[red]] = [nums[red], nums[i]];
            if (red < white) {
                [nums[i], nums[white]] = [nums[white], nums[i]];
            }
            red++; white++;
            continue;
        }
        if (nums[i] === 1) {
            [nums[i], nums[white]] = [nums[white], nums[i]];
            white++;
            continue;
        }
    }
};
