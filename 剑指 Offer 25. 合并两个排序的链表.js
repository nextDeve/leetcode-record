/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let head, root;
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
        root = head = l1;
        l1 = l1.next;
    } else {
        root = head = l2;
        l2 = l2.next;
    }
    while (l1 && l2) {
        if (l1.val < l2.val) {
            root.next = l1;
            l1 = l1.next;
        } else {
            root.next = l2;
            l2 = l2.next;
        }
        root=root.next
    }
    if (l1) {
        root.next = l1;
    }
    if (l2) {
        root.next = l2;
    }
    return head;
};