/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
	const maxHeap = new MaxPriorityQueue();

	for (let r = 0; r < matrix.length; r++) {
		for (let c = 0; c < matrix[0].length; c++) {
			maxHeap.enqueue(matrix[r][c]);

			if (maxHeap.size() > k) {
				maxHeap.dequeue();
			}
		}
	}
	return maxHeap.front().element;
};
