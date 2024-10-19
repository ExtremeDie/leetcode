/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	let res = nums[0];
	let currMax = nums[0];
	let currMin = nums[0];

	// start from 1
	for (let i = 1; i < nums.length; i++) {
		const newMax = Math.max(nums[i], nums[i] * currMax, nums[i] * currMin);
		const newMin = Math.min(nums[i], nums[i] * currMax, nums[i] * currMin);
		currMax = newMax;
		currMin = newMin;

		res = Math.max(res, currMax); // update the res to max
	}
	return res;
};
