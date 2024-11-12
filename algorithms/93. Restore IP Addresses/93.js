/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
	const res = [];
	if (s.length < 4 || s.length > 12) {
		return res;
	}

	function backtrack(i, dots, currIP) {
		if (dots === 4 && i === s.length) {
			res.push(currIP.slice(0, -1));
			return;
		}

		if (dots > 4) {
			return;
		}

		for (let j = i; j < Math.min(i + 3, s.length); j++) {
			const digits = s.substring(i, j + 1);
			if (isValid(digits)) {
				// must use j index
				backtrack(j + 1, dots + 1, currIP + digits + '.');
			}
		}
	}

	function isValid(digits) {
		if (digits.length > 1 && digits[0] == 0) {
			return false;
		}
		return digits >= 0 && digits <= 255;
	}

	backtrack(0, 0, '');
	return res;
};
