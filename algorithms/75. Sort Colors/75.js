/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Time complexity: O(n)
// Space complexity: O(1)
// We have only red, white and blue colors.
// two passes
var sortColors = function (nums) {
	const count = {
		0: 0,
		1: 0,
		2: 0,
	};

	for (const num of nums) {
		count[num]++;
	}

	let index = 0;
	for (let color = 0; color < 3; color++) {
		const colorCount = count[color];
		for (let j = 0; j < colorCount; j++) {
			nums[index] = color;
			index++;
		}
	}
};

// Time complexity: O(n)
// Space complexity: O(1)
// We have only red, white and blue colors.
// one passes
var sortColors = function (nums) {
	let l = 0;
	let r = nums.length - 1;
	let i = 0;

	while (i <= r) {
		if (nums[i] === 0) {
			swap(l, i);
			l++;
			i++;
		} else if (nums[i] === 1) {
			i++;
		} else {
			swap(i, r);
			r--;
			// no need to increment i, because we need to check the swapped value again
		}
	}

	function swap(i, j) {
		let temp = nums[i];
		nums[i] = nums[j];
		nums[j] = temp;
	}
};
