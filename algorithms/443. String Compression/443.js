/**
 * @param {character[]} chars
 * @return {number}
 */
// Time complexity: The time complexity is O(n), where n is the length of the input array.
// Space complexity: O(1)
var compress = function (chars) {
	let i = 0; // i records the compressed string length
	let j = 0;

	while (j < chars.length) {
		let count = 0;
		let curr = chars[j];

		// count the number of current character
		while (j < chars.length && curr === chars[j]) {
			count++;
			j++;
		}

		// set the character as the first position
		chars[i++] = curr;

		// set the count if > 1
		if (count > 1) {
			for (let digit of count.toString()) {
				chars[i++] = digit;
			}
		}
	}
	return i;
};
