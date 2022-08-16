/**
 * @param {string} pressedKeys
 * @return {number}
 */
var countTexts = function (pressedKeys) {
    let n = pressedKeys.length;
    let map3 = new Array(n + 1).fill(1);
    let map4 = new Array(n + 1).fill(1);
    let m = Math.pow(10, 9) + 7;
    [map3[2], map3[3]] = [2, 4];
    [map4[2], map4[3]] = [2, 4];
    for (let i = 4; i < n + 1; i++) {
        map3[i] = (map3[i - 1] + map3[i - 2] + map3[i - 3]) % m;
        map4[i] = (map4[i - 1] + map4[i - 2] + map4[i - 3] + map4[i - 4]) % m;
    }
    let count = 0;
    let currentChart;
    let index = 0;
    let res = 1;
    while (index < n) {
        if (currentChart === undefined) {
            count++; index++;
            currentChart = pressedKeys.charAt(index);
        } else if (pressedKeys.charAt(index) === currentChart) {
            count++; index++;
        } else {
            if (currentChart === '7' || currentChart === '9') {
                res *= map4[count];
            } else {
                res *= map3[count];
            }
            res %= m;
            count = 0;
            currentChart = pressedKeys.charAt(index);
        }
    }
    if (currentChart === '7' || currentChart === '9') {
        res *= map4[count];
    } else {
        res *= map3[count];
    }   
    return res % m;
};
console.log(countTexts('222222222222222222222222222222222222'));
