/**
 * @param {number[]} nums
 * @return {number[][]}
 */
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
