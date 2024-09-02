/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
	const rows = board.length;
	const columns = board[0].length;

	const dfs = (r, c, i) => {
		if (i === word.length) return true;

		// out of bound
		if (r < 0 || r >= rows || c < 0 || c >= columns) return false;

		if (word[i] !== board[r][c]) return false;

		const visited = board[r][c];
		board[r][c] = '.'; // set to anything to mark as visited

		const res = dfs(r + 1, c, i + 1) || dfs(r - 1, c, i + 1) || dfs(r, c + 1, i + 1) || dfs(r, c - 1, i + 1);

		board[r][c] = visited; // restore original value
		return res;
	};

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < columns; c++) {
			if (dfs(r, c, 0)) return true;
		}
	}

	return false;
};
