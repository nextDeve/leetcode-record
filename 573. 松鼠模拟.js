/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} tree
 * @param {number[]} squirrel
 * @param {number[][]} nuts
 * @return {number}
 */
const getDistance = (l1, l2) => Math.abs(l1[0] - l2[0]) + Math.abs(l1[1] - l2[1]);
var minDistance = function (height, width, tree, squirrel, nuts) {
    let sum = 0, ans = Number.MAX_SAFE_INTEGER;

    nuts.forEach(nut => { sum += getDistance(tree, nut) * 2 });
    nuts.forEach(nut => {
        let res = sum - getDistance(tree, nut) + getDistance(squirrel, nut)
        ans = Math.min(ans, res)
    });
    return ans;
};