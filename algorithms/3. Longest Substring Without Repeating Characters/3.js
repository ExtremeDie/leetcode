/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	// keeps track of the most recent index of each letter.
	const map = {};
	// keeps track of the starting index of the current substring.
	let left = 0;

	return s.split('').reduce((prev, value, index) => {
		// starting index of substring is 1 + (the last index of this letter) to ensure this letter is not counted twice.
		left = map[value] >= left ? map[value] + 1 : left;
		// updates last recorded index of letter to the most recent index.
		map[value] = index;

		// indices of current substring is (idx - leftIdx, idx).
		// +1 because if your substring starts and ends at index 0, it still has a length of 1.
		return Math.max(prev, index - left + 1);
	}, 0);
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let set = new Set();
	let l = 0;
	let maxLength = 0;

	for (let r = 0; r < s.length; r++) {
		while (set.has(s[r])) {
			set.delete(s[l]);
			l++;
		}
		set.add(s[r]);
		maxLength = Math.max(maxLength, r - l + 1);
	}
	return maxLength;
};
