var moveZeroes = function (nums) {
    let lastIndex = nums.length - 1
    let startIndex = 0
    function swap(arr, i, j) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[startIndex] != 0) {
            startIndex++;
            continue
        } else {
            for (let j = startIndex; j < lastIndex; j++) {
                swap(nums, j, j + 1);
            }
            lastIndex--
        }

    }
    return nums;
};

console.log(moveZeroes(x));