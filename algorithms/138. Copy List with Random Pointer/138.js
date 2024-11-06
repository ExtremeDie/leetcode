/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
	const oldToCopy = new Map();
	oldToCopy.set(null, null);

	let curr = head;
	while (curr) {
		const newNode = new _Node(curr.val);
		oldToCopy.set(curr, newNode);

		curr = curr.next;
	}

	curr = head;
	while (curr) {
		// must use oldToCopy.get instead of oldToCopy[]
		const newNode = oldToCopy.get(curr);
		newNode.next = oldToCopy.get(curr.next);
		newNode.random = oldToCopy.get(curr.random);

		curr = curr.next;
	}
	return oldToCopy.get(head);
};
