/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// • Time complexity: O（n*t）
// • Space complexity: O（n*t）
var findTargetSumWays = function (nums, target) {
	const dp = {}; // i-total -> # of ways

	function backtrack(i, total) {
		if (i === nums.length) {
			if (total === target) {
				return 1; // 1 way
			} else {
				return 0;
			}
		}
		if (dp[`${i}-${total}`] != null) {
			return dp[`${i}-${total}`];
		}

		// backtrack(i + 1, total + i) -> switch to next nums, add + current num
		// backtrack(i + 1, total - i) -> switch to next nums, add - current num
		dp[`${i}-${total}`] = backtrack(i + 1, total + nums[i]) + backtrack(i + 1, total - nums[i]);

		return dp[`${i}-${total}`];
	}

	return backtrack(0, 0);
};
