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

var lengthOfLIS = function (nums) {
	const n = nums.length;
	if (n === 0) return 0;

	const tails = [nums[0]];

	for (let i = 0; i < nums.length; i++) {
		// If nums[i] is greater than the largest tail, it extends the longest subsequence
		if (nums[i] > tails[tails.length - 1]) {
			tails.push(nums[i]);
		} else {
			// Find the index of the smallest tail greater than or equal to nums[i] using binary search
			let left = 0;
			let right = tails.length - 1;

			while (left < right) {
				const mid = Math.floor((left + right) / 2);

				if (tails[mid] < nums[i]) {
					left = mid + 1;
				} else {
					right = mid;
				}
			}
			// Replace the smallest tail greater than or equal to nums[i] with nums[i]
			tails[left] = nums[i];
		}
	}

	// The length of the `tails` array represents the length of the longest increasing subsequence
	return tails.length;
};

const nums = [10, 9, 2, 5, 3, 7, 101, 18];

const res = lengthOfLIS(nums);
console.log('🚀 ~ res:', res);
