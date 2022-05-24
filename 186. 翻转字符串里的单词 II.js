/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
    reverseWord(s, 0, s.length - 1);
    let start = 0, sl = 0;
    for (let v of s) {
        if (v !== ' ') sl++;
        else {
            reverseWord(s, start, start + sl - 1)
            start = start + sl + 1;
            sl = 0
        }
    }
    reverseWord(s, start, start + sl - 1)
};

function reverseWord(s, start, end) {
    while (start < end) {
        [s[start], s[end]] = [s[end], s[start]];
        start++;
        end--;
    }
}
s = ["t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"]
reverseWords(s)
console.log(s.join(''));