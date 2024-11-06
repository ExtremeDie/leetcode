/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Time: O(n * 2^n)
// Space: O(n * 2^n)
var subsetsWithDup = function (nums) {
	const res = [];
	nums.sort((a, b) => a - b); // sorting is important to remove duplicates

	function dfs(i, subset) {
		if (i >= nums.length) {
			res.push([...subset]);
			return;
		}

		// include i
		subset.push(nums[i]);
		dfs(i + 1, subset);

		// dont include i
		subset.pop();

		// skip all duplicates
		while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
			i++;
		}
		dfs(i + 1, subset);
	}
	dfs(0, []);
	return res;
};
