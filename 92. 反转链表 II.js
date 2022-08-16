/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let root = head;
    let index = 1;
    let changeHeader;
    while (index < left) {
        changeHeader = root
        root = root.next;
        index++;
    }
    let current = root;
    let next = current.next;
    let temp;
    while (index < right) {
        temp = next.next;
        changeHeader.next.next = temp;
        next.next = current;
        current = next;
        next = temp;
        index++;
    }
    return changeHeader ? head : current;
};