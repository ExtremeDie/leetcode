/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	if (s1.length > s2.length) return false;

	const s1CharCount = new Array(26).fill(0);
	const windows = new Array(26).fill(0);

	for (let i = 0; i < s1.length; i++) {
		//'a'.charCodeAt() === 97;
		const idx = s1[i].charCodeAt() - 97;
		s1CharCount[idx]++;
	}

	// generate windows
	for (let i = 0; i < s1.length; i++) {
		const idx = s2[i].charCodeAt() - 97;
		windows[idx]++;
	}

	let start = 0;
	let end = s1.length - 1;

	while (end < s2.length) {
		if (s1CharCount.join('') == windows.join('')) return true;
		end++;
		if (end == s2.length) break;
		const startIdx = s2[start].charCodeAt() - 97;
		const endIdx = s2[end].charCodeAt() - 97;
		windows[startIdx]--;
		windows[endIdx]++;
		start++;
	}
	return false;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	if (s1.length > s2.length) return false;

	const s1CharCount = new Array(26).fill(0);
	const windows = new Array(26).fill(0);

	for (let i = 0; i < s1.length; i++) {
		s1CharCount[s1.charCodeAt(i) - 'a'.charCodeAt()]++;
	}

	for (let i = 0; i < s2.length; i++) {
		windows[s2.charCodeAt(i) - 'a'.charCodeAt()]++;

		if (i >= s1.length) {
			windows[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt()]--;
		}

		if (s1CharCount.join('') === windows.join('')) {
			return true;
		}
	}

	return false;
};
