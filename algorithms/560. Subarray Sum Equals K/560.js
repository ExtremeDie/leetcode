/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Time complexity: O(n)
// Space complexity: O(n)
var subarraySum = function (nums, k) {
	const map = new Map();
	map.set(0, 1); // 1 way to get 0
	let sum = 0;
	let res = 0;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];

		const diff = sum - k;
		res += map.get(diff) || 0;

		map.set(sum, (map.get(sum) || 0) + 1);
	}
	return res;
};
