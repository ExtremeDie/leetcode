/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome1 = function (s) {
	const filterString = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
	return filterString.split('').reverse().join('') === filterString;
};

var isPalindrome = function (s) {
	const filterString = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

	// two pointers
	for (let i = 0, j = filterString.length - 1; i < j; i++, j--) {
		if (filterString[i] !== filterString[j]) return false;
	}
	return true;
};
