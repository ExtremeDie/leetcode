/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	intervals.sort((a, b) => a[0] - b[0]);
	const res = [intervals[0]]; // for edge case

	for (let i = 1; i < intervals.length; i++) {
		const lastEnd = res[res.length - 1][1];
		const [start, end] = intervals[i];
		if (start <= lastEnd) {
			res[res.length - 1][1] = Math.max(lastEnd, end);
		} else {
			res.push(intervals[i]);
		}
	}
	return res;
};