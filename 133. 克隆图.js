/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) return null;
    let map = new Map();
    const dfs = (element) => {
        if (map.has(element.val)) return map.get(element.val);
        let newNode = new Node(element.val);
        map.set(element.val, newNode);
        for (let n of element.neighbors) {
            newNode.neighbors.push(dfs(n));
        }
        return newNode;
    }
    return dfs(node);
};