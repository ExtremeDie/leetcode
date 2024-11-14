/**
 * @param {number[]} nums
 * @return {string}
 */
// Time Complexity:
// The time complexity is (O(nlogn)), where n is the number of integers in the input array. This is due to the sorting step, where each comparison of two numbers takes (O(1)) time since we are only comparing concatenated strings.

// Space Complexity:
// The space complexity is (O(n)), where n is the number of integers in the array. We require additional space to store the string representations of the numbers.

var largestNumber = function (nums) {
	const stringNums = nums.map((e) => e.toString());

	function compare(a, b) {
		const com1 = a + b;
		const com2 = b + a;
		return com1 > com2 ? -1 : 1;
	}

	stringNums.sort(compare);

	// edge case, only when all 0 will result in this
	if (stringNums[0] === '0') {
		return '0';
	}
	return stringNums.join('');
};
