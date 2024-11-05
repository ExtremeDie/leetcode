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
 * @return {number}
 */
// Time complexity: 0(n）
// Space complexity: O(n）
var goodNodes = function (root) {
	function dfs(root, maxValue) {
		if (!root) return 0;

		let res = root.val >= maxValue ? 1 : 0;
		maxValue = Math.max(maxValue, root.val);
		res += dfs(root.left, maxValue);
		res += dfs(root.right, maxValue);
		return res;
	}
	return dfs(root, root.val);
};
