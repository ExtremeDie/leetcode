/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
	let res = 0;

	const stack = []; // [startIndex, height]

	for (let i = 0; i < heights.length; i++) {
		const currentHeight = heights[i];
		let currentStartIndex = i;

		// pop if prev h > current h
		while (stack.length && stack[stack.length - 1][1] > currentHeight) {
			const [prevStartIndex, prevHeight] = stack.pop();
			res = Math.max(res, prevHeight * (i - prevStartIndex));
			currentStartIndex = prevStartIndex;
		}

		stack.push([currentStartIndex, currentHeight]);
	}

	// check for remaining heights
	for (let i = 0; i < stack.length; i++) {
		const [currentStartIndex, currentHeight] = stack[i];
		res = Math.max(res, currentHeight * (heights.length - currentStartIndex));
	}

	return res;
};
