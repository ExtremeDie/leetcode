/**
 * @param {character[][]} matrix
 * @return {number}
 */
// Time Complexity: O(ROWS * COLS)
// Space Complexity: O(ROWS * COLS)
var maximalSquare = function (matrix) {
	const ROWS = matrix.length;
	const COLS = matrix[0].length;

	const cache = {}; // position -> max length of square

	function helper(r, c) {
		if (r >= ROWS || c >= COLS) {
			return 0;
		}

		if (cache[`${r}-${c}`] == null) {
			cache[`${r}-${c}`] = 0; // default is 0
			// cannot be inside == 1 because we need to ensure running for all position
			const down = helper(r + 1, c);
			const right = helper(r, c + 1);
			const diag = helper(r + 1, c + 1);

			if (matrix[r][c] == 1) {
				cache[`${r}-${c}`] = 1 + Math.min(down, right, diag);
			}
		}
		return cache[`${r}-${c}`];
	}

	helper(0, 0);
	return Math.max(...Object.values(cache)) ** 2;
};

/**
 * @param {character[][]} matrix
 * @return {number}
 */
// bottom up
// Time Complexity: O(ROWS * COLS)
// Space Complexity: O(ROWS * COLS)
var maximalSquare = function (matrix) {
	const ROWS = matrix.length;
	const COLS = matrix[0].length;

	const dp = new Array(ROWS + 1).fill().map(() => new Array(COLS + 1).fill(0));
	let maxLength = 0;

	for (let r = ROWS - 1; r >= 0; r--) {
		for (let c = COLS - 1; c >= 0; c--) {
			if (matrix[r][c] == 1) {
				dp[r][c] = 1 + Math.min(dp[r + 1][c], dp[r][c + 1], dp[r + 1][c + 1]);
				maxLength = Math.max(maxLength, dp[r][c]);
			}
		}
	}

	return maxLength * maxLength;
};
