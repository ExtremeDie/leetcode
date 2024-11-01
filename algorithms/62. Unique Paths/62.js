/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// time: O(m * n)
// space: O(n)
var uniquePaths = function (m, n) {
	let row = new Array(n).fill(1); // last row are all 1

	// loop all the m-1 rows, bottom up
	for (let i = 0; i < m - 1; i++) {
		let newRow = new Array(n).fill(1);
		// loop all the columns from m-2, m-1 last column is also always 1
		for (let j = n - 2; j >= 0; j--) {
			newRow[j] = newRow[j + 1] + row[j];
		}
		row = newRow;
	}

	return row[0];
};

var uniquePaths = function (m, n) {
	const dp = new Array(m).fill().map(() => new Array(n).fill(0));

	// Base case: There's only one way to reach the starting cell
	dp[0][0] = 1;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i > 0) {
				dp[i][j] += dp[i - 1][j];
			}
			if (j > 0) {
				dp[i][j] += dp[i][j - 1];
			}
		}
	}
	return dp[m - 1][n - 1];
};
