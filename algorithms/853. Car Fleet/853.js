/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
	const pairs = position.map((pos, i) => [pos, speed[i]]);

	// sort ascending
	pairs.sort((a, b) => a[0] - b[0]);

	const stack = [];
	// loop from the back
	for (let i = pairs.length - 1; i >= 0; i--) {
		stack.push((target - pairs[i][0]) / pairs[i][1]);

		// if current (last) <= prev, pop it, since collision (because we are doing loop from end)
		if (stack.length > 1 && stack[stack.length - 1] <= stack[stack.length - 2]) {
			stack.pop();
		}
	}
	return stack.length;
};
