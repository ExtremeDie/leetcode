/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let low = 0,
		high = nums.length - 1;
	while (low < high) {
		let mid = low + Math.floor((high - low + 1) / 2); // right/upper mid
		if (target < nums[mid]) {
			// minimize upper boundary
			high = mid - 1;
		} else {
			// minimize lower boundary
			low = mid;
		}
	}

	return nums[low] == target ? low : -1;
};
