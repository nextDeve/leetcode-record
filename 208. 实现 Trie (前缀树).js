var Trie = function () {
    this.prefixMap = new Map();
    this.insertedWord = [];
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    if (this.insertedWord.includes(word)) return;
    this.insertedWord.push(word);
    if (this.insertedWord.length === 1) {
        for (let i = 1; i <= word.length; i++) {
            this.prefixMap.set(word.substring(0, i), 1)
        }
    } else {
        for (let i = 1; i <= word.length; i++) {
            let prefix = word.substring(0, i);
            if (this.prefixMap.has(prefix)) {
                this.prefixMap.set(prefix, this.prefixMap.get(prefix) + 1)
            } else {
                this.prefixMap.set(prefix, 1)
            }
        }
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    return this.insertedWord.includes(word);
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    return this.prefixMap.has(prefix);
};
