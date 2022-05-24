var TwoSum = function () {
    this.data = []
    this.sorted = false
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
    this.data.push(number)
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
    if (!this.sorted) this.data.sort((a,b)=>a-b);
    let sum;
    let left = 0, right = this.data.length - 1;
    while (left < right) {
        sum = this.data[left] + this.data[right];
        if (sum === value) return true;
        else if (sum < value) left++;
        else right--;
    }
    return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

var obj = new TwoSum()
obj.add(3)
obj.add(1)
obj.add(2)
console.log(obj.find(2));
console.log(obj.find(3));
console.log(obj.find(4));
console.log(obj.find(5));
console.log(obj.find(6)); 
