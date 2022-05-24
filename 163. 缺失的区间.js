/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
    let res = [];
    nums.unshift(lower - 1);
    nums.push(upper + 1);
    for (let i = 1; i < nums.length; i++) {
        if ((nums[i] - nums[i - 1]) <= 1) continue;
        else res.push(getDistance(nums[i - 1], nums[i]));
    }
    return res;
};

function getDistance(lower, upper) {
    if ((upper - lower) === 2) return (lower + 1).toString();
    else return `${lower + 1}->${upper - 1}`;
}

console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99));