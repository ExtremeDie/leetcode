/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	let low = 0,
		high = nums.length; // we might need to inseart at the end
	while (low < high) {
		// breaks if low == high
		const mid = low + Math.floor((high - low + 1) / 2); // upper mid
		if (target < nums[mid]) {
			// shrink high
			high = mid - 1;
		} else {
			low = mid;
		}
	}
	return low;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert1 = function (nums, target) {
	let low = 0,
		high = nums.length; // we might need to inseart at the end
	while (low < high) {
		// breaks if low == high
		const mid = low + Math.floor((high - low) / 2); // lower mid
		if (target > nums[mid]) {
			// shrink low
			low = mid + 1;
		} else {
			high = mid;
		}
	}
	return low;
};
