function minSwaps(data: number[]): number {
	const totalOnes = data.reduce((acc, cur) => acc + cur, 0);
	let windowOnes = data.slice(0, totalOnes).reduce((acc, cur) => acc + cur, 0);
	let max = windowOnes;
	for (let i = totalOnes; i < data.length; ++i) {
		windowOnes += data[i] - data[i - totalOnes];
		max = Math.max(max, windowOnes);
	}
	return totalOnes - max; // num of swaps
}
