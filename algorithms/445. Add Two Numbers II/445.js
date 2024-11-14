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
// Time complexity: O(m + n)
// 'm' and 'n' are the lengths of the two linked lists, l1 and l2

// Space complexity: O(m + n)
// 'm' and 'n' are the lengths of the two linked lists, l1 and l2
var addTwoNumbers = function (l1, l2) {
	const stack1 = [];
	const stack2 = [];

	while (l1) {
		stack1.push(l1.val);
		l1 = l1.next;
	}

	while (l2) {
		stack2.push(l2.val);
		l2 = l2.next;
	}

	let carry = 0;
	let dummy = null; // important to set as null

	while (stack1.length || stack2.length || carry) {
		const val1 = stack1.pop() || 0;
		const val2 = stack2.pop() || 0;

		const total = val1 + val2 + carry;
		carry = Math.floor(total / 10);

		const newNode = new ListNode(total % 10);
		newNode.next = dummy;
		dummy = newNode;
	}
	return dummy;
};
