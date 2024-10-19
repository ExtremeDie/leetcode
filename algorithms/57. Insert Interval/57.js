/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
	const res = [];

	for (let i = 0; i < intervals.length; i++) {
		if (newInterval[1] < intervals[i][0]) {
			// new end before interval start, push newInterval
			res.push(newInterval);
			return [...res, ...intervals.slice(i)];
		} else if (newInterval[0] > intervals[i][1]) {
			// new start after interval end, push current interval
			res.push(intervals[i]);
		} else {
			// overlapped, merge
			newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])];
		}
	}

	res.push(newInterval); // push in the last newInterval
	return res;
};
