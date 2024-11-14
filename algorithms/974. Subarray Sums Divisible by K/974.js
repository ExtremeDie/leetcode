/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
	const prefixSum = new Map();
	prefixSum.set(0, 1); // 1 way to get 0
	let sum = 0;
	let res = 0;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];

		let remain = sum % k;
		if (remain < 0) remain += k; // Normalize to positive
		res += prefixSum.get(remain) || 0;

		prefixSum.set(remain, (prefixSum.get(remain) || 0) + 1);
	}
	return res;
};
