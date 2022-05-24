/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
    let l1 = s.length;
    let l2 = t.length;
    if (Math.abs(l1 - l2) > 1) return false;
    else if (l1 === l2) {
        let dif = 0;
        for (let i in s) {
            if (s[i] !== t[i]) dif++;
            if (dif > 1) return false;
        }
        if (dif === 0) return false;
    } else if (l1 > l2) {
        let index1 = 0, index2 = 0;
        let dif = 0;
        while (index1 < l1 && index2 < l2) {
            if (s[index1] === t[index2]) {
                index1 += 1;
                index2 += 1;
            }
            else {
                index1 += 1;
                dif += 1;
                if (dif > 1) return false;
            }
        }
    } else if (l1 < l2) {
        let index1 = 0, index2 = 0;
        let dif = 0;
        while (index1 < l1 && index2 < l2) {
            if (s[index1] === t[index2]) {
                index1 += 1;
                index2 += 1;
            }
            else {
                index2 += 1;
                dif += 1;
                if (dif > 1) return false;
            }
        }
    }
    return true;
}