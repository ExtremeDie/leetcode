/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
	let count = 0;

	while (n) {
		count += n % 2;
		n = n >> 1;
	}
	return count;
};

var hammingWeight = function (n) {
	let count = 0;

	while (n) {
		n = n & (n - 1);
		count++;
	}
	return count;
};
