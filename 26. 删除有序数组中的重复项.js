/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let slow = 1, fast = 1;
    while (fast < nums.length) {
        if (nums[fast] === nums[slow - 1]) {
            fast++;
            continue;
        } else {
            nums[slow] = nums[fast];
            slow++;
            fast++;
        }
    }
    nums.length = slow;
    return slow;
};