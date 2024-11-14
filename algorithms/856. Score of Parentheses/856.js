/**
 * @param {string} s
 * @return {number}
 */
// Time Complexity: O(n)
// Space Complexity: O(n)
var scoreOfParentheses = function (s) {
	const stack = [];

	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		if (char === '(') {
			stack.push(char);
			continue;
		}

		let sum = 0;
		// check if there is any numbers
		while (stack.length && stack[stack.length - 1] !== '(') {
			sum += stack.pop();
		}

		// pop the last (, since now char is )
		stack.pop();

		if (sum === 0) {
			stack.push(1);
		} else {
			stack.push(2 * sum);
		}
	}
	return stack.reduce((acc, curr) => acc + curr, 0);
};
