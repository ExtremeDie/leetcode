/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// time: O(text1.length * text2.length)
// space: O((text1.length + 1)* (text2.length + 1))
var longestCommonSubsequence = function (text1, text2) {
	let dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0));

	for (let i = text1.length - 1; i >= 0; i--) {
		for (let j = text2.length - 1; j >= 0; j--) {
			if (text1[i] === text2[j]) {
				dp[i][j] = 1 + dp[i + 1][j + 1];
			} else {
				dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
			}
		}
	}
	return dp[0][0];
};

var longestCommonSubsequence = function (text1, text2) {
	const m = text1.length;
	const n = text2.length;
	const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));
	dp[0][0] = 0; // empty string has 0 LCS

	// start at 1
	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			// -1 because of 0 index
			if (text1[i - 1] === text2[j - 1]) {
				dp[i][j] = 1 + dp[i - 1][j - 1];
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
			}
		}
	}

	return dp[m][n];
};

const text1 = 'abcde';
const text2 = 'ace';
const res = longestCommonSubsequence(text1, text2);
console.log('🚀 ~ res:', res);
