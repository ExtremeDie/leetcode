/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
// Time: O(n log n), mainly due to sorting.
// Space: O(1), constant space usage.
var findRadius = function (houses, heaters) {
	houses.sort((a, b) => a - b); // Sort for efficient search
	heaters.sort((a, b) => a - b); // Sort for efficient search

	let heater = 0;
	let res = 0;

	for (let house of houses) {
		// Find the closest heater to the current house
		while (heater < heaters.length - 1 && Math.abs(heaters[heater + 1] - house) <= Math.abs(heaters[heater] - house)) {
			heater++;
		}

		// Calculate the radius to the closest heater
		res = Math.max(res, Math.abs(heaters[heater] - house));
	}
	return res;
};
