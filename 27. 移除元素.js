/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let fast = slow = 0;
    while (fast < nums.length) {
        if (nums[fast] === val) {
            fast++;
            continue;
        } else {
            if (slow < fast) {
                [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            }
            slow++;
            fast++;
        }
    }
    nums.length = slow 
    return slow ;
};
let nums = [3, 2, 2, 3]
console.log(removeElement(nums, 3))
console.log(nums);