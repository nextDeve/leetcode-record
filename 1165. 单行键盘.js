/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function (keyboard, word) {
    let map = new Map;
    for (let i in keyboard) map.set(keyboard[i], i);
    let res = 0;
    for (let i = 0; i < word.length; i++) {
        if (i === 0) res += Math.abs(map.get(word[i]))
        else res += Math.abs(map.get(word[i]) - map.get(word[i - 1]))
    }
    return res;
};
