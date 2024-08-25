/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
	if (lists.length === 0) return null;

	while (lists.length > 1) {
		const l1 = lists.shift();
		const l2 = lists.shift();
		const merged = mergeLists(l1, l2);

		lists.push(merged);
	}
	return lists[0];
};

var mergeLists = function (l1, l2) {
	if (!l1) return l2;
	if (!l2) return l1;

	if (l1.val < l2.val) {
		l1.next = mergeLists(l1.next, l2);
		return l1;
	}

	l2.next = mergeLists(l1, l2.next);
	return l2;
};

var mergeLists = function (l1, l2) {
	const dummy = new ListNode();
	let tail = dummy;

	while (l1 && l2) {
		if (l1.val < l2.val) {
			tail.next = l1;
			l1 = l1.next;
		} else {
			tail.next = l2;
			l2 = l2.next;
		}
		tail = tail.next;
	}

	if (!l1) tail.next = l2;
	if (!l2) tail.next = l1;
	return dummy.next;
};
