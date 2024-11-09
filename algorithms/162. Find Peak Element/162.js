/**
 * @param {number[]} nums
 * @return {number}
 */
// Time Complexity: O(log n) due to the binary search.
// Space Complexity: O(1) as we are only using constant extra space.
var findPeakElement = function (nums) {
	let l = 0;
	let r = nums.length - 1;

	while (l < r) {
		const mid = Math.floor((l + r) / 2);

		if (nums[mid] < nums[mid + 1]) {
			l = mid + 1;
		} else {
			r = mid;
		}
	}
	return l;
};
