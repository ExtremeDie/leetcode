/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Time complexity: O(nlogn)
// Space complexity: O(n)
var maxKelements = function (nums, k) {
	const maxHeap = new MaxPriorityQueue();

	for (const n of nums) {
		maxHeap.enqueue(n);
	}

	let res = 0;
	while (k) {
		const n = maxHeap.dequeue().element;
		res += n;

		maxHeap.enqueue(Math.ceil(n / 3));

		k--;
	}

	return res;
};
