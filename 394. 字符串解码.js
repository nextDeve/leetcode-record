/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let res = '';
    let index = 0;
    let munStr;
    while (index < s.length) {
        munStr = '';
        while (s.charAt(index).charCodeAt() >= '0'.charCodeAt() && s.charAt(index).charCodeAt() <= '9'.charCodeAt()) {
            munStr += s.charAt(index);
            index++;
        }
        while (s.charAt(index) !== ']') {
            str += s.charAt(index);
            index++;
        }
        index++;
        res += str.repeat(Number(munStr));
    }
    return res;
};
