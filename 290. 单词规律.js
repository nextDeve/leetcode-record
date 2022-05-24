/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let words = s.split(' ');
    if (pattern.length !== words.length) return false;
    let patternMap = new Map();
    let wordMap = new Map();
    for (let i in pattern) {
        if (!patternMap.has(pattern[i])) {
            patternMap.set(pattern[i], words[i]);
            if (!wordMap.has(words[i]))
                wordMap.set(words[i], pattern[i]);
            else
                return false;
        }
        if (patternMap.get(pattern[i]) !== words[i]) return false;
    }
    return true;
};