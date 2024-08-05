/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const stack = [];

	for (const c of s) {
		if (c === '(' || c === '[' || c === '{') {
			stack.push(c);
		} else {
			if (!stack.length || (c === ')' && stack[stack.length - 1] !== '(') || (c === ']' && stack[stack.length - 1] !== '[') || (c === '}' && stack[stack.length - 1] !== '{')) {
				return false;
			} else {
				stack.pop();
			}
		}
	}
	return !stack.length;
};
