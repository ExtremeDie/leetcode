/**
 * @param {number[]} w
 */
var Solution = function (w) {
	this.prefixSum = [];
	this.sum = 0;

	for (let i = 0; i < w.length; i++) {
		this.sum += w[i];
		this.prefixSum.push(this.sum);
	}
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
	const target = Math.random() * this.sum;

	let l = 0;
	let r = this.prefixSum.length - 1;

	while (l < r) {
		const mid = Math.floor((l + r) / 2);

		if (target <= this.prefixSum[mid]) {
			r = mid;
		} else {
			l = mid + 1;
		}
	}
	return l;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
