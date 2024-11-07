/**
 * @param {number} n
 * @return {string[][]}
 */
// • Time complexity: O（n！）
// • Space complexity: 0（n2）
var solveNQueens = function (n) {
	const res = [];

	const cols = new Set();
	const posDiag = new Set();
	const negDiag = new Set();

	const board = new Array(n).fill().map(() => new Array(n).fill('.'));

	function dfs(r) {
		if (r >= n) {
			res.push(board.map((e) => e.join('')));
			return;
		}

		for (let c = 0; c < n; c++) {
			if (cols.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
				continue;
			}

			cols.add(c);
			posDiag.add(r + c);
			negDiag.add(r - c);
			board[r][c] = 'Q';

			dfs(r + 1);

			cols.delete(c);
			posDiag.delete(r + c);
			negDiag.delete(r - c);
			board[r][c] = '.';
		}
	}
	dfs(0);
	return res;
};
