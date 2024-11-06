/**
 * @param {string} s
 * @return {string[][]}
 */
// • Time complexity: 0（n * 27）
// • Space complexity: O（m）
var partition = function (s) {
	const res = [];

	function dfs(i, part) {
		if (i >= s.length) {
			res.push([...part]);
			return;
		}

		for (let j = i; j < s.length; j++) {
			if (isPalindrome(s, i, j)) {
				part.push(s.substring(i, j + 1));
				dfs(j + 1, part);
				part.pop();
			}
		}
	}
	dfs(0, []);
	return res;
};

var isPalindrome = function (s, i, j) {
	while (i < j) {
		if (s[i] !== s[j]) {
			return false;
		}
		i++;
		j--;
	}
	return true;
};
