/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [];
    const find = (combine, index) => {
        if (combine.length === nums.length) {
            res.push(combine);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (!index[i]) {
                let newIndex = [...index];
                newIndex[i] = true;
                find([...combine, nums[i]], newIndex)
            }
        }
    }
    find([], new Array(nums.length).fill(false));
    return res;
};
console.log(permute([1, 2, 3]));