/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let [max, min, ans] = [nums[0], nums[0], nums[0]];
    for (let i = 1; i < nums.length; i++) {
        let [ma, mi] = [max, min]
        max = Math.max(ma * nums[i], mi * nums[i], nums[i]);
        min = Math.min(ma * nums[i], mi * nums[i], nums[i]);
        ans = Math.max(max, ans)
    }
    return ans;
};