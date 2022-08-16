/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let [dp1, dp2, dp3] = [-prices[0], 0, 0];
    for (let i = 1; i < prices.length; i++) {
        [dp1Cpoy, dp2Cpoy, dp3Cpoy] = [dp1, dp2, dp3]
        dp1 = Math.max(dp1Cpoy, dp3Cpoy - prices[i]);
        dp2 = dp1Cpoy + prices[i];
        dp3 = Math.max(dp2Cpoy, dp3Cpoy);
    }
    return Math.max(dp1, dp2, dp3);
};