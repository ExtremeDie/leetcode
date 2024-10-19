/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// time: O(n^2)
// space: O(n)
var threeSum = function (nums) {
	const res = [];
	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		let l = i + 1;
		let r = nums.length - 1;
		while (l < r) {
			const sum = nums[i] + nums[l] + nums[r];
			if (sum > 0) r--;
			else if (sum < 0) l++;
			else {
				res.push([nums[i], nums[l], nums[r]]);
				l++;
				while (nums[l] === nums[l - 1] && l < r) l++;
			}
		}
	}
	return res;
};

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
