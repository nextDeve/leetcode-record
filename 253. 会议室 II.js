/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
    if (intervals.length === 1) return 1;
    intervals.sort((a, b) => a[0] - b[0]);
    let count = 0;
    let n = intervals.length;
    let res = 0, current = null;
    let flag = new Array(n).fill(false);
    while (count < n) {
        for (let [i, e] of intervals.entries()) {
            if (flag[i] === true && current === null) continue;
            else {
                if (current === null) {
                    current = e;
                    count++;
                    flag[i] = true;
                    continue;
                }
            }
            if (!flag[i] && e[0] >= current[1]) {
                current = e;
                count++;
                flag[i] = true;
            }
            if (i === n - 1) {
                current = null;
            }
        }
        res++;
    }
    return res;
};