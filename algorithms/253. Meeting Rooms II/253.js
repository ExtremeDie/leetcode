/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
	/**
	 * @param {Interval[]} intervals
	 * @returns {number}
	 */
	minMeetingRooms(intervals) {
		const starts = intervals.map((e) => e.start).sort((a, b) => a - b);
		const ends = intervals.map((e) => e.end).sort((a, b) => a - b);

		let res = 0;
		let count = 0;
		let s = 0;
		let e = 0;

		while (s < starts.length) {
			if (starts[s] < ends[e]) {
				s++;
				count++;
			} else {
				e++;
				count--;
			}
			res = Math.max(res, count);
		}
		return res;
	}
}
