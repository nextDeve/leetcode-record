/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map();
    for (let s of strs) {
        let key = new Array(26).fill(0);
        Array.from(s).forEach((v) => key[v.charCodeAt() - 'a'.charCodeAt()] += 1);
        if (!map.has(key.toString())) {
            map.set(key.toString(), []);
        }
        map.get(key.toString()).push(s);
    }
    return Array.from(map.values());
};