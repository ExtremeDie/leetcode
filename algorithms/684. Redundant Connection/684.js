/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
	const parent = new Array(edges.length + 1).fill().map((e, i) => i); // not using 0 so + 1

	function findParent(node) {
		if (node != parent[node]) {
			parent[node] = findParent(parent[node]);
		}
		return parent[node];
	}

	function union(a, b) {
		parent[findParent(a)] = findParent(b);
	}

	for (const [a, b] of edges) {
		if (findParent(a) === findParent(b)) {
			// both already same parent (connected), this edge will result in cycle graph
			return [a, b];
		} else {
			union(a, b);
		}
	}
};
