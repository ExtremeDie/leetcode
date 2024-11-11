/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time complexity: O(logn)
// Space complexity: O(1)
var searchRange = function (nums, target) {
	const left = binarySearch(nums, target, true);
	const right = binarySearch(nums, target, false);
	return [left, right];
};

// leftBias boolean, if false means right bias
function binarySearch(nums, target, leftBias) {
	let l = 0;
	let r = nums.length - 1;
	let i = -1; // if no result

	while (l <= r) {
		const mid = Math.floor((l + r) / 2);

		if (target < nums[mid]) {
			r = mid - 1;
		} else if (target > nums[mid]) {
			l = mid + 1;
		} else {
			i = mid;
			if (leftBias) {
				r = mid - 1;
			} else {
				l = mid + 1;
			}
		}
	}
	return i;
}
