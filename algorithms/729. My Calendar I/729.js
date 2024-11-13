// Time Complexity: O(log n): The binary search operation dominates the time complexity,
// leading to logarithmic time for insertion and checking overlaps.

// Space Complexity: O(n): The calendar array stores the booked intervals.
// In the worst case, it can store all 'n' booked intervals, leading to linear space usage.

var MyCalendar = function () {
	this.calendar = [];
};

/**
 * @param {number} startTime
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function (startTime, endTime) {
	let l = 0;
	let r = this.calendar.length - 1;

	while (l <= r) {
		const mid = Math.floor((l + r) / 2);
		const [midStart, midEnd] = this.calendar[mid];

		if (startTime < midEnd && midStart < endTime) {
			// overlapped
			return false;
		} else if (midEnd <= startTime) {
			l = mid + 1;
		} else {
			r = mid - 1;
		}
	}
	this.calendar.splice(l, 0, [startTime, endTime]);
	return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */
