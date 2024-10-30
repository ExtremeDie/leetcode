/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	let goal = nums.length - 1;

	for (let i = nums.length - 1; i >= 0; i--) {
		if (i + nums[i] >= goal) {
			goal = i;
		}
	}

	return goal === 0;
};

function canJump(nums) {
	const n = nums.length;
	const dp = new Array(n).fill(false); // Initialize dp array with false
	dp[0] = true; // Starting point is always reachable

	for (let i = 0; i < n; i++) {
		if (dp[i]) {
			// If the current index is reachable
			// n - 1 to prevent out of bound
			const maxJump = Math.min(i + nums[i], n - 1);
			for (let j = i + 1; j <= maxJump; j++) {
				dp[j] = true;
			}
		}
	}

	return dp[n - 1]; // Check if the last index is reachable
}
