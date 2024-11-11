/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// • Time complexity: O（n！ *n^2）
// • Space complexity: O（n！ *n）
var permute = function (nums) {
	if (nums.length === 0) return [];

	// Base case for a single element array
	if (nums.length === 1) return [nums];

	const res = [];

	const permutations = permute(nums.slice(1));

	for (const p of permutations) {
		// add nums 0 to front middle and end of p
		for (let i = 0; i <= p.length; i++) {
			const pCopy = [...p];
			// insert nums 0 to i position
			pCopy.splice(i, 0, nums[0]);
			res.push(pCopy);
		}
	}
	return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	const backtrack = (start) => {
		if (start === nums.length) {
			res.push([...nums]);
			return;
		}

		for (let i = start; i < nums.length; i++) {
			[nums[start], nums[i]] = [nums[i], nums[start]];
			backtrack(start + 1);
			[nums[start], nums[i]] = [nums[i], nums[start]];
		}
	};

	const res = [];
	backtrack(0);
	return res;
};
