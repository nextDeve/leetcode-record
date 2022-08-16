/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    if (!root1 && !root2) {
        return null;
    }
    let root = new TreeNode();
    const dfs = (node, node1, node2) => {
        if (node1 && node2) node.val = node1.val + node2.val;
        if (node1 && !node2) node.val = node1.val;
        if (!node1 && node2) node.val = node2.val;
        if ((node1 && node1.left) || (node2 && node2.left)) {
            node.left = new TreeNode();
            dfs(node.left, node1 ? node1.left : null, node2 ? node2.left : null);
        }
        if ((node1 && node1.right) || (node2 && node2.right)) {
            node.right = new TreeNode();
            dfs(node.right, node1 ? node1.right : null, node2 ? node2.right : null);
        }
    }
    dfs(root, root1, root2);
    return root;
};