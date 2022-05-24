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
var maximumAverageSubtree = function (root) {
    let max = Number.MIN_SAFE_INTEGER;
    const find = (node) => {
        let sum = node.val, num = 1, res;
        if (node.left) {
            res = find(node.left);
            [sum, num] = [sum + res[0], num + res[1]];
        }
        if (node.right) {
            res = find(node.right);
            [sum, num] = [sum + res[0], num + res[1]];
        }
        if (!node.left && !node.right) {
            max = Math.max(max, node.val);
            return [node.val, num];
        } else {
            max = Math.max(max, sum / num);
            return [sum, num]
        }
    }
    find(root);
    return max;
};