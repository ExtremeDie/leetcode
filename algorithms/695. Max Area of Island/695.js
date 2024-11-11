/**
 * @param {number[][]} grid
 * @return {number}
 */
// • Time complexity: O（m *n）
// • Space complexity: O（m *n）
var maxAreaOfIsland = function (grid) {
	const ROWS = grid.length;
	const COLS = grid[0].length;

	const visited = new Set();

	function dfs(r, c) {
		if (r < 0 || r >= ROWS || c < 0 || c >= COLS || visited.has(`${r}-${c}`) || grid[r][c] === 0) {
			return 0;
		}

		visited.add(`${r}-${c}`);
		return 1 + dfs(r + 1, c) + dfs(r, c + 1) + dfs(r - 1, c) + dfs(r, c - 1);
	}

	let res = 0;
	for (let r = 0; r < ROWS; r++) {
		for (let c = 0; c < COLS; c++) {
			res = Math.max(res, dfs(r, c));
		}
	}
	return res;
};
