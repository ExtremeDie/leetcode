/**
 * @param {number[][]} grid
 * @return {number}
 */
// • Time complexity: O（m *n）
// • Space complexity: O（m*n）
var orangesRotting = function (grid) {
	const q = []; // rotten

	const rows = grid.length;
	const columns = grid[0].length;

	let time = 0;
	let fresh = 0;
	const directions = [
		[0, 1],
		[1, 0],
		[-1, 0],
		[0, -1],
	];
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			if (grid[i][j] === 1) {
				fresh++;
			} else if (grid[i][j] === 2) {
				q.push([i, j]);
			}
		}
	}

	// bfs
	while (q.length && fresh > 0) {
		const size = q.length;
		for (let i = 0; i < size; i++) {
			const [r, c] = q.shift();

			for (const [dr, dc] of directions) {
				let row = r + dr;
				let col = c + dc;

				// skip if out of bound and not fresh
				if (row < 0 || row >= rows || col < 0 || col >= columns || grid[row][col] !== 1) {
					continue;
				}

				grid[row][col] = 2;
				q.push([row, col]);
				fresh--;
			}
		}
		time++;
	}
	return fresh === 0 ? time : -1;
};
