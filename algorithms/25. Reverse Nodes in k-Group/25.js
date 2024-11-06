/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// •	Time Complexity: O(n) — We visit each node once.
// •	Space Complexity: O(1) — We only use a constant amount of extra space.
var reverseKGroup = function (head, k) {
	const dummy = new ListNode(0, head);
	let prevEnd = dummy;

	while (head) {
		const groupStart = head;
		const groupEnd = getGroupEnd(groupStart, k);

		if (!groupEnd) break;

		// 1. Connect the previous group's tail to the reversed current group
		prevEnd.next = reverseList(groupStart, groupEnd.next);

		// 2. Update prevEnd to the tail of the current group (groupStart)
		prevEnd = groupStart;

		// 3. Move head to the next node after the reversed group
		head = prevEnd.next;
	}
	return dummy.next;
};

var getGroupEnd = function (head, k) {
	if (!head) return null;

	while (head && k > 1) {
		head = head.next;
		k--;
	}
	return head;
};

var reverseList = function (head, stop) {
	let prev = stop;

	while (head !== stop) {
		let headNext = head.next;
		head.next = prev;
		prev = head;
		head = headNext;
	}
	return prev;
};
