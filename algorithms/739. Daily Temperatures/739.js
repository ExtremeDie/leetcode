/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// Time: O(n)
// Space: O(n)
var dailyTemperatures = function (temperatures) {
	const stack = []; // [temp, index]

	const res = new Array(temperatures.length).fill(0);

	for (let i = 0; i < temperatures.length; i++) {
		// * check the last stack temperature with [0]
		while (stack.length && temperatures[i] > stack[stack.length - 1][0]) {
			const [stkTemp, stkIdx] = stack.pop();
			res[stkIdx] = i - stkIdx;
		}
		stack.push([temperatures[i], i]);
	}

	return res;
};
