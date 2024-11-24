/**
 * @param {number[]} nums - An array of numbers
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
	const n = nums.length;

	// Step 1: Find the first decreasing element from the end
	let i = n - 2;
	while (i >= 0 && nums[i] >= nums[i + 1]) {
		i--;
	}

	// If a decreasing element is found, we need to rearrange the numbers to get the next permutation
	if (i >= 0) {
		// Step 2: Find the smallest element larger than nums[i] from the end
		let j = n - 1;
		while (nums[j] <= nums[i]) {
			j--;
		}
		// Step 3: Swap nums[i] and nums[j]
		swap(nums, i, j);
	}

	// Step 4: Reverse the numbers from index i+1 to the end of the array
	reverse(nums, i + 1, n - 1);
};

/**
 * Helper function to swap elements at indices i and j in array nums
 * @param {number[]} nums - The array of numbers
 * @param {number} i - The index of the first element to swap
 * @param {number} j - The index of the second element to swap
 */
function swap(nums, i, j) {
	const temp = nums[i];
	nums[i] = nums[j];
	nums[j] = temp;
}

/**
 * Helper function to reverse elements from index i to j in array nums
 * @param {number[]} nums - The array of numbers
 * @param {number} i - The starting index of the reversal
 * @param {number} j - The ending index of the reversal
 */
function reverse(nums, i, j) {
	while (i < j) {
		swap(nums, i, j);
		i++;
		j--;
	}
}
