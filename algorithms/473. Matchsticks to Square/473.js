/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
// Time Complexity: Exponential (roughly O(4^n) in the worst case, but with some pruning from sorting).
// Space Complexity: O(n) due to the sides array and recursion stack.
var makesquare = function (matchsticks) {
	const sum = matchsticks.reduce((acc, curr) => acc + curr, 0);
	const sideLength = Math.floor(sum / 4);

	if (sum / 4 !== sideLength) {
		return false;
	}

	// descending order, to skip those values > sideLength
	matchsticks.sort((a, b) => b - a);

	const sides = new Array(4).fill(0);
	function backtrack(i) {
		if (i === matchsticks.length) {
			return true;
		}
		for (let j = 0; j < sides.length; j++) {
			if (sides[j] + matchsticks[i] <= sideLength) {
				sides[j] += matchsticks[i];
				if (backtrack(i + 1)) {
					return true;
				}
				sides[j] -= matchsticks[i];
			}
		}
		return false;
	}

	return backtrack(0);
};
