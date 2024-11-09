/**
 * @param {string} s
 * @return {number}
 */
// Time Complexity: O(n)O(n) because the input string is traversed once.
// Space Complexity: O(n)O(n) due to the stack used to store intermediate results.
var calculate = function (s) {
	let stack = [];
	let currentNumber = 0;
	let operation = '+';

	for (let i = 0; i < s.length; i++) {
		let char = s[i];

		// number
		if (char != ' ' && !isNaN(char)) {
			currentNumber = currentNumber * 10 + parseInt(char);
		}

		// not number or is last position
		if ((char != ' ' && isNaN(char)) || i === s.length - 1) {
			if (operation === '+') {
				stack.push(currentNumber);
			} else if (operation === '-') {
				stack.push(-currentNumber);
			} else if (operation === '*') {
				stack.push(currentNumber * stack.pop());
			} else if (operation === '/') {
				stack.push(Math.trunc(stack.pop() / currentNumber)); // question required us to truncate into integer
			}

			operation = char;
			currentNumber = 0;
		}
	}
	return stack.reduce((acc, curr) => acc + curr, 0);
};
