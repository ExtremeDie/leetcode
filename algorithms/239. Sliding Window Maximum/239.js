/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	const res = [];
	const deque = []; // indeces

	for (let i = 0; i < nums.length; i++) {
		const currentNum = nums[i];
		while (deque.length && nums[deque[deque.length - 1]] <= currentNum) {
			deque.pop();
		}
		deque.push(i);

		// remove first element if it's outside the window
		if (deque[0] === i - k) {
			deque.shift();
		}

		// if window has k elements add to results
		if (i >= k - 1) {
			res.push(nums[deque[0]]);
		}
	}
	return res;
};
