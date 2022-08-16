/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let index = 0;
    let res = [];
    let pMap = new Array(26).fill(0);
    for (let c of Array.from(p)) {
        pMap[c.charCodeAt() - 'a'.charCodeAt()]++
    }
    while (index <= s.length - p.length) {
        let pMapCopy = Array.from(pMap);
        for (let i = index; i < index + p.length; i++) {
            pMapCopy[s.charAt(i).charCodeAt() - 'a'.charCodeAt()]--;
        }
        if (!pMapCopy.some(c => c !== 0)) {
            res.push(index);
        }
        index++;
    }
    return res;
};
console.log(findAnagrams("abab", "ab"));
