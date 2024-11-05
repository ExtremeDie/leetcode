/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Time complexity: 0(n）
// Space complexity: O(n）
var rightSideView = function (root) {
	const res = [];
	const q = [root];

	while (q.length) {
		const size = q.length;
		let rightSide;
		for (let i = 0; i < size; i++) {
			const node = q.shift();
			if (node) {
				rightSide = node;
				q.push(node.left);
				q.push(node.right);
			}
		}
		if (rightSide) {
			res.push(rightSide.val);
		}
	}
	return res;
};
