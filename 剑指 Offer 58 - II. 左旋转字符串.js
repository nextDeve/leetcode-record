/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    let arr = Array.from(s);
    let l = arr.length;
    const reverse = (arr, start, end) => {
        while (start <= end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    reverse(arr,0,n - 1);
    reverse(arr,n, l - 1);
    reverse(arr,0, l - 1);
    return arr.join('')
};
console.log(reverseLeftWords('lrloseumgh', 6))
