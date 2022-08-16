/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = removeSpace(Array.from(s)).reverse();
    let start = 0, end, nextStart = 0;
    while (nextStart < arr.length) {
        end = start;
        while (end + 1 < arr.length && arr[end + 1] !== ' ') {
            end++;
        }
        nextStart = end + 2;
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++, end--;
        }
        start = nextStart;
    }
    return arr.join('');
};
/**
 * @param {Array} s 
 * @return {Array}
 */
var removeSpace = (s) => {
    let fast = 0, slow = 0;
    while (fast < s.length) {
        if (s[fast] === ' ' && (slow === 0 || s[slow - 1] === ' ')) {
            fast++;
        } else {
            if (slow < fast) {
                s[slow] = s[fast];
            }
            fast++;
            slow++;
        }
    }
    if (s[slow - 1] === ' ') {
        slow--;
    }
    s.length = slow;
    return s;
}
console.log(reverseWords("  hello world  "))

