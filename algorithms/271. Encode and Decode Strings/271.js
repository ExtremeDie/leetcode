class Solution {
	/**
	 * @param {string[]} strs
	 * @returns {string}
	 */
	encode(strs) {
		let res = '';
		for (const str of strs) {
			res += `${str.length}#${str}`;
		}
		return res;
	}

	/**
	 * @param {string} str
	 * @returns {string[]}
	 */
	decode(str) {
		const res = [];
		let i = 0;
		while (i < str.length) {
			const sym = str.indexOf('#', i);
			const len = Number(str.slice(i, sym));
			res.push(str.slice(sym + 1, sym + 1 + len));
			i = sym + 1 + len;
		}
		return res;
	}
}
