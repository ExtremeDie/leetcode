/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
	const queue = [[0, 0, 1]]; // r, c, length
	const n = grid.length;
	const visited = new Set();
	visited.add(`0-0`);

	const direction = [
		[0, 1],
		[1, 0],
		[1, 1],
		[-1, 0],
		[0, -1],
		[-1, -1],
		[1, -1],
		[-1, 1],
	];

	while (queue.length) {
		const [r, c, length] = queue.shift();

		const key = `${r}-${c}`;
		if (Math.min(r, c) < 0 || Math.max(r, c) >= n || grid[r][c] === 1) {
			continue;
		}

		// found solution
		if (r === n - 1 && c === n - 1) {
			return length;
		}

		// bfs
		for (const [dr, dc] of direction) {
			const newKey = `${r + dr}-${c + dc}`;
			// * special, only check the visited here
			if (!visited.has(newKey)) {
				queue.push([r + dr, c + dc, length + 1]);
				visited.add(newKey);
			}
		}
	}
	return -1;
};
