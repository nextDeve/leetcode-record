/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstringTwoDistinct = function (s) {
    s = Array.from(s);
    if (s.length < 3) return s.length;
    let maxl = 2;
    let left = 0, right = 0;
    let doublec = []
    while (right < s.length) {
        if (doublec.length < 3) {
            if (doublec.includes(s[right])) {
                right += 1
            } else {
                doublec.push(s[right++])
            }
        }
        if (doublec.length === 3) {
            console.log(s.slice(left, right))
            let i1 = s.slice(left, right).lastIndexOf(doublec[0])+left
            let i2 = s.slice(left, right).lastIndexOf(doublec[1])+left
            if (i1 > i2) {
                left = i2 + 1
                doublec = [doublec[0], doublec[2]]
            } else {
                left = i1 + 1
                doublec.shift()
            }
        }
        maxl = Math.max(maxl, right - left);
    }
    return maxl;
};