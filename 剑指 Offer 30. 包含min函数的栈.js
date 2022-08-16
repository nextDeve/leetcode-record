/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.data = [];
    this.minArr = [];
    this.size = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.data.push(x);
    if (this.size === 0) {
        this.minArr.push(x);
    } else {
        if (x < this.minArr[this.size - 1]) {
            this.minArr.push(x);
        } else {
            this.minArr.push(this.minArr[this.size - 1]);
        }
    }
    this.size++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.size--;
    this.minArr.pop();
    return this.data.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.data[this.size - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.minArr[this.size - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
