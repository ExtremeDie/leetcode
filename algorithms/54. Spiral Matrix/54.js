/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// Time complexity: O(n*m)
// Space complexity: O(1)
var spiralOrder = function (matrix) {
	const res = [];
	let left = 0;
	let right = matrix[0].length;
	let top = 0;
	let bottom = matrix.length;

	while (left < right && top < bottom) {
		// get all top rows
		for (let i = left; i < right; i++) {
			res.push(matrix[top][i]);
		}
		top++;
		// get all right column
		for (let i = top; i < bottom; i++) {
			res.push(matrix[i][right - 1]);
		}
		right--;

		// check out of bound
		if (!(left < right && top < bottom)) {
			break;
		}

		// get all bottom row
		for (let i = right - 1; i >= left; i--) {
			res.push(matrix[bottom - 1][i]);
		}
		bottom--;
		//get all left column
		for (let i = bottom - 1; i >= top; i--) {
			res.push(matrix[i][left]);
		}
		left++;
	}

	return res;
};
