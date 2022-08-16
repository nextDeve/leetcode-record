/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
    /**
     * 
     * @param {String} str1 
     * @param {String} str2 
     */
    const isSubString = (str1, str2) => {
        let pt1 = 0, pt2 = 0;
        while (pt1 < str1.length && pt2 < str2.length) {
            if (str1.charAt(pt1) === str2.charAt(pt2)) {
                pt1++, pt2++;
            } else {
                pt2++;
            }
        }
        return pt1 === str1.length;
    }
    let max = -1;
    for (let i = 0; i < strs.length; i++) {
        let flag = true;
        for (let j = 0; j < strs.length; j++) {
            if (i === j) continue;
            else {
                if (isSubString(strs[i], strs[j])) {
                    flag = false;
                    break;
                }
            }
        }
        if (flag) {
            max = Math.max(max, strs[i].length);
        }
    }
    return max;
};