/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
// Time: O(N logN)
// Space: O(N)
var furthestBuilding = function (heights, bricks, ladders) {
	const maxHeap = new MaxPriorityQueue();

	// loop until 2nd last
	for (let i = 0; i < heights.length - 1; i++) {
		const diff = heights[i + 1] - heights[i];

		if (diff <= 0) {
			continue;
		}

		// greedy: always use bricks first
		bricks -= diff;
		maxHeap.enqueue(diff);

		// bricks not enough, previously should have used the ladder
		if (bricks < 0) {
			if (ladders === 0) {
				return i;
			}

			ladders--;
			bricks += maxHeap.dequeue().element;
		}
	}
	return heights.length - 1;
};
