// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const map = {}; // diff -> index
	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i];
		// important to check for != null cause diff can be 0
		if (map[diff] != null) {
			return [map[diff], i];
		}
		map[nums[i]] = i;
	}
	return [];
};

var twoSum = function (nums, target) {
	const map = new Map(); // diff -> index
	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i];
		if (map.has(diff)) {
			return [map.get(diff), i];
		}
		map.set(nums[i], i);
	}
	return [];
};

const case1 = [2, 7, 11, 15];
console.log(twoSum(case1, 9));
