/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
// Time Complexity: O(n * log m), where:
// n is the number of piles
// m is the maximum pile size (approximately equal to the right value)
// Space Complexity: O(1) as we only use a few variables.
var minEatingSpeed = function (piles, h) {
	let l = 1; // minimum speed possible is 1
	let r = Math.max(...piles); // max speed is the largest pile
	let res = r;
	while (l < r) {
		const mid = Math.floor((l + r) / 2);

		let hours = 0;
		for (const pile of piles) {
			hours += Math.ceil(pile / mid);
		}

		if (hours <= h) {
			r = mid;
			res = Math.min(res, mid);
		} else {
			l = mid + 1;
		}
	}
	return res;
};
