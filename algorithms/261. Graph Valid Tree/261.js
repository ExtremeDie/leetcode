class Solution {
	/**
	 * @param {number} n
	 * @param {number[][]} edges
	 * @returns {boolean}
	 */
	validTree(n, edges) {
		if (n === 1) return edges.length === 0;

		const map = new Map();

		for (const edge of edges) {
			const [node1, node2] = edge;
			if (!map.has(node1)) {
				map.set(node1, []);
			}
			if (!map.has(node2)) {
				map.set(node2, []);
			}
			map.get(node1).push(node2);
			map.get(node2).push(node1);
		}

		const visited = new Set();
		return this.dfs(0, -1, visited, map) && visited.size === n;
	}

	dfs(node, previous, visited, map) {
		if (visited.has(node)) return false; // loop exists

		visited.add(node);

		for (let neighbor of map.get(node)) {
			if (neighbor === previous) {
				continue;
			}

			if (!this.dfs(neighbor, node, visited, map)) return false;
		}
		return true;
	}
}
