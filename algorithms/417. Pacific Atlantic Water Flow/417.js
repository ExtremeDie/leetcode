/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
	const ROWS = heights.length;
	const COLS = heights[0].length;
	const pac = new Set();
	const atl = new Set();
	const res = [];

	function dfs(r, c, visit, prevHeight) {
		if (visit.has(`${r}-${c}`)) {
			return;
		}
		if (
			r < 0 ||
			c < 0 ||
			r >= ROWS ||
			c >= COLS ||
			heights[r][c] < prevHeight // check less than prevHeight because the condition from cell to ocean is >=
		) {
			return;
		}
		visit.add(`${r}-${c}`);
		dfs(r + 1, c, visit, heights[r][c]);
		dfs(r - 1, c, visit, heights[r][c]);
		dfs(r, c + 1, visit, heights[r][c]);
		dfs(r, c - 1, visit, heights[r][c]);
	}

	for (let row = 0; row < ROWS; row++) {
		dfs(row, 0, pac, heights[row][0]);
		dfs(row, COLS - 1, atl, heights[row][COLS - 1]);
	}

	for (let col = 0; col < COLS; col++) {
		dfs(0, col, pac, heights[0][col]);
		dfs(ROWS - 1, col, atl, heights[ROWS - 1][col]);
	}

	// check for duplicates as the answer
	for (let row = 0; row < ROWS; row++) {
		for (let col = 0; col < COLS; col++) {
			if (pac.has(`${row}-${col}`) && atl.has(`${row}-${col}`)) {
				res.push([row, col]);
			}
		}
	}

	return res;
};
