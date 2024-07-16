/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// Time Complexity :  O(n)
// Space Complexity : O(1)
var characterReplacement = function (s, k) {
	const map = new Map();
	let l = 0;
	let longest = 0;
	let res = 0;

	for (let r = 0; r < s.length; r++) {
		const current = s[r];
		map.set(current, (map.get(current) || 0) + 1);
		longest = Math.max(longest, map.get(current));

		if (r - l + 1 - longest > k) {
			map.set(s[l], (map.get(s[l]) || 0) - 1);
			l++;
		}
		res = Math.max(res, r - l + 1);
	}
	return res;
};

const s = 'ABAB';
const k = 2;

console.log(characterReplacement1(s, k));
