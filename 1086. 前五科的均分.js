/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function (items) {
    let map = new Map;
    for (let item of items) {
        if (!map.has(item[0])) map.set(item[0], [item[1]])
        else map.get(item[0]).push(item[1]);
    }
    let res = [];
    for (let [key, scores] of map.entries()) {
        scores.sort((a, b) => b - a);
        res.push([key, Math.floor(scores.slice(0, 5).reduce((p, v) => p + v, 0) / 5)])
    }
    return res.sort((a, b) => a[0] - b[0]);
};