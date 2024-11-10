/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Time Complexity: O(N)
// Space Complexity: O(1)
var longestOnes = function (nums, k) {
	let l = 0;
	let r = 0;

	let maxLength = 0;
	let zeroCount = 0;

	while (r < nums.length) {
		if (nums[r] === 0) {
			zeroCount++;
		}

		while (zeroCount > k) {
			if (nums[l] === 0) {
				zeroCount--;
			}
			l++;
		}

		maxLength = Math.max(maxLength, r - l + 1);
		r++;
	}
	return maxLength;
};
