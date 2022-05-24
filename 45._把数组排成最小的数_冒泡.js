/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
    nums.sort((cur, next) => {
        return parseInt(cur.toString() + next.toString()) - parseInt(next.toString() + cur.toString())
    })
    return nums.join('')
};
x = [3, 30, 34, 5, 9]
