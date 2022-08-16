/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    nums.reduce((a, b) => {
        if (b - a > 1) {
            while (a !== b - 1) {
                a += 1;
                res.push(a)
            }
        }
        return b;
    })
    if (nums[0] > 1) {
        let start = nums[0] - 1;
        while (start >= 1) {
            res.unshift(start--);
        }
    }
    if (nums[nums.length - 1] < nums.length) {
        let end = nums[nums.length - 1] + 1;
        while (end <= nums.length) {
            res.push(end++);
        }
    }
    return res;
};
