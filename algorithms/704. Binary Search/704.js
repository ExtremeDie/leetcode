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

var search = function (nums, target) {
	let l = 0;
	let r = nums.length - 1;

	while (l <= r) {
		const mid = Math.floor((l + r) / 2);
		// const mid = Math.floor(l + (r - l) / 2);
		// const mid = l + Math.floor((r - l) / 2);

		if (nums[mid] === target) {
			return mid;
		} else if (target < nums[mid]) {
			r = mid - 1;
		} else {
			l = mid + 1;
		}
	}
	return -1;
};
