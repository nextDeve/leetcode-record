/**
 * @param {string[]} wordsDict
 */
var WordDistance = function (wordsDict) {
    this.wordsDict = wordsDict;
    this.wordIndexMap = new Map();
    for (let i in this.wordsDict) {
        if (this.wordIndexMap.has(this.wordsDict[i])) {
            this.wordIndexMap.get(this.wordsDict[i]).push(parseInt(i))
        } else {
            this.wordIndexMap.set(this.wordsDict[i], [parseInt(i)])
        }
    }
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function (word1, word2) {
    let min = this.wordsDict.length - 1;
    let indexs1 = this.wordIndexMap.get(word1);
    let indexs2 = this.wordIndexMap.get(word2);
    let i = 0, j = 0;
    while (i < indexs1.length && j < indexs2.length) {
        min = Math.min(min, Math.abs(indexs2[j] - indexs1[i]));
        if (indexs1[i] < indexs2[j])
            i++;
        else
            j++;
    }
    return min;
}

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */