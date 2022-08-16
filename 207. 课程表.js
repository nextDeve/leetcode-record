/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const preCount = new Array(numCourses).fill(0);
    const map = new Map();
    for (let pre of prerequisites) {
        preCount[pre[0]]++;
        if (!map.has(pre[1])) {
            map.set(pre[1], []);
        }
        map.get(pre[1]).push(pre[0]);
    }
    let finished = 0;
    let finishedQueue = [];
    for (let pre in preCount) {
        if (preCount[pre] === 0) {
            finishedQueue.push(Number(pre));
        }
    }
    while (finishedQueue.length) {
        let curr = finishedQueue.shift();
        finished++;
        let afterQueue = map.get(curr);
        if (afterQueue) {
            for (let f of afterQueue) {
                preCount[f]--;
                if (preCount[f] === 0) {
                    finishedQueue.push(f);
                }
            }
        }
    }
    return finished === numCourses;
};