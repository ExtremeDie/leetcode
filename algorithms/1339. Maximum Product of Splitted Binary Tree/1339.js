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
// Time complexity: O(N)
// Space complexity: O(N)
var maxProduct = function (root) {
	const sums = [];

	function dfs(root) {
		if (!root) return 0;

		const left = dfs(root.left);
		const right = dfs(root.right);

		const sum = left + right + root.val;
		sums.push(sum);
		return sum;
	}

	const totalSum = dfs(root);
	let max = 0;
	for (const sum of sums) {
		max = Math.max(max, (totalSum - sum) * sum);
	}
	return max % (10 ** 9 + 7);
};
