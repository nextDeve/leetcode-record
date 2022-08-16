/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let fast = slow = 0;
    while (fast < nums.length) {
        if (nums[fast] === 0) {
            fast++;
            continue;
        } else {
            [nums[fast], nums[slow]] = [nums[slow], nums[fast]];
            slow++;
            fast++;
        }
    }
    return slow;
};