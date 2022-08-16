/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let parentMap = new Map([[root, null]]);
    let nodes = [root];
    while (nodes.length) {
        let node = nodes.shift();
        if (node.left) {
            parentMap.set(node.left, node);
            nodes.push(node.left)
        };
        if (node.right) {
            parentMap.set(node.right, node);
            nodes.push(node.right);
        }
    }
    let pVisited = [p.val];
    while (parentMap.get(p)) {
        pParent = parentMap.get(p);
        pVisited.push(pParent.val)
        p = pParent;
    }
    while (parentMap.get(q)) {
        console.log(q);
        if (pVisited.indexOf(q.val) >= 0) return q;
        else q = parentMap.get(q);
        console.log(q);
    }
};