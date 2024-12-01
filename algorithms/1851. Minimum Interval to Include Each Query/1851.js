/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function (intervals, queries) {
	intervals.sort((a, b) => a[0] - b[0]);

	const newQueries = queries.map((q, i) => [q, i]);
	newQueries.sort((a, b) => a[0] - b[0]);

	let intervalIndex = 0;
	const res = [];
	const minHeap = new MinPriorityQueue();

	for (const [q, i] of newQueries) {
		// add possible intervals (start <= q) to minHeap
		while (intervalIndex < intervals.length && intervals[intervalIndex][0] <= q) {
			const [s, e] = intervals[intervalIndex];
			const size = e - s + 1;
			minHeap.enqueue([size, e], size);
			intervalIndex++;
		}

		// remove elements before q
		// since the queries are sorted, the dequeued items are no longer needed
		// because their ending is smaller than all upcoming queries
		while (minHeap.size() && minHeap.front().element[1] < q) {
			minHeap.dequeue();
		}

		// if min priority queue is not empty, peak[0] will be the size
		const minSize = minHeap.size() > 0 ? minHeap.front().element[0] : -1;
		// new queries is sorted, so need to push size to the original index of
		res[i] = minSize;
	}

	return res;
};
