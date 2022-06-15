/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return [];
    let keyMap = [, , 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let res = []
    const combination = (c) => {
        if (c.length === digits.length) {
            res.push(c);
            return;
        }
        const d = digits.at(c.length);
        for (const i of keyMap[d]) {
            combination(c + i)
        }
    }
    combination('')
    return res;
};