/**
 * @param {number[]} nums
 * @return {number}
 */
var pathSum = function (nums) {
    let map = new Map;
    for (let num of nums) {
        let strNum = num.toString();
        if (strNum[0] === '1') map.set(strNum.slice(0, 2), { left: undefined, right: undefined, value: parseInt(strNum[2]) });
        else {
            let parent = (parseInt(strNum[0]) - 1).toString() + (Math.floor((parseInt(strNum[1]) - 1) / 2) + 1).toString();
            
            map.set(strNum.slice(0, 2), { parent, value: parseInt(strNum[2]) })
        }
    }
};