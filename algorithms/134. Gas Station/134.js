/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
	let start = 0;
	let totalGas = 0;
	let currentGas = 0;

	for (let i = 0; i < gas.length; i++) {
		totalGas += gas[i] - cost[i];
		currentGas += gas[i] - cost[i];

		if (currentGas < 0) {
			start = i + 1;
			currentGas = 0;
		}
	}

	return totalGas >= 0 ? start : -1;
};
