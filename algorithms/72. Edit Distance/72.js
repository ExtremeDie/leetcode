/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// top bottom
// • Time complexity: O（m *n）
// • Space complexity: O（m *n）
var minDistance = function (word1, word2) {
	const m = word1.length;
	const n = word2.length;

	// dp[i][j] represents the minimum number of operations to make them same
	const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));

	for (let i = 0; i <= m; i++) {
		dp[i][0] = i;
	}
	for (let i = 0; i <= n; i++) {
		dp[0][i] = i;
	}

	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (word1[i - 1] === word2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1];
			} else {
				// Find the minimum of:
				//  - dp[i - 1][j] : deletion
				//  - dp[i][j - 1] : insertion
				//  - dp[i - 1][j - 1] : substitution
				dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
			}
		}
	}

	return dp[m][n];
};

// bottom up (easier)
// • Time complexity: O（m *n）
// • Space complexity: O（m *n）
var minDistance = function (word1, word2) {
	const m = word1.length;
	const n = word2.length;

	// dp[i][j] represents the minimum number of operations to make them same
	const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));

	// Initialize last row based on remaining characters in word1 (deletion operations)
	for (let i = 0; i <= m; i++) {
		dp[i][n] = m - i;
	}
	// Initialize last column based on remaining characters in word2 (insertion operations)
	for (let j = 0; j <= n; j++) {
		dp[m][j] = n - j;
	}

	for (let i = m - 1; i >= 0; i--) {
		for (let j = n - 1; j >= 0; j--) {
			if (word1[i] === word2[j]) {
				dp[i][j] = dp[i + 1][j + 1];
			} else {
				// Otherwise, consider the minimum of three operations:
				// - Insertion: dp[i][j + 1] + 1
				// - Deletion: dp[i + 1][j] + 1
				// - Replacement: dp[i + 1][j + 1] + 1
				dp[i][j] = 1 + Math.min(dp[i + 1][j], dp[i][j + 1], dp[i + 1][j + 1]);
			}
		}
	}
	return dp[0][0];
};
