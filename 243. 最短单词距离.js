/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function (wordsDict, word1, word2) {
    let minDistance = wordsDict.length;
    let lastIndex1 = -1, lastIndex2 = -1;
    for (let i in wordsDict) {
        if (wordsDict[i] === word1) lastIndex1 = i;
        if (wordsDict[i] === word2) lastIndex2 = i;
        if (lastIndex1 !== -1 && lastIndex2 !== -1) {
            minDistance = Math.min(minDistance, Math.abs(lastIndex1 - lastIndex2))
        }
    }
    return minDistance;
};