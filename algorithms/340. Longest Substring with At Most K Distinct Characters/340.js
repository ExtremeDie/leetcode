export class Solution {
	/**
	 * @param s: A string
	 * @param k: An integer
	 * @return: An integer
	 */
	// Time Complexity: O(n)
	// Space Complexity: O(k)
	lengthOfLongestSubstringKDistinct(s, k) {
		if (s.length === 0 || k === 0) return 0;

		let l = 0;
		let r = 0;
		const map = new Map();

		let res = 0;
		while (r < s.length) {
			map.set(s[r], (map.get(s[r]) || 0) + 1);

			while (map.size > k) {
				map.set(s[l], (map.get(s[l]) || 0) - 1);
				if (map.get(s[l]) === 0) {
					map.delete(s[l]);
				}
				l++;
			}
			res = Math.max(res, r - l + 1);
			r++;
		}
		return res;
	}
}
