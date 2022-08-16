/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
    let r = root;
    const dfs = (node) => {
        if (!node) return;
        [node.left, node.right] = [node.right, node.left];
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return r;
};