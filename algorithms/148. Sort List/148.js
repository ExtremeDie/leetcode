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
	if (!head || !head.next) return head;

	// split the list into two
	let first = head;
	let second = getMid(head);
	const secondNext = second.next;
	second.next = null;
	second = secondNext;

	let left = sortList(first);
	let right = sortList(second);
	return merge(left, right);
};

function getMid(head) {
	let slow = head;
	let fast = head.next;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}

function merge(left, right) {
	const dummy = new ListNode();
	let tail = dummy;

	while (left && right) {
		if (left.val < right.val) {
			tail.next = left;
			left = left.next;
		} else {
			tail.next = right;
			right = right.next;
		}
		tail = tail.next;
	}

	tail.next = left || right;
	return dummy.next;
}
