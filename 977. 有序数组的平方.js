/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let left = 0; right = nums.length - 1;
    let ret = [];
    while (left <= right) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            ret.unshift(nums[right]*nums[right]);
            right--;
        }else{
            ret.unshift(nums[left]*nums[left]);
            left++;
        }
    }
    return ret;
};