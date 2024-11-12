/**
 * @param {number[]} nums
 * @return {number}
 */
// Time: O(nlogn)
var minIncrementForUnique = function (nums) {
	nums.sort((a, b) => a - b);
	let res = 0;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i - 1] >= nums[i]) {
			res += 1 + nums[i - 1] - nums[i];
			nums[i] = nums[i - 1] + 1;
		}
	}

	return res;
};

// * still wrong
// var minIncrementForUnique = function (nums) {
// 	const map = new Map();

// 	for (const num of nums) {
// 		map.set(num, (map.get(num) || 0) + 1);
// 	}

// 	let res = 0;
// 	for (let i = 0; i < nums.length + Math.max(...nums); i++) {
// 		if ((map.get(nums[i]) || 0) > 1) {
// 			const extra = map.get(nums[i]) - 1;
// 			map.set(nums[i] + 1, (map.get(nums[i] + 1) || 0) + extra);
// 			res += extra;
// 		}
// 	}
// 	return res;
// };
