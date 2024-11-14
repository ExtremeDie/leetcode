/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
	const res = [];
	people.sort((a, b) => {
		// if two elelemts, a and b, a[0] == b[0],
		// sort by its second array element in ascending order, i.e., sort by a[1] - b[1]
		// if two elements, a and b, a[0] != b[0],
		// sort by its first array ellement in descending order, i.e., sort by b[0] - a[0]
		return a[0] == b[0] ? a[1] - b[1] : b[0] - a[0];
	});

	// [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]] would be:
	// [ [ 7, 0 ], [ 7, 1 ],
	// [ 6, 1 ],
	// [ 5, 0 ], [ 5, 2 ],
	// [ 4, 4 ] ]

	for (const p of people) {
		res.splice(p[1], 0, p);
	}
	// final result: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
	return res;
};
