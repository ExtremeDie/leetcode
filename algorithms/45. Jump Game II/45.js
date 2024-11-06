/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
	let res = 0;
	let l = 0;
	let r = 0;

	while (r < nums.length - 1) {
		let furthest = 0;
		for (let i = l; i <= r; i++) {
			furthest = Math.max(furthest, i + nums[i]);
		}
		res++;
		l = r + 1;
		r = furthest;
	}

	return res;
};

var jump = function (nums) {
	// minimum jumps to reach i
	const dp = new Array(nums.length).fill(Infinity);
	dp[0] = 0; // 0 jump to reach 0

	// loop until n - 2 because last one is the result
	for (let i = 0; i < nums.length - 1; i++) {
		const maxJumps = Math.min(nums.length - 1, i + nums[i]);
		// jump until all maxJumps <=
		for (let j = i; j <= maxJumps; j++) {
			dp[j] = Math.min(dp[j], dp[i] + 1);
		}
	}
	return dp[nums.length - 1];
};
