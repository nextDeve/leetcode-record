/**
 * @param {string} num
 * @return {string}
 */
const baseCode = '0123456789ABCDEF'
var toHexspeak = function (num) {
    let res = [];
    let code;
    const base = 16;
    while (num !== 0) {
        code = num % base;
        if (code > 1 && code < 10) return 'ERROR';
        else {
            if (code === 0) res.unshift('O');
            else if (code === 1) res.unshift('I');
            else res.unshift(baseCode[code])
        }
        num = Math.floor(num / base)
    }
    return res.join('')
};

/* function changeBase(num, base) {
    let res = [];
    while (num !== 0) {
        res.push(baseCode[num % base])
        num = Math.floor(num / base)
    }
    return res.reverse();
} */