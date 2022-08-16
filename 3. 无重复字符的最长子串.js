/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let right = 0;
    let set = new Set();
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if (i !== 0) {
            set.delete(s.charAt(i - 1));
        }
        while (right < s.length && !set.has(s.charAt(right))) {
            set.add(s.charAt(right));
            right++;
        }
        res = Math.max(res, right - i);
        if (right === s.length) break;
    }
    return res;
};
console.log(lengthOfLongestSubstring('pwwkew'));
