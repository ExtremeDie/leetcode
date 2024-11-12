/**
 * @param {number} n
 * @param {function} knows(a: number, b: number): boolean
 * @return {number}
 */
var findCelebrity = function (n, knows) {
	let candidate = 0;
	// 1. Find a potential candidate
	for (let i = 1; i < n; i++) {
		if (knows(candidate, i)) {
			candidate = i;
		}
	}

	// 2. Verify if the candidate is a celebrity
	for (let i = 0; i < n; i++) {
		// If the candidate knows someone or someone doesn't know the candidate, it's not a celebrity
		if (i !== candidate && (knows(candidate, i) || !knows(i, candidate))) {
			return -1;
		}
	}
	return candidate;
};
