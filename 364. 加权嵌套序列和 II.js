/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function (nestedList) {
    let elements = [];
    let depths = [];
    getElementAndDepth(nestedList, elements, depths, 1)
    let maxDepth = Math.max(...depths);
    depths = depths.map((e) => maxDepth - e + 1);
    return elements.reduce((p, c, i) => p + c * depths[i], 0)
};
/**
 * 
 * @param {NestedInteger[]} nestedList 
 * @param {number[]} elements 
 * @param {number[]} depths 
 * @param {number} nodeDepth 
 */
function getElementAndDepth(nestedList, elements, depths, nodeDepth) {
    for (let node of nestedList) {
        if (!node.isInteger()) {
            getElementAndDepth(node.getList(), elements, depths, nodeDepth + 1);
        } else {
            elements.push(node.getInteger());
            depths.push(nodeDepth);
        }
    }
}