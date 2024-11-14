/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// Time Complexity: Approximately O(k \cdot 2^N) in the worst case, with practical performance being faster due to optimizations.
// Space Complexity: O(N)
var canPartitionKSubsets = function (nums, k) {
	const sum = nums.reduce((acc, curr) => acc + curr, 0);
	if (sum % k) {
		return false;
	}

	const target = sum / k;
	nums.sort((a, b) => b - a); // descending order to speed up because of base case check
	const visited = new Array(nums.length).fill(false);

	function backtrack(i, k, subsetSum) {
		if (k === 0) {
			return true;
		}
		if (target === subsetSum) {
			return backtrack(0, k - 1, 0);
		}

		for (let j = i; j < nums.length; j++) {
			if (visited[j] || subsetSum + nums[j] > target) {
				continue;
			}

			visited[j] = true;
			if (backtrack(j + 1, k, subsetSum + nums[j])) {
				return true;
			}
			visited[j] = false;
		}
		return false;
	}

	return backtrack(0, k, 0);
};
