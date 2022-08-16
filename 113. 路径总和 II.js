/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    let path = [];
    let res = [];
    const dfs = (node, target) => {
        if (!node) return;
        path.push(node.val);
        if (!node.left && !node.right && target === node.val) {
            res.push(Array.from(path));
        }
        target -= node.val;
        dfs(node.left, target);
        dfs(node.right, target);
        path.pop()
    }
    dfs(root, targetSum);
    return res;
};