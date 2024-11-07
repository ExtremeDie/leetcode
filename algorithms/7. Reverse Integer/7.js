/**
 * @param {number} x
 * @return {number}
 */
// • Time complexity: O（1）
// • Space complexity: O1）
var reverse = function (x) {
	const MAX = Math.pow(2, 31) - 1;
	const MIN = -Math.pow(2, 31);

	let res = 0;
	while (x) {
		const digit = x % 10;
		x = Math.trunc(x / 10); // trunc is important to get the integer part

		// compare the n-1 portion and compare the last digit if n-1 portion is same
		if (res > MAX / 10 || (res === MAX / 10 && digit > MAX % 10)) {
			return 0;
		}
		if (res < MIN / 10 || (res === MIN / 10 && digit < MIN % 10)) {
			return 0;
		}
		res = res * 10 + digit;
	}

	return res;
};
