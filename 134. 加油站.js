/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let n = gas.length;
    let i = 0;
    while (i < n) {
        let [sumGas, sumCost] = [0, 0];
        let count = 0;
        while (count < n) {
            let index = (i + count) % n;
            sumGas += gas[index];
            sumCost += cost[index];
            if (sumCost > sumGas) break;
            count++;
        }
        if (count === n) return i;
        else {
            i = count + i + 1;
        }
    }
    return -1;
};