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
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function (root) {
    let head = null;
    function reverse(root, pre) {
        if (root === null) return null;
        reverse(root.left, root);
        if (head === null) head = root;
        if (pre !== null) {
            root.left = pre.right;
            root.right = pre;
            pre.right = null;
            pre.left = null;
        }
    }
    if (root === null || root.left === null) return root;
    reverse(root.left, root);
    return head;
};