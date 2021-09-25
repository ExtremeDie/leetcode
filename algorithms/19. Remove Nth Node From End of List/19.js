/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	let fast = head,
		slow = head;

	// make fast at n+1 position
	for (let i = 0; i < n; i++) fast = fast.next;
	if (!fast) return head.next; // n is the same as the length of the list, removing the first, so return 2nd node
	while (fast && fast.next) (fast = fast.next), (slow = slow.next);
	slow.next = slow.next.next;
	return head;
};
