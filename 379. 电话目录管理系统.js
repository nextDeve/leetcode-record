/**
 * @param {number} maxNumbers
 */
var PhoneDirectory = function (maxNumbers) {
    this.phones = new Array(maxNumbers).fill(false);
    this.released = new Array();
    this.rest = maxNumbers;
    this.index = 0;
};

/**
 * @return {number}
 */
PhoneDirectory.prototype.get = function () {
    let ans;
    if (this.rest === 0) return -1;
    if (this.released.length !== 0) {
        this.rest -= 1;
        ans = this.released.shift();
    }
    else if (this.index < this.phones.length) {
        ans = this.index;
        this.rest -= 1;
        this.index += 1;
    }
    this.phones[ans] = true;
    return ans;
};

/** 
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function (number) {
    return !this.phones[number];
};

/** 
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function (number) {
    if (this.phones[number]) {
        this.released.push(number);
        this.phones[number] = false;
        this.rest += 1;
    }
};

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */