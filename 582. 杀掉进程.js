/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function (pid, ppid, kill) {
    let map = new Map();
    for (let k in pid) map.set(pid[k], ppid[k]);
    let res = [kill];
    let index = 0;
    while (index < pid.length) {
        if (pid[index] === kill) {
            index++;
            continue;
        }
        let father = map.get(pid[index]);
        while (father !== 0) {
            if (father === kill) {
                res.push(map.get(pid[index]));
                break;
            }
            father = map.get(father);
        }
        index += 1;
    }
    return res;
};
