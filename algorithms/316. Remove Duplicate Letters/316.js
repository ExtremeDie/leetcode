/**
 * @param {string} s
 * @return {string}
 */
// Time: O(len(s))
// Space: O(len(s)), O(26) at most because we are not allowed to have duplicate characters, so we can say O(1) instead of O(len(s)).
var removeDuplicateLetters = function (s) {
	const stack = [];
	const visited = new Set();

	const lastOccurance = new Map();

	for (let i = 0; i < s.length; i++) {
		lastOccurance.set(s[i], i);
	}

	for (let i = 0; i < s.length; i++) {
		if (visited.has(s[i])) continue;

		// remove last stack character that is after current character AND has a occurance after current character
		while (stack.length && stack[stack.length - 1] > s[i] && lastOccurance.get(stack[stack.length - 1]) > i) {
			visited.delete(stack.pop());
		}

		visited.add(s[i]);
		stack.push(s[i]);
	}
	return stack.join('');
};
