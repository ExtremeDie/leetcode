/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
	if (!node) return null;

	const oldToNew = new Map();

	const dfs = (node) => {
		if (oldToNew.has(node)) return oldToNew.get(node);

		const cloned = new _Node(node.val);
		oldToNew.set(node, cloned);

		for (const neighbor of node.neighbors) {
			cloned.neighbors.push(dfs(neighbor));
		}
		return cloned;
	};
	return dfs(node);
};
