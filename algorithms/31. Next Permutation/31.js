/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
	const n = nums.length;

	// find largest i that nums[i] < nums[i + 1]
	let i = n - 2;
	while (i >= 0 && nums[i] >= nums[i + 1]) {
		i--;
	}

	// if that exist
	if (i >= 0) {
		// find the largest index j > i such that nums[j] > nums[i]
		let j = n - 1;
		while (nums[j] <= nums[i]) {
			j--;
		}
		swap(nums, i, j);
	}

	reverse(nums, i + 1, n - 1);
};

function swap(nums, i, j) {
	const temp = nums[i];
	nums[i] = nums[j];
	nums[j] = temp;
}

function reverse(nums, i, j) {
	while (i < j) {
		swap(nums, i, j);
		i++;
		j--;
	}
}
