/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	let resLength = 0;
	let res = '';

	for (let i = 0; i < s.length; i++) {
		// odd length s
		let l = i;
		let r = i;

		// expandAroundCenter
		while (l >= 0 && r < s.length && s[l] === s[r]) {
			if (r - l + 1 > resLength) {
				res = s.slice(l, r + 1);
				resLength = r - l + 1;
			}
			l--;
			r++;
		}

		// even length s
		l = i;
		r = i + 1;

		// expandAroundCenter
		while (l >= 0 && r < s.length && s[l] === s[r]) {
			if (r - l + 1 > resLength) {
				res = s.slice(l, r + 1);
				resLength = r - l + 1;
			}
			l--;
			r++;
		}
	}
	return res;
};

console.log(longestPalindrome('ssb'));
