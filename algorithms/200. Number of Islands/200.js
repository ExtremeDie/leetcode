/**
 * @param {character[][]} grid
 * @return {number}
 */
// BFS
// Time Complexity: O(M * N)
// Space Complexity: O(M * N)
var numIslands = function (grid) {
	let islands = 0;
	const rows = grid.length;
	const columns = grid[0].length;
	const visited = new Set();

	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];

	const bfs = (r, c) => {
		const q = [];
		visited.add(`${r} ${c}`);
		q.push([r, c]);

		while (q.length > 0) {
			const [row, column] = q.pop();

			for (const [dr, dc] of directions) {
				const newR = row + dr;
				const newC = column + dc;
				if (newR >= 0 && newC >= 0 && newR < rows && newC < columns && grid[newR][newC] === '1' && !visited.has(`${newR} ${newC}`)) {
					q.push([newR, newC]);
					visited.add(`${newR} ${newC}`);
				}
			}
		}
	};

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < columns; c++) {
			if (grid[r][c] === '1' && !visited.has(`${r} ${c}`)) {
				bfs(r, c);
				islands++;
			}
		}
	}

	return islands;
};

// DFS
// Time Complexity: O(M * N)
// Space Complexity: O(M * N)
var numIslands = function (grid) {
	let island = 0;
	const visited = new Set();
	const rows = grid.length;
	const cols = grid[0].length;

	function dfs(r, c) {
		if (r < 0 || r >= rows || c < 0 || c >= cols || visited.has(`${r}-${c}`) || grid[r][c] === '0') {
			return;
		}

		visited.add(`${r}-${c}`);

		dfs(r - 1, c);
		dfs(r + 1, c);
		dfs(r, c - 1);
		dfs(r, c + 1);
	}

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			if (grid[r][c] === '1' && !visited.has(`${r}-${c}`)) {
				dfs(r, c);
				island++;
			}
		}
	}

	return island;
};
