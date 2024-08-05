/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	const count = new Map();

	for (const num of nums) {
		count.set(num, (count.get(num) || 0) + 1);
	}

	const sorted = [...count.entries()].sort((a, b) => b[1] - a[1]);
	return sorted.slice(0, k).map((x) => x[0]);
};
