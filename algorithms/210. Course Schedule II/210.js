/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
// • Time complexity: OV + E）
// • Space complexity: O（V +E）
// Where V is the number of courses and E is the number of prerequisites.
var findOrder = function (numCourses, prerequisites) {
	const preMap = new Map();

	for (const prerequisite of prerequisites) {
		const [crs, pre] = prerequisite;
		if (preMap.has(crs)) {
			preMap.get(crs).push(pre);
		} else {
			preMap.set(crs, [pre]);
		}
	}

	const visited = new Set();
	const cycle = new Set();
	const res = [];
	function dfs(crs) {
		if (visited.has(crs)) return true;
		if (cycle.has(crs)) return false;

		cycle.add(crs);
		for (const pre of preMap.get(crs)) {
			if (!dfs(pre)) return false;
		}
		cycle.delete(crs);
		visited.add(crs);
		res.push(crs);

		return true;
	}

	for (let crs = 0; crs < numCourses; crs++) {
		if (!dfs(crs)) {
			return [];
		}
	}
	return res;
};
