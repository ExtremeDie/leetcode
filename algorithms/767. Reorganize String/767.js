/**
 * @param {string} s
 * @return {string}
 */
// Time : O(n + k), which simplifies to O(n) for a fixed alphabet size.
// Space : O(n + k), which simplifies to O(n) for a fixed alphabet size.
var reorganizeString = function (s) {
	const map = new Map();

	for (const char of s) {
		map.set(char, (map.get(char) || 0) + 1);
	}

	// sorting the map based on the occurances in descending order.
	const sortedMap = [...map.entries()].sort((a, b) => b[1] - a[1]);

	// getting the first value of sorted map and checking if greater than half of string length
	if (sortedMap[0][1] > (s.length + 1) / 2) {
		return '';
	}

	const res = [];
	let index = 0;

	for (let [char, count] of sortedMap) {
		while (count) {
			// if it reaches the end of string, start filling from odd position.
			if (index >= s.length) {
				index = 1;
			}
			// adding elements at even position.
			res[index] = char;
			index += 2;
			count--;
		}
	}
	return res.join('');
};
