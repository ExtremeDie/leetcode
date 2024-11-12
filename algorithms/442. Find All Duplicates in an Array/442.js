/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
	const res = [];

	for (let i = 0; i < nums.length; i++) {
		const n = Math.abs(nums[i]);
		if (nums[n - 1] < 0) {
			// duplicate
			res.push(n);
		}
		nums[n - 1] = -nums[n - 1];
	}
	return res;
};
