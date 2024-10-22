/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let res = '';

	for (let i = 0; i < strs[0].length; i++) {
		for (const s of strs) {
			if (s[i] !== strs[0][i]) return res;
		}
		res += strs[0][i];
	}
	return res;
};
