/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
	let l = 0;
	let r = s.length - 1;

	while (l < r) {
		if (s[l] !== s[r]) {
			return isPalindrome(s.substring(l + 1, r + 1)) || isPalindrome(s.substring(l, r));
		}
		l++;
		r--;
	}
	return true;
};

var isPalindrome = function (s) {
	return s === s.split('').reverse().join('');
};
