/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let dummy = new ListNode();
	let curr = dummy;

	let carry = 0;
	while (l1 || l2 || carry) {
		let total = carry;

		if (l1) {
			total += l1.val;
			l1 = l1.next;
		}
		if (l2) {
			total += l2.val;
			l2 = l2.next;
		}
		carry = Math.floor(total / 10);

		const nodeVal = total % 10;
		curr.next = new ListNode(nodeVal);
		curr = curr.next;
	}

	return dummy.next;
};
