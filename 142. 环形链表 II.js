/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (!head) return null;
    let current = head;
    let doubleCurrent = head;
    while (doubleCurrent) {
        current = current.next;
        if (!current) return null;
        if (doubleCurrent.next) doubleCurrent = doubleCurrent.next.next;
        else return null;
        if (current === doubleCurrent) {
            let root = head;
            while (root !== current) {
                root = root.next;
                current = current.next;
            }
            return root;
        }
    }
    return null;
};