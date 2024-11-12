/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// Time Complexity: O(n)
// Space Complexity: O(n)
var removeDuplicates = function (s, k) {
	const stack = []; // [char, count]

	for (const c of s) {
		if (stack.length && stack[stack.length - 1][0] === c) {
			stack[stack.length - 1][1]++;
		} else {
			stack.push([c, 1]);
		}

		if (stack[stack.length - 1][1] === k) {
			stack.pop();
		}
	}

	let res = '';
	for (const [c, count] of stack) {
		res += c.repeat(count);
	}
	return res;
};
