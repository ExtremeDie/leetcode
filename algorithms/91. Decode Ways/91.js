/**
 * @param {string} s
 * @return {number}
 */

// recursion
// time: O(2^n)
// space: O(n) due to the maximum recursion depth
var numDecodings = function (s) {
	const helper = (i) => {
		if (i === s.length) {
			return 1;
		}
		if (s[i] === '0') {
			return 0;
		}
		let ways = helper(i + 1);
		if (i + 1 < s.length && s.substring(i, i + 2) <= 26) {
			ways += helper(i + 2);
		}
		return ways;
	};
	return helper(0);
};

// top down DP with map
// time: O(n)
// space: O(n)
var numDecodings = function (s) {
	const dp = {
		[s.length]: 1,
	};

	const dfs = (i) => {
		if (dp[i]) return dp[i];
		if (s[i] === '0') return 0;
		let ways = dfs(i + 1);

		if (i + 1 < s.length && s.substring(i, i + 2) <= 26) {
			ways += dfs(i + 2);
		}
		dp[i] = ways;
		return ways;
	};

	return dfs(0);
};

// top down DP with array (faster than map)
// time: O(n)
// space: O(n)
var numDecodings = function (s) {
	const dp = new Array(s.length).fill(-1);
	dp[s.length] = 1;

	const dfs = (i) => {
		if (dp[i] !== -1) return dp[i];
		if (s[i] === '0') return 0;
		let ways = dfs(i + 1);

		if (i + 1 < s.length && s.substring(i, i + 2) <= 26) {
			ways += dfs(i + 2);
		}
		dp[i] = ways;
		return ways;
	};

	return dfs(0);
};

// bottom up
// time: O(n)
// space: O(n)
var numDecodings = function (s) {
	const dp = new Array(s.length);
	dp[s.length] = 1;

	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === '0') {
			dp[i] = 0;
		} else {
			dp[i] = dp[i + 1];
			if (i + 1 < s.length && s.substring(i, i + 2) <= 26) {
				dp[i] += dp[i + 2];
			}
		}
	}
	return dp[0];
};

console.log(numDecodings('06'));
