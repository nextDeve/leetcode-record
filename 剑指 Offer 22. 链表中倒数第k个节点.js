/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    let ret = new Array(k);
    let index = 0;
    while (head !== null) {
        index %= k;
        ret[index++] = head;
        head = head.next;
    }
    return ret[index % k];
};