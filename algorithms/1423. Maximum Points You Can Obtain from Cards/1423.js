/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
// Time Complexity: O(k)
// Space Complexity: O(1)
var maxScore = function (cardPoints, k) {
	let l = 0;
	let r = cardPoints.length - k;

	let total = cardPoints.slice(r).reduce((acc, curr) => acc + curr, 0);
	let res = total;

	while (r < cardPoints.length) {
		total += cardPoints[l] - cardPoints[r];
		res = Math.max(res, total);
		l++;
		r++;
	}
	return res;
};
