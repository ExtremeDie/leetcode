/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
	if (!head || !head.next) return;

	// find middle of the list
	let slow = head;
	let fast = head.next;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	// reverse the second half of the list
	let second = slow.next;
	let prev = null;
	while (second) {
		let tempNext = second.next;
		second.next = prev;
		prev = second;
		second = tempNext;
	}
	// split the list into two
	slow.next = null;

	// merge the two lists
	let first = head;
	second = prev;
	while (first && second) {
		let tempFirstNext = first.next;
		let tempSecondNext = second.next;
		first.next = second;
		second.next = tempFirstNext;
		first = tempFirstNext;
		second = tempSecondNext;
	}
};
