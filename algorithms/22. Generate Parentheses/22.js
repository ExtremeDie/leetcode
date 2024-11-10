/**
 * @param {number} n
 * @return {string[]}
 */
// • Time complexity: 0（2^2 * n）
// • Space complexity: O（m）
var generateParenthesis = function (n) {
	const res = [];

	function dfs(openN, closeN, combination) {
		if (openN === n && closeN === n) {
			res.push(combination.join(''));
			return;
		}

		if (openN < n) {
			combination.push('(');
			dfs(openN + 1, closeN, combination);
			combination.pop();
		}

		if (closeN < openN) {
			combination.push(')');
			dfs(openN, closeN + 1, combination);
			combination.pop();
		}
	}

	dfs(0, 0, []);
	return res;
};
