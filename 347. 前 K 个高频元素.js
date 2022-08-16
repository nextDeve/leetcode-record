/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map();
    for (let i of nums) {
        if (!map.has(i)) map.set(i, 0);
        map.set(i, map.get(i) + 1);
    }
    return Array.from(map).sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, k);
};
