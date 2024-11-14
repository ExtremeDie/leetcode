/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
	if (!root) {
		return 'N'; // Use 'N' to represent null nodes
	}
	return root.val + ',' + serialize(root.left) + ',' + serialize(root.right);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
	const dataArr = data.split(',');
	let index = 0;

	const dfs = () => {
		const val = dataArr[index];
		index++;
		if (val === 'N') {
			return null;
		}
		const root = new TreeNode(parseInt(val));
		root.left = dfs();
		root.right = dfs();
		return root;
	};
	return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
