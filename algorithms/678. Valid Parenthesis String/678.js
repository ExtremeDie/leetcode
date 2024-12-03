/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
	let minLeft = 0;
	let maxLeft = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			minLeft++;
			maxLeft++;
		} else if (s[i] === ')') {
			minLeft--;
			maxLeft--;
		} else {
			minLeft--; // assume * is )
			maxLeft++; // assume * is (
		}

		// meaning ) more than (
		if (maxLeft < 0) {
			return false;
		}
		// set to 0 to ignore the possibility of having more )
		if (minLeft < 0) {
			minLeft = 0;
		}
	}
	return minLeft === 0; // ! important, minLeft = 0 represents that it is valid
};
