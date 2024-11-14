/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let l = 0;
	let r = nums.length - 1;

	while (l <= r) {
		const mid = Math.floor(l + (r - l) / 2);

		if (nums[mid] === target) return mid;

		// When dividing the roated array into two halves, one must be sorted.

		// Check if the left side is sorted
		if (nums[l] <= nums[mid]) {
			if (nums[l] <= target && target <= nums[mid]) {
				r = mid - 1;
			} else {
				l = mid + 1;
			}

			// Otherwise, the right side is sorted
		} else {
			if (nums[mid] <= target && target <= nums[r]) {
				l = mid + 1;
			} else {
				r = mid - 1;
			}
		}
	}

	return -1;
};
