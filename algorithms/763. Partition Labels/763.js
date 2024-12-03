/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
	const lastIndex = {}; // char -> lastIndex

	for (let i = 0; i < s.length; i++) {
		lastIndex[s[i]] = i;
	}

	const res = [];
	let size = 0;
	let end = 0;

	for (let i = 0; i < s.length; i++) {
		size++;

		end = Math.max(end, lastIndex[s[i]]);

		if (i === end) {
			res.push(size);
			size = 0;
		}
	}

	return res;
};
