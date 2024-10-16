/**
 * @param {number[][]} intervals
 * @return {number}
 */
// time: O(nlogn)
var eraseOverlapIntervals = function (intervals) {
	let count = 0;
	intervals.sort((a, b) => a[0] - b[0]);
	let prevEnd = intervals[0][1];

	for (let i = 1; i < intervals.length; i++) {
		const [start, end] = intervals[i];
		if (start >= prevEnd) {
			// no overlap
			prevEnd = end;
		} else {
			count++;
			prevEnd = Math.min(prevEnd, end); // retain the min end, throw the larger end
		}
	}
	return count;
};
