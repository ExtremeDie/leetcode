/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
	const n = nums.length;
	const totalOnes = nums.reduce((acc, cur) => acc + cur, 0);
	let windowOnes = nums.slice(0, totalOnes).reduce((acc, cur) => acc + cur, 0);
	let max = windowOnes;
	for (let i = totalOnes; i < nums.length * 2; i++) {
		windowOnes += nums[i % n] - nums[(i - totalOnes) % n];
		max = Math.max(max, windowOnes);
	}
	return totalOnes - max; // num of swaps
};
