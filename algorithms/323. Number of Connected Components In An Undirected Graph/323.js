class Solution {
	/**
	 * @param {number} n
	 * @param {number[][]} edges
	 * @returns {number}
	 */
	countComponents(n, edges) {
		// Parent array to represent the disjoint set forest
		const parent = new Array(n);

		// Initialize each node to be its own parent
		for (let i = 0; i < n; i++) {
			parent[i] = i;
		}

		// Function to find the root of the set that 'x' belongs to
		function findParent(node) {
			if (node !== parent[node]) {
				parent[node] = findParent(parent[node]);
			}
			return parent[node];
		}

		// Union the sets that the edges connect
		console.log('🚀 ~ Solution ~ countComponents ~ parent:', parent);
		for (const [a, b] of edges) {
			// Perform union by setting the parent of the representative of 'a'
			// to the representative of 'b'
			parent[findParent(a)] = findParent(b);
			console.log('🚀 ~ Solution ~ countComponents ~ parent:', parent);
		}

		// Count the number of connected components
		// by counting the number of nodes that are their own parent
		let count = 0;
		for (let i = 0; i < n; i++) {
			if (i === findParent(i)) {
				count++;
			}
		}
		return count;
	}
}

let n = 6;
let edges = [
	[0, 1],
	[1, 2],
	[2, 3],
	[4, 5],
];

const sol = new Solution();
const res = sol.countComponents(n, edges);
console.log('🚀 ~ res:', res);
