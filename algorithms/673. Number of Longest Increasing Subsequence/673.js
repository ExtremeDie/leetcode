/**
 * @param {number[]} nums
 * @return {number}
 */
// Time Complexity: O(n²)
// Space Complexity: O(n)
var findNumberOfLIS = function (nums) {
	const dp = {}; // index -> [maxLIS, maxCount]
	let globalLIS = 0;
	let globalCount = 0;

	for (let i = nums.length - 1; i >= 0; i--) {
		let maxLIS = 1;
		let maxCount = 1;

		for (let j = i + 1; j < nums.length; j++) {
			if (nums[j] > nums[i]) {
				const [length, count] = dp[j];
				if (length + 1 > maxLIS) {
					maxLIS = length + 1;
					maxCount = count;
				} else if (length + 1 === maxLIS) {
					maxCount += count;
				}
			}
		}

		if (maxLIS > globalLIS) {
			globalLIS = maxLIS;
			globalCount = maxCount;
		} else if (maxLIS === globalLIS) {
			globalCount += maxCount;
		}

		dp[i] = [maxLIS, maxCount];
	}
	return globalCount;
};
