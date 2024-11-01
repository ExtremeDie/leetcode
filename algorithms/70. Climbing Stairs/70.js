/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	let one = 1;
	let two = 1;

	for (let i = 0; i < n - 1; i++) {
		const temp = one;
		one = one + two;
		two = temp;
	}
	return one;
};

// Time complexity: O(n)
// n is number of steps to reach the top.

// Space complexity: O(n)
// For dp list
var climbStairs = function (n) {
	const dp = new Array(n + 1);
	dp[0] = 1;
	dp[1] = 1;

	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}

	return dp[n];
};
