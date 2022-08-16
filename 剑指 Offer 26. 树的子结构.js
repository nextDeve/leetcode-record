/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    if (!B) return false;
    let isSubTree = false;
    const dfs = (nodeA) => {
        if (isSubTree || !nodeA) return;
        if (nodeA.val === B.val) {
            isSubTree = judgement(nodeA, B);
        }
        dfs(nodeA.left);
        dfs(nodeA.right);
    }
    const judgement = (nodeA, nodeB) => {
        if (!nodeA && nodeB) return false;
        if ((!nodeA && !nodeB) || (nodeA && !nodeB)) return true;
        if (nodeA.val !== nodeB.val) return false;
        if (!nodeB.left && !nodeB.right && nodeB.val === nodeA.val) return true;
        return judgement(nodeA.left, nodeB.left) && judgement(nodeA.right, nodeB.right)
    }
    dfs(A);
    return isSubTree;
};