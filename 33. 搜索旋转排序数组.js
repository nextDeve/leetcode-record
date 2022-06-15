/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums[0] === target) return 0;
    if (nums[nums.length - 1] === target) return nums.length - 1;
    if (nums[0] < target) {
        let i = 1;
        while (i < nums.length && nums[i - 1] < nums[i]) {
            if (target === nums[i]) return i;
            i++;
        }
    } else {
        let i = nums.length - 2;
        while (i > 0 && nums[i] < nums[i + 1]) {
            if (target === nums[i]) return i;
            i--;
        }
    }
    return -1;
};
console.log(search([1], 1));