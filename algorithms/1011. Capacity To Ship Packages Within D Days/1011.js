/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
// Time: O(n * log(sum(weights)))
// Space: O(n)
var shipWithinDays = function (weights, days) {
	// possible weights to check
	// [Math.max(weights), ..., sum(weights)]

	let l = Math.max(...weights);
	let r = weights.reduce((acc, curr) => acc + curr, 0);

	let res = r;
	while (l <= r) {
		const cap = Math.floor((l + r) / 2);

		if (canShip(cap)) {
			res = Math.min(res, cap);
			r = cap - 1;
		} else {
			l = cap + 1;
		}
	}
	return res;

	function canShip(cap) {
		let ships = 1;
		let currentCap = cap;

		for (const weight of weights) {
			if (currentCap - weight < 0) {
				ships++;
				currentCap = cap;
			}
			currentCap -= weight;
		}
		return ships <= days;
	}
};
