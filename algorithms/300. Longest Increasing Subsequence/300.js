/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
	const dp = new Array(nums.length).fill(1);

	for (let i = nums.length - 1; i >= 0; i--) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] < nums[j]) {
				dp[i] = Math.max(dp[i], 1 + dp[j]);
			}
		}
	}

	return Math.max(...dp);
};

const nums = [10, 9, 2, 5, 3, 7, 101, 18];

const res = lengthOfLIS(nums);
console.log('🚀 ~ res:', res);
