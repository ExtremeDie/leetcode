/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
// recursion
var isInterleave = function (s1, s2, s3) {
	if (s1.length + s2.length !== s3.length) return false;
	const dp = {};

	const dfs = function (i, j) {
		// both out of bound is the empty space, so true because empty matches empty
		if (i === s1.length && j === s2.length) return true;

		if (dp[`${i}-${j}`] != null) return dp[`${i}-${j}`];

		if (i < s1.length && s1[i] === s3[i + j] && dfs(i + 1, j)) return true;
		if (j < s2.length && s2[j] === s3[i + j] && dfs(i, j + 1)) return true;
		dp[`${i}-${j}`] = false;
		return false;
	};

	return dfs(0, 0);
};

// bottom up
var isInterleave = function (s1, s2, s3) {
	const m = s1.length;
	const n = s2.length;
	if (m + n !== s3.length) return false;

	const dp = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false));
	dp[m][n] = true;

	for (let i = m; i >= 0; i--) {
		for (let j = n; j >= 0; j--) {
			if (i < m && s1[i] === s3[i + j] && dp[i + 1][j]) {
				dp[i][j] = true;
			}
			if (j < n && s2[j] === s3[i + j] && dp[i][j + 1]) {
				dp[i][j] = true;
			}
		}
	}

	return dp[0][0];
};
