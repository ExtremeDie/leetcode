/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (nums.length === 1) return nums[0];
	return Math.max(helper(nums.slice(0, -1)), helper(nums.slice(1)));
};

const helper = (nums) => {
	let prevRob = 0;
	let maxRob = 0;

	for (const n of nums) {
		const newMax = Math.max(n + prevRob, maxRob);
		prevRob = maxRob;
		maxRob = newMax;
	}
	return maxRob;
};
