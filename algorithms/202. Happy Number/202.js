/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	const visited = new Set();

	const getNextNumber = function (n) {
		let res = 0;

		while (n > 0) {
			const digit = n % 10;
			res += digit * digit;
			n = Math.floor(n / 10);
		}

		return res;
	};

	while (!visited.has(n)) {
		visited.add(n);
		n = getNextNumber(n);

		if (n === 1) {
			return true;
		}
	}
	return false;
};
