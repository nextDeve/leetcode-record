/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function (num) {
    let strNumArr = Array.from(num.toString());
    let mirrorMap = new Map([['8', '8'], ['6', '9'], ['9', '6'], ['1', '1'], ['0', '0']]);
    let left = 0, right = strNumArr.length - 1;
    while (left <= right) {
        if (!mirrorMap.has(strNumArr[left])) return false;
        else {
            if (mirrorMap.get(strNumArr[left]) === strNumArr[right]) {
                left++, right--;
                continue;
            }
            else return false;
        }
    }
    return true;
};
console.log(isStrobogrammatic(609));