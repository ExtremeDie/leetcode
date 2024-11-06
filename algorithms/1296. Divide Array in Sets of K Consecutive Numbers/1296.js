/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function (nums, k) {
	if (nums.length % k !== 0) return false;
	const count = new Map();

	for (const num of nums) {
		count.set(num, (count.get(num) || 0) + 1);
	}

	const sortedKeys = Array.from(count.keys()).sort((a, b) => a - b);
	for (const key of sortedKeys) {
		const keyCount = count.get(key);
		if (keyCount > 0) {
			for (let i = 0; i < k; i++) {
				if ((count.get(key + i) || 0) < keyCount) return false;
				count.set(key + i, count.get(key + i) - keyCount);
			}
		}
	}

	return true;
};
