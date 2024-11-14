export class Solution {
	/**
	 * @param word: the given word
	 * @return: the generalized abbreviations of a word
	 *          we will sort your return value in output
	 */
	generateAbbreviations(word) {
		const res = [];

		function backtrack(i, current, count) {
			if (i === word.length) {
				// If there's a count, append it to current before adding to the result
				if (count > 0) {
					current += count;
				}
				res.push(current);
				return;
			}

			// Option 1: Abbreviate the current character (increment the count)
			backtrack(i + 1, current, count + 1);

			// Option 2: Keep the current character
			// If there is a count, add it to `current` before adding the character
			backtrack(i + 1, current + (count > 0 ? count : '') + word[i], 0);
		}

		backtrack(0, '', 0);
		return res;
	}
}
