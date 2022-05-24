/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPatternMatch = function (pattern, s) {
    let patternMap = new Map();
    for (let i in pattern) {
        if (!patternMap.has(pattern[i])) patternMap.set(pattern[i], [i])
        else patternMap.get(pattern[i]).push(i)
    }
    
};