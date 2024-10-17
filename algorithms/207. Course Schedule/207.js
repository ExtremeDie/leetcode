/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
	const preMap = new Map();

	for (const prerequisite of prerequisites) {
		const [crs, pre] = prerequisite;
		if (preMap.has(crs)) {
			preMap.set(crs, [...preMap.get(crs), pre]);
		} else {
			preMap.set(crs, [pre]);
		}
	}

	const visited = new Set();

	function dfs(crs) {
		if (visited.has(crs)) return false;
		if ((preMap.get(crs) || []).length === 0) return true;

		visited.add(crs);
		for (const pre of preMap.get(crs)) {
			if (!dfs(pre)) return false;
		}
		visited.delete(crs);
		preMap.set(crs, []);
		return true;
	}
	for (let crs = 0; crs < numCourses; crs++) {
		if (!dfs(crs)) return false;
	}
	return true;
};

let numCourses = 2;
let prerequisites = [
	[1, 0],
	[0, 1],
];

const res = canFinish(numCourses, prerequisites);
console.log('🚀 ~ res:', res);
