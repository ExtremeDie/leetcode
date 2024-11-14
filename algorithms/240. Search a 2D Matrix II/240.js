/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// Time: O(m + n), worse case is go all top and go all right
// Space: O(n)
var searchMatrix = function (matrix, target) {
	const rows = matrix.length;
	const cols = matrix[0].length;

	// start from last row, first column
	let r = rows - 1;
	let c = 0;

	while (r >= 0 && c < cols) {
		if (target === matrix[r][c]) {
			return true;
		} else if (target > matrix[r][c]) {
			// move to right
			c++;
		} else {
			// move to top
			r--;
		}
	}

	return false;
};
