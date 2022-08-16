/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let res = Number.MAX_SAFE_INTEGER;
    const change = (cur) => {
        if (Math.abs(cur - target) < Math.abs(res - target)) {
            res = cur;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let [j, k] = [i + 1, nums.length - 1];
        while (j < k) {
            sum = nums[i] + nums[j] + nums[k];
            change(sum);
            if (sum > target) {
                while (true) {
                    k--;
                    if (nums[k + 1] === nums[k]) continue;
                    else break;
                }
            } else {
                while (true) {
                    j++;
                    if (nums[j - 1] === nums[j]) continue;
                    else break;
                }
            }
        }
    }
    return res;
};
console.log(threeSumClosest( [-1,2,1,-4], 1));