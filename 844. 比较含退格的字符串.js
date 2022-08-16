/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let sA = Array.from(s), tA = Array.from(t);
    const remove = (arr) => {
        let slow = fast = 0;
        while (fast < arr.length) {
            if (arr[fast] === '#') {
                slow = slow - 1 >= 0 ? slow - 1 : 0;
            } else {
                if (slow < fast) {
                    arr[slow]= arr[fast]
                }
                slow++;
            }
            fast++;
        }
        arr.length = slow;
    }
    remove(sA);
    remove(tA);
    return sA.join('') === tA.join('');
};