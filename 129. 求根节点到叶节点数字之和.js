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
 * @return {number}
 */
var sumNumbers = function (root) {
    let res = 0;
    let path = [];
    const dfs = (node) => {
        if (!node) return;
        path.push(node.val)
        if (!node.left && !node.right) {
            res += Number(path.join(''));
        }
        dfs(node.left);
        dfs(node.right);
        path.pop();
    }
    return res;
};