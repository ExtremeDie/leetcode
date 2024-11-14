/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
	const numArr = [...num.toString()].map(Number);

	// `maxRightIdx` keeps track of the index of the largest digit from the right side as we iterate.
	let maxRightIdx = numArr.length - 1;

	// `swapLeftIdx` and `swapRightIdx` will store the indices of the digits we want to swap.
	// Initially set to -1, indicating no swap is found yet.
	let swapLeftIdx = -1;
	let swapRightIdx = -1;

	// Traverse from right to left to find the best swap pair
	for (let i = numArr.length - 2; i >= 0; i--) {
		// If we find a larger digit as we move left, update `maxRightIdx`
		if (numArr[i] > numArr[maxRightIdx]) {
			maxRightIdx = i;
		}
		// If the current digit is smaller than the largest digit to its right (`numArr[maxRightIdx]`),
		// then we have a potential swap to maximize the number
		else if (numArr[i] < numArr[maxRightIdx]) {
			swapLeftIdx = i;
			swapRightIdx = maxRightIdx;
		}
	}

	// Perform the swap if a valid swap pair was found
	if (swapLeftIdx !== -1) {
		[numArr[swapLeftIdx], numArr[swapRightIdx]] = [numArr[swapRightIdx], numArr[swapLeftIdx]];
	}

	// Convert the array back to a number and return the result
	return +numArr.join('');
};
