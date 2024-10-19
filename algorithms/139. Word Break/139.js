/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// recursion
// time:O(2 ^ n) in the worst case due to exploring all possible segmentations
// space: O(n) for the recursion stack.
var wordBreak = function (s, wordDict) {
	const dict = new Set(wordDict);
	return recursive(0);
	function recursive(i) {
		if (i >= s.length) {
			return true;
		}

		for (let j = i; j < s.length; j++) {
			// from i till j + 1 and
			// from j + 1 till last
			if (dict.has(s.slice(i, j + 1)) && recursive(j + 1)) {
				return true;
			}
		}
		return false;
	}
};

// recursion with memo
// time: O(n * n) due to caching results and avoiding redundant calculations
// space: O(n) for the memo array
var wordBreak = function (s, wordDict) {
	const dict = new Set(wordDict);
	const memo = {};
	return recursive(0);
	function recursive(i) {
		if (i >= s.length) {
			return true;
		}

		if (memo[i]) return memo[i];

		for (let j = i; j < s.length; j++) {
			// from i till j + 1 and
			// from j + 1 till last
			if (dict.has(s.slice(i, j + 1)) && recursive(j + 1)) {
				memo[i] = true;
				return true;
			}
		}
		memo[i] = false;
		return false;
	}
};

// top to bottom iterative
// Time complexity: O(n * m * k)
// n is length of input string.
// m is number of words in wordDict
// k is average size of substrings.
//* easiest
var wordBreak = function (s, wordDict) {
	let dp = new Array(s.length + 1).fill(false);
	dp[0] = true;

	for (let i = 1; i <= s.length; i++) {
		for (const word of wordDict) {
			const start = i - word.length;
			if (start >= 0 && dp[start] && s.slice(start, i) === word) {
				dp[i] = true;
				break;
			}
		}
	}
	return dp[s.length];
};

// bottom up iterative
// Time complexity: O(n * m * k)
var wordBreak = function (s, wordDict) {
	let dp = new Array(s.length + 1).fill(false);
	dp[s.length] = true;

	for (let i = s.length; i >= 0; i--) {
		for (const word of wordDict) {
			if (i + word.length <= s.length && s.slice(i, i + word.length) === word) {
				dp[i] = dp[i + word.length];
			}
			if (dp[i]) {
				break;
			}
		}
	}
	return dp[0];
};

var s = 'cars';
var wordDict = ['car', 'ca', 'rs'];
const result = wordBreak(s, wordDict);
console.log('🚀 ~ result:', result);
