/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
	const rows = matrix.length;
	const columns = matrix[0].length;
	let setFirstRowZero = false;

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < columns; c++) {
			if (matrix[r][c] === 0) {
				matrix[0][c] = 0;

				if (r > 0) {
					matrix[r][0] = 0;
				} else {
					setFirstRowZero = true;
				}
			}
		}
	}

	for (let r = 1; r < rows; r++) {
		for (let c = 1; c < columns; c++) {
			if (matrix[0][c] === 0 || matrix[r][0] === 0) {
				matrix[r][c] = 0;
			}
		}
	}

	if (matrix[0][0] === 0) {
		for (let r = 0; r < rows; r++) {
			matrix[r][0] = 0;
		}
	}
	if (setFirstRowZero) {
		for (let c = 0; c < columns; c++) {
			matrix[0][c] = 0;
		}
	}
};
