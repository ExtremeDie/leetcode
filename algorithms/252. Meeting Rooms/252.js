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
	 * @returns {boolean}
	 */
	canAttendMeetings(intervals) {
		intervals.sort((a, b) => (a.start > b.start ? 1 : -1));
		for (let i = 0; i < intervals.length - 1; i++) {
			if (intervals[i].end > intervals[i + 1].start) return false;
		}
		return true;
	}
}
