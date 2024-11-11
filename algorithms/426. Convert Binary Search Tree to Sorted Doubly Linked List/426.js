/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
	if (!root) return root;
	let last = null;
	let first = null;

	dfs(root);
	last.right = first;
	first.left = last;

	return first;

	function dfs(root) {
		if (!root) {
			return;
		}
		dfs(root.left);

		if (!last) {
			first = root;
		} else {
			root.left = last;
			last.right = root;
		}

		// set current as last since visited
		last = root;

		dfs(root.right);
	}
};
