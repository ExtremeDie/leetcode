/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
	const set = new Set(nums);
	let longest = 0;

	for (const n of nums) {
		if (!set.has(n - 1)) {
			let length = 1;

			while (set.has(n + length)) {
				length++;
			}
			longest = Math.max(length, longest);
		}
	}
	return longest;
};
