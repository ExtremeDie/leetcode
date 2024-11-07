/**
 * @param {string} digits
 * @return {string[]}
 */
// Time complexity: O(4^n)
// n is length of input string.
// Space complexity: O(n)
// n is length of input string. This is for recursive call stack.
var letterCombinations = function (digits) {
	if (!digits.length) return [];

	const res = [];
	const digitToLetters = {
		2: 'abc',
		3: 'def',
		4: 'ghi',
		5: 'jkl',
		6: 'mno',
		7: 'pqrs',
		8: 'tuv',
		9: 'wxyz',
	};

	function dfs(i, currStr) {
		if (i >= digits.length) {
			res.push(currStr);
			return;
		}
		for (const letter of digitToLetters[digits[i]]) {
			dfs(i + 1, currStr + letter);
		}
	}
	dfs(0, '');
	return res;
};
