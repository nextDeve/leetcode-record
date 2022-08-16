/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 1) {
            [nums[i], nums[index] = nums[index], nums[i]];
            index++;
        }
    }
};