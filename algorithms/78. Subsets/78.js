/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
	const res = [];

	const subset = [];

	function dfs(i) {
		if (i >= nums.length) {
			res.push([...subset]);
			return;
		}

		// include num i
		subset.push(nums[i]);
		dfs(i + 1);

		// do not include num i
		subset.pop();
		dfs(i + 1);
	}
	dfs(0);
	return res;
};
