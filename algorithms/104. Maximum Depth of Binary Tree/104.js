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
// recursive DFS
var maxDepth = function (root) {
	if (!root) return 0;

	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// BFS with queue
var maxDepth = function (root) {
	if (!root) return 0;

	const queue = [root];
	let depth = 0;
	while (queue.length > 0) {
		const size = queue.length;
		for (let i = 0; i < size; i++) {
			const node = queue.shift();
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		depth++;
	}
	return depth;
};

// iterative DFS with stack
var maxDepth = function (root) {
	if (!root) return 0;

	const stack = [[root, 1]];
	let maxDepth = 1;
	while (stack.length > 0) {
		const [node, depth] = stack.pop();
		maxDepth = Math.max(maxDepth, depth);
		if (node.left) stack.push([node.left, depth + 1]);
		if (node.right) stack.push([node.right, depth + 1]);
	}
	return maxDepth;
};
