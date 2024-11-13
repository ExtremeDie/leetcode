/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Time Complexity: O(n)
// n is the length of the input array nums. This is because we iterate through the elements of nums once, performing constant-time operations within the loop.

// Space Complexity: O(n)
// n is the length of the input array nums. This is due to the space used by the stack st, which can potentially hold all elements of the input array in the worst case. Additionally, a constant amount of extra space is used for variables like cur_min and the loop index.

var find132pattern = function (nums) {
	const stack = []; // [num, minLeft] monotonic decreasing stack (lesser num pops out)

	let currMin = nums[0];

	for (let i = 0; i < nums.length; i++) {
		// Pop elements from the stack while the top of the stack is <= nums[i].
		while (stack.length && stack[stack.length - 1][0] <= nums[i]) {
			stack.pop();
		}

		// Check if we have found a 132 pattern.
		// This happens if the minLeft (stack's last element's 1 value) is greater than nums[i] (the '3' element).
		if (stack.length && stack[stack.length - 1][1] < nums[i]) {
			// found 132 pattern
			// stack[stack.length - 1][1] (1), stack[stack.length - 1][0] (3), nums[i] (2)
			return true;
		}

		stack.push([nums[i], currMin]);
		currMin = Math.min(currMin, nums[i]);
	}
	return false;
};
