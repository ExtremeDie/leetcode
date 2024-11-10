/**
 * @param {string} s
 * @return {string}
 */
// Time Complexity: O(n)
// Space Complexity: O(n)
var decodeString = function (s) {
	const stack = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] !== ']') {
			stack.push(s[i]);
		} else {
			let substr = '';

			while (stack[stack.length - 1] !== '[') {
				substr = stack.pop() + substr;
			}

			stack.pop(); // pop [

			let num = '';
			while (!isNaN(stack[stack.length - 1])) {
				num = stack.pop() + num;
			}

			stack.push(substr.repeat(num));
		}
	}
	return stack.join('');
};
