/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var plusOne = function (head) {
    let flag = plus(head);
    if (flag) {
        return new ListNode(1, head);
    }
    return head;
};
/**
 * 
 * @param {ListNode} node 
 */
function plus(node) {
    let join = false;
    if (node.next ) {
        join = plus(node.next);
    } else {
        node.val += 1;
        if (node.val === 10) {
            node.val = 0;
            return true;
        }
    }
    if (join) {
        node.val += 1;
        if (node.val === 10) {
            node.val = 0;
            return true;
        }
    }
    return false;
}