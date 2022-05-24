/**
 * @param {number[]} arr
 * @return {number[]}
 */
var transformArray = function (arr) {
    let flag = false;
    let l = arr.length;
    let i;
    if (l <= 2) return arr;
    while (true) {
        let newArr = new Array(...arr);
        for (i = 1; i < l - 1; i++) {
            if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
                newArr[i]--;
                flag = true;
            }
            if (arr[i - 1] > arr[i] && arr[i] < arr[i + 1]) {
                newArr[i]++;
                flag = true;
            }
        }
        arr = newArr;
        if (flag === true) {
            flag = false;
        } else {
            return arr;
        }
    }
};

