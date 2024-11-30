/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
	if (s.length < k) return 0;

	let charCount = new Map();
	for (let i = 0; i < s.length; i++) {
		charCount.set(s[i], (charCount.get(s[i]) || 0) + 1);
	}

	// check if the string already valid
	let valid = true;
	for (let count of charCount.values()) {
		if (count < k) {
			valid = false;
			break;
		}
	}

	if (valid) {
		return s.length;
	}

	let start = 0;
	let maxLength = 0;

	for (let i = 0; i < s.length; i++) {
		if (charCount.get(s[i]) < k) {
			// search the start till before i
			maxLength = Math.max(maxLength, longestSubstring(s.substring(start, i), k));
			start = i + 1;
		}
	}

	// check the remaining string
	maxLength = Math.max(maxLength, longestSubstring(s.substring(start), k));
	return maxLength;
};
