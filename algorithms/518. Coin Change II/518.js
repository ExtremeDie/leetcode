/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// recursive DFS (slow)
// time: O(n * amount)
// space: O(n * amount)
var change = function (amount, coins) {
	const dp = {};

	function dfs(i, currAmount) {
		if (i >= coins.length) {
			return 0;
		}
		if (currAmount > amount) {
			return 0;
		}
		if (currAmount === amount) {
			// found answer
			return 1; // 1 combination
		}
		// check dp cache
		if (dp[`${i}-${currAmount}`] != null) return dp[`${i}-${currAmount}`];

		// dfs(i, currAmount + coins[i]) -> use current coin, remain i to allow reuse and add to currAmount
		// dfs(i + 1, currAmount) -> don't use current coin, so i + 1 and no add to currAmount
		dp[`${i}-${currAmount}`] = dfs(i, currAmount + coins[i]) + dfs(i + 1, currAmount);

		return dp[`${i}-${currAmount}`];
	}
	return dfs(0, 0);
};

// DP solution
// Time complexity: O(n * amount)
// n is number of coins

// Space complexity: O(amount)
var change = function (amount, coins) {
	const dp = new Array(amount + 1).fill(0);
	dp[0] = 1; // 1 way to achieve amount 0 (using no coin)

	for (const coin of coins) {
		// we loop from coin to end of amount
		for (let a = coin; a <= amount; a++) {
			dp[a] += dp[a - coin]; // no need worry about overflow because we start from coin
		}
	}

	return dp[amount];
};
