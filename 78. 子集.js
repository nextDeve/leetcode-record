/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let ans = [];
    const find = (combine, index) => {
        ans.push(combine)
        if (index === nums.length) return;
        for (let i = index; i < nums.length; i++) {
            find([...combine, nums[i]], i + 1);
        }
    }
    find([], 0)
    return ans;
};