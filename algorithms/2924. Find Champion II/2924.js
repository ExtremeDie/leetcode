/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function (n, edges) {
	// Step 1: Initialize an in-degree array
	const inDegree = new Array(n).fill(0);

	// Step 2: Populate the in-degree array
	for (const [k, v] of edges) {
		inDegree[v]++;
	}

	// Step 3: Find nodes with in-degree 0
	const sources = [];
	for (let i = 0; i < n; i++) {
		if (inDegree[i] === 0) {
			sources.push(i);
		}
	}

	// Step 4: Check for uniqueness
	if (sources.length === 1) {
		return sources[0]; // Return the unique champion
	}
	return -1;
};
