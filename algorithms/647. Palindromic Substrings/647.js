/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
	let res = 0;

	for (let i = 0; i < s.length; i++) {
		// odd length
		let l = i;
		let r = i;

		while (l >= 0 && r < s.length && s[l] === s[r]) {
			res++;
			l--;
			r++;
		}

		// even length
		l = i;
		r = i + 1;
		while (l >= 0 && r < s.length && s[l] === s[r]) {
			res++;
			l--;
			r++;
		}
	}
	return res;
};

console.log(countSubstrings('aaa'));
