/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = new Map();
    for (let num of nums) {
        if (!map.has(num)) {
            map.set(num, 0)
        }
        map.set(num, map.get(num) + 1)
    }
    const f = nums.length / 2;
    return Array.from(map).find(v => v[1] > f)[0]
};
console.log(majorityElement([3, 2, 3]));