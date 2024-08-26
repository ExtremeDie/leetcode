/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	let rob = 0;
	let noRob = 0;
	for (let i = 0; i < nums.length; i++) {
		let newRob = noRob + nums[i];
		let newNoRob = Math.max(rob, noRob);
		rob = newRob;
		noRob = newNoRob;
	}
	return Math.max(rob, noRob);
};
var rob = function (nums) {
	const n = nums.length;
	if (n === 1) {
		return nums[0];
	}
	const dp = new Array(n).fill(0);
	dp[0] = nums[0];
	dp[1] = Math.max(nums[0], nums[1]);

	for (let i = 2; i < n; i++) {
		dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
	}

	return dp[n - 1];
};
