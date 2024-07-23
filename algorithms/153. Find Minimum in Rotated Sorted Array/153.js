/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	let min = nums[0];
	let l = 0,
		r = nums.length - 1;

	while (l <= r) {
		if (nums[r] >= nums[l]) {
			min = Math.min(min, nums[l]);
			break;
		}

		let m = Math.floor((l + r) / 2);
		min = Math.min(min, nums[m]);
		if (nums[m] >= nums[l]) {
			l = m + 1;
		} else {
			r = m - 1;
		}
	}
	return min;
};

var findMin = function (nums) {
	let l = 0,
		r = nums.length - 1;

	while (l < r) {
		let m = Math.floor(l + (r - l) / 2);

		if (nums[m] < nums[r]) {
			r = m;
		} else {
			l = m + 1;
		}
	}
	return nums[l];
};
