/**
 * @param {number[]} time
 * @return {number}
 */
// Time Complexity: O(n)
// Space Complexity: O(1)
var numPairsDivisibleBy60 = function (time) {
	const cache = {}; // num -> appearance
	let res = 0;

	for (let i = 0; i < time.length; i++) {
		const remainder = time[i] % 60;
		const needed = (60 - remainder) % 60; // % 60 to handle for number 60
		res += cache[needed] ?? 0;
		cache[remainder] = (cache[remainder] || 0) + 1;
	}
	return res;
};
