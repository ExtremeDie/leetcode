/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Time complexity: O(n) on average, O(n^2) in the worst case
// If we continue to pick the smallest or largest number, that should be O(n^2). But we can improve time with this code.
// Space complexity: O(n)
// This is space for the recursion call stack.
var findKthLargest = function (nums, k) {
	const target = nums.length - k;

	function quickSelect(left, right) {
		// If the low and high pointers are the same, return the element at low
		if (low === high) return nums[low];
		let pivotIndex = partition(left, right);

		if (pivotIndex === target) {
			return nums[pivotIndex];
		} else if (pivotIndex < target) {
			// target at the right
			return quickSelect(pivotIndex + 1, right);
		} else {
			// target at the left
			return quickSelect(left, pivotIndex - 1);
		}
	}

	function partition(left, right) {
		let pivot = nums[right];
		let start = left;

		for (let i = left; i < right; i++) {
			if (nums[i] < pivot) {
				// Swap nums[i] with nums[start]
				[nums[i], nums[start]] = [nums[start], nums[i]];
				start++;
			}
		}

		// change pivot (right) position with start to make pivot as the middle
		[nums[start], nums[right]] = [nums[right], nums[start]];
		return start;
	}
	return quickSelect(0, nums.length - 1);
};

var findKthLargest = function (nums, k) {
	const minHeap = new MinPriorityQueue();

	for (let num of nums) {
		minHeap.enqueue(num);

		if (minHeap.size() > k) {
			minHeap.dequeue();
		}
	}
	return minHeap.front().element;
};
