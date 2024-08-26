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
	const data = [];

	const dfs = (node) => {
		if (!node) {
			data.push('N');
			return;
		}
		data.push(node.val);
		dfs(node.left);
		dfs(node.right);
	};
	dfs(root);
	return data.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
	const dataArr = data.split(',');

	const dfs = () => {
		if (dataArr.length === 0) return null;
		const val = dataArr.shift();
		if (val === 'N') return null;
		const root = new TreeNode(val);
		root.left = dfs();
		root.right = dfs();
		return root;
	};
	return dfs();
};

var deserialize = function (data) {
	const dataArr = data.split(',');
	let index = 0;

	const dfs = () => {
		const val = dataArr[index];
		if (val === 'N') {
			index++;
			return null;
		}
		const root = new TreeNode(val);
		index++;
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
