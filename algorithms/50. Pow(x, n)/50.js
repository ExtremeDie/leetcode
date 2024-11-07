/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// •	Time Complexity:  O(log n)
// •	Space Complexity:  O(log n)
var myPow = function (x, n) {
	function helper(x, n) {
		if (x === 0) return 0;
		if (n === 0) return 1;

		let res = helper(x, Math.floor(n / 2));
		res = res * res;

		if (n % 2 !== 0) {
			res = x * res;
		}
		return res;
	}

	const res = helper(x, Math.abs(n));

	if (n >= 0) {
		return res;
	}
	return 1 / res;
};
