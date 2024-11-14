/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
	const stack = [];

	for (const n of num) {
		while (stack.length && stack[stack.length - 1] > n && k > 0) {
			stack.pop();
			k--;
		}

		stack.push(n);
	}

	// if k still > 0, remove all remaining large numbers
	while (k > 0) {
		stack.pop();
		k--;
	}

	// remove any leading 0
	while (stack.length && stack[0] == 0) {
		stack.shift();
	}
	return stack.join('') || '0';
};
