/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let frozonMap = new Map();
    let timeMap = new Map();
    tasks.forEach((v) => {
        if (!timeMap.has(v)) {
            timeMap.set(v, 0);
        }
        timeMap.set(v, timeMap.get(v) + 1);
    })
    let count = 0;
    while (tasks.some(() => true)) {
        for (let [key, v] of frozonMap.entries()) {
            frozonMap.set(key, v - 1);
        }
        tasks.some((v, i, arr) => {
            if (!frozonMap.has(v)) {
                frozonMap.set(v, n);
                delete arr[i];
                timeMap.set(v, timeMap.get(v) - 1);
                return true;
            } else {
                if (frozonMap.get(v) < 0) {
                    frozonMap.set(v, n);
                    timeMap.set(v, timeMap.get(v) - 1);
                    delete arr[i];
                    return true;
                } else {
                    return false;
                }
            }
        })
        count++;
        tasks.sort((a, b) => {
            let x = timeMap.get(a);
            let y = timeMap.get(b);
            return y - x;
        })
    }
    return count;
};