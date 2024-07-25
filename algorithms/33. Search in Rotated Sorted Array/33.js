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

		if (nums[l] <= nums[mid]) {
			// left portion
			if (nums[l] <= target && target < nums[mid]) {
				r = mid - 1;
			} else {
				l = mid + 1;
			}
		} else {
			// right portion
			if (nums[mid] < target && target <= nums[r]) {
				l = mid + 1;
			} else {
				r = mid - 1;
			}
		}
	}

	return -1;
};
