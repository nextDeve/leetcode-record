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
var sortList = function (head) {
    if (!head) return head;
    let nodes = [];
    while (head) {
        nodes.push(head);
        head = head.next;
    }
    nodes.sort((a, b) => a.val - b.val);
    let root = nodes.shift();
    nodes.forEach((v, i) => {
        x.next = nodes[i + 1] ? nodes[i + 1] : null
    })
    return root;
};