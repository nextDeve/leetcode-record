/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const map = new Map();
    let end = s.length;
    for (let w of wordDict) {
        if (!map.has(w[w.length - 1])) {
            map.set(w[w.length - 1], []);
        }
        map.get(w[w.length - 1]).push(w);
    }
    while (end > 0) {
        let wordList = map.get(s[end - 1]);
        if (!wordList) return false;
        for (let i = 0; i < wordList.length; i++) {
            const wordInS = s.slice(end - wordList[i].length, end);
            if (wordInS === wordList[i]) {
                end -= wordList[i].length
                break;
            }
            else {
                if (i === wordList.length - 1) return false;
            }
        }
    }
    return true;
};