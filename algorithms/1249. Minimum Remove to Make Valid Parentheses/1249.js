/**
 * @param {string} s
 * @return {string}
 */
// Time: O(n)
// Space: O(n)
var minRemoveToMakeValid = function (s) {
	const stack = [];
	const toRemove = new Set();

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			stack.push(i);
		} else if (s[i] === ')') {
			if (stack.length > 0) {
				stack.pop();
			} else {
				toRemove.add(i);
			}
		}
	}

	// remove any remaining stack
	while (stack.length) {
		toRemove.add(stack.pop());
	}

	let res = '';
	for (let i = 0; i < s.length; i++) {
		if (!toRemove.has(i)) {
			res += s[i];
		}
	}
	return res;
};
