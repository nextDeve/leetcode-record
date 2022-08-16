/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    const judgement = (left, right) => {
        if ((!left && right) || (left && !right)) return false;
        if (!left && !right) return true;
        return left.val === right.val && judgement(left.left, right.right) && judgement(left.right, right.left);
    }
    return judgement(root, root);
};