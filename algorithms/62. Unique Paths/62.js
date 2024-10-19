/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// time: O(m * n)
// space: O(n)
var uniquePaths = function (m, n) {
	let row = new Array(n).fill(1); // last row are all 1

	// loop all the m-1 rows, bottom up
	for (let i = 0; i < m - 1; i++) {
		let newRow = new Array(n).fill(1);
		// loop all the columns from m-2, m-1 last column is also always 1
		for (let j = n - 2; j >= 0; j--) {
			newRow[j] = newRow[j + 1] + row[j];
		}
		row = newRow;
	}

	return row[0];
};
