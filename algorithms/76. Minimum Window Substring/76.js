/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
	const tFreq = new Map();
	const winFreq = new Map();

	for (const c of t) {
		tFreq.set(c, (tFreq.get(c) || 0) + 1);
	}

	let l = 0,
		r = 0;
	let required = tFreq.size;
	let minLength = Infinity;
	let minLeft = 0;
	while (r < s.length) {
		const current = s[r];

		winFreq.set(current, (winFreq.get(current) || 0) + 1);

		if (tFreq.has(current) && winFreq.get(current) === tFreq.get(current)) {
			required--;
		}

		while (required === 0) {
			// update result
			if (r - l + 1 < minLength) {
				minLength = r - l + 1;
				minLeft = l;
			}

			// remove from left of window
			const leftChar = s[l];
			winFreq.set(leftChar, winFreq.get(leftChar) - 1);

			if (tFreq.has(leftChar) && winFreq.get(leftChar) < tFreq.get(leftChar)) {
				required++;
			}

			l++;
		}

		r++;
	}
	if (minLength === Infinity) return '';
	return s.substring(minLeft, minLeft + minLength);
};
