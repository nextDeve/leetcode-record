/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function (n) {
    const res = [];
    let mirrorMap = new Map([['8', '8'], ['6', '9'], ['9', '6'], ['1', '1'], ['0', '0']]);
    let centerMap = new Map([['1', '1'], ['0', '0'], ['8', '8']]);
    const conbine = (element, left, isOdd, isFirst) => {
        if (left === 0) {
            res.push(element);
            return;
        }
        if (isOdd && isFirst) {
            for (let v of centerMap.values()) {
                conbine(element + v, left - 1, isOdd, false);
            }
        } else {
            for (let [k, v] of mirrorMap.entries()) {
                conbine(k + element + v, left - 1, isOdd, false);
            }
        }
    }

    conbine('', Math.ceil(n / 2), !(n % 2 === 0), true);
    return res.filter((v) => !v.startsWith('0') || n === 1);
};
console.log(findStrobogrammatic(1));
