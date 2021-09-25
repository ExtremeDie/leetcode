/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	var start = 0,
		end = numbers.length - 1;
	let sum = numbers[start] + numbers[end];
	while (sum != target) {
		sum < target ? start++ : end--;
		sum = numbers[start] + numbers[end];
	}

	return [start + 1, end + 1];
};
