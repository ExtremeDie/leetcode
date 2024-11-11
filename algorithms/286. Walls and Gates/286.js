class Solution {
	/**
	 * @param {number[][]} grid
	 */
	// Multi Source BFS
	// • Time complexity: O（m *n）
	// • Space complexity: O（m *n）
	islandsAndTreasure(grid) {
		const ROWS = grid.length;
		const COLS = grid[0].length;

		const q = []; // [r.c]
		const visited = new Set();

		for (let r = 0; r < ROWS; r++) {
			for (let c = 0; c < COLS; c++) {
				if (grid[r][c] === 0) {
					q.push([r, c]);
					visited.add(`${r}-${c}`);
				}
			}
		}

		function checkRoom(r, c) {
			if (r < 0 || r >= ROWS || c < 0 || c >= COLS || grid[r][c] == -1 || visited.has(`${r}-${c}`)) {
				return;
			}
			q.push([r, c]);
			visited.add(`${r}-${c}`);
		}

		let distance = 0;
		while (q.length) {
			const size = q.length;
			for (let i = 0; i < size; i++) {
				const [r, c] = q.shift();
				grid[r][c] = distance;

				checkRoom(r + 1, c);
				checkRoom(r - 1, c);
				checkRoom(r, c + 1);
				checkRoom(r, c - 1);
			}
			distance++;
		}
	}
}
