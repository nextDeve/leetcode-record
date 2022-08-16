/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let index = 1;
    let maxStack = [nums[0]];
    let indexStack = [0];
    let ret = [];
    while (index < nums.length) {
        while (maxStack.length > 0 && maxStack[maxStack.length-1] < nums[index]) {
            maxStack.pop();
            indexStack.pop();
        }
        maxStack.push(nums[index]);
        indexStack.push(index);
        while (indexStack[0] <= index - k) {
            maxStack.shift();
            indexStack.shift();
        }
        if (index >= k - 1) {
            ret.push(maxStack[0]);
        }
        index++;
    }
    return ret;
};