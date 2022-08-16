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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    const nodes = [];
    const PD = (node) => {
        if (node) nodes.push(node);
        else return;
        if (node.left) {
            PD(node.left)
        };
        if (node.right) {
            PD(node.right)
        }
    }
    PD(root);
    for (let i = 1; i < nodes.length; i++) {
        nodes[i - 1].left = null;
        nodes[i - 1].right = nodes[i];
    }
};     