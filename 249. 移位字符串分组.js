/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function (strings) {
    let resMap = new Map();
    let key;
    for (let string of strings) {
        key = getDistance(string);
        if (resMap.has(key)) {
            resMap.get(key).push(string)
        } else {
            resMap.set(key, [string])
        }
    }
    console.log(resMap.keys());
    return Array.from(resMap.values())
};
function getDistance(string) {
    let res = '';
    for (let i = 1; i < string.length; i++) {
        res += ' ' + (string[i].charCodeAt() - string[i - 1].charCodeAt() + 26) % 26
    }
    return res;
}

groupStrings(["al", "abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"])