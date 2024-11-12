function numDistinctIslands(grid: number[][]): number {
	const ROWS = grid.length;
	const COLS = grid[0].length;

	const distinctIsland = new Set();
	const visited = new Set();

	let rowStart;
	let colStart;
	function dfs(r, c, shape) {
		if (r < 0 || r >= ROWS || c < 0 || c >= COLS || visited.has(`${r}-${c}`) || grid[r][c] === 0) {
			return;
		}

		visited.add(`${r}-${c}`);

		shape.push([r - rowStart, c - colStart]);

		dfs(r + 1, c, shape);
		dfs(r - 1, c, shape);
		dfs(r, c + 1, shape);
		dfs(r, c - 1, shape);
	}

	for (let r = 0; r < ROWS; r++) {
		for (let c = 0; c < COLS; c++) {
			if (grid[r][c] === 1 && !visited.has(`${r}-${c}`)) {
				rowStart = r;
				colStart = c;
				const shape = [];
				dfs(r, c, shape);
				distinctIsland.add(JSON.stringify(shape));
			}
		}
	}
	return distinctIsland.size;
}
