/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let max = nums[0];
	let currentSum = 0;

	for (const num of nums) {
		if (currentSum < 0) {
			currentSum = 0;
		}
		currentSum += num;
		max = Math.max(max, currentSum);
	}
	return max;
};
