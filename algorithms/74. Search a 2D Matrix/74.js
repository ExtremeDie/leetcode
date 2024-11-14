/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// Time complexity: O(log(m) + log(n))
// Space complexity: O(1)

var searchMatrix = function (matrix, target) {
	const rows = matrix.length;
	const cols = matrix[0].length;
	let top = 0;
	let bottom = rows - 1;

	// find the row that target falls into first
	while (top <= bottom) {
		const mid = Math.floor((top + bottom) / 2);

		if (target > matrix[mid][cols - 1]) {
			top = mid + 1;
		} else if (target < matrix[mid][0]) {
			bottom = mid - 1;
		} else {
			break;
		}
	}

	// target not found in any row, no solution
	if (!(top <= bottom)) {
		return false;
	}

	// find the target in the row
	// * row using Math.floor((top + bottom) / 2) to cater for the first mid calculation is already is the row
	// matrix = [[1],[3],[5]]
	// target = 3
	let row = Math.floor((top + bottom) / 2);

	let l = 0;
	let r = cols - 1;
	while (l <= r) {
		const mid = Math.floor((l + r) / 2);

		if (target > matrix[row][mid]) {
			l = mid + 1;
		} else if (target < matrix[row][mid]) {
			r = mid - 1;

			// * better to compare for target === too, just in case still not in the row
		} else if (target === matrix[row][mid]) {
			return true;
		}
	}
	return false;
};
