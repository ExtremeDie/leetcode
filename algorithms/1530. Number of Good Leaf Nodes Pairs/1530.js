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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
	let res = 0;

	function dfs(root) {
		if (!root) return [];
		if (!root.left && !root.right) return [1];

		const left = dfs(root.left);
		const right = dfs(root.right);

		for (let l of left) {
			for (let r of right) {
				if (l + r <= distance) {
					res++;
				}
			}
		}

		return [...left, ...right].map((e) => e + 1);
	}

	dfs(root);
	return res;
};
