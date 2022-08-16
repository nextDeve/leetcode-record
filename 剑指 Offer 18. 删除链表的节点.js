/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    let root = head;
    if (root.val === val) return root.next;
    while (root && root.next) {
        if (root.next.val === val) break;
        root = root.next;
    }
    if (!root) return head;
    else {
        root.next = root.next.next;
    }
    return head;
};