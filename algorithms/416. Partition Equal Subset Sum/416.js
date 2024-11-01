/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
	const sum = nums.reduce((acc, curr) => acc + curr, 0);

	if (sum % 2 === 1) {
		// odd, can never partition equally
		return false;
	}

	const target = sum / 2;
	const dp = new Array(target + 1).fill(false);
	// Base case: We can always form a subset with sum 0 (empty set).
	dp[0] = true;

	for (const num of nums) {
		// Iterate backwards to avoid double-counting
		for (let i = target; i >= num; i--) {
			// dp[i]: True if sum 'i' is possible using elements processed so far.
			// dp[i - num]: True if sum 'i - num' was possible BEFORE considering the current 'num'.
			dp[i] = dp[i] || dp[i - num];
		}
	}
	return dp[target];
};
