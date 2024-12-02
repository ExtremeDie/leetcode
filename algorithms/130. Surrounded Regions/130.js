/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
	const rows = board.length;
	const cols = board[0].length;

	function dfs(r, c) {
		if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== 'O') {
			return;
		}

		board[r][c] = 'T';
		dfs(r + 1, c);
		dfs(r - 1, c);
		dfs(r, c + 1);
		dfs(r, c - 1);
	}

	// DFS to capture unsurrounded area from the 4 borders (O -> T)
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			if (board[r][c] === 'O' && (r === 0 || r === rows - 1 || c === 0 || c === cols - 1)) {
				dfs(r, c);
			}
		}
	}

	// capture surrounded regions (O -> X)
	// uncapture unsurrounded regions (T -> O)
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			if (board[r][c] === 'T') {
				board[r][c] = 'O';
			} else {
				board[r][c] = 'X';
			}
		}
	}
};
