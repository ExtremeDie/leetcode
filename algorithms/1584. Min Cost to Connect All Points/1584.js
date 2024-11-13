/**
 * @param {number[][]} points
 * @return {number}
 */
// Time: O(n^2 * log(n)) due to the priority queue operations.
// Space: O(n)
var minCostConnectPoints = function (points) {
	let res = 0;
	const n = points.length;
	const distances = new Array(n).fill(Infinity);
	const visited = new Array(n).fill(false);

	// Start from the first point
	distances[0] = 0;

	for (let i = 0; i < n; i++) {
		let minPoint = getMinPoint();
		visited[minPoint] = true;
		res += distances[minPoint];

		// calculate all the distance of minPoint with all the unvisted points
		for (let j = 0; j < n; j++) {
			if (!visited[j]) {
				const dist = Math.abs(points[minPoint][0] - points[j][0]) + Math.abs(points[minPoint][1] - points[j][1]);
				distances[j] = Math.min(distances[j], dist);
			}
		}
	}

	function getMinPoint() {
		let minDist = Infinity;
		let minPoint = -1;

		for (let i = 0; i < distances.length; i++) {
			if (!visited[i] && distances[i] < minDist) {
				minDist = distances[i];
				minPoint = i;
			}
		}

		return minPoint;
	}

	return res;
};
