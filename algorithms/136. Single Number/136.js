/**
 * @param {number[]} nums
 * @return {number}
 */
// Time complexity: O(n）
// Space complexity: O(1）
var singleNumber = function (nums) {
	let res = 0;
	for (const num of nums) {
		res = res ^ num;
	}
	return res;
};
