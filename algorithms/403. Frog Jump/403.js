/**
 * @param {number[]} stones
 * @return {boolean}
 */
// • Time complexity: O（n^2）
// • Space complexity: O（n^2）
var canCross = function (stones) {
	// jump distances to reach position
	const dp = new Map();

	for (const stone of stones) {
		dp.set(stone, new Set());
	}
	dp.get(0).add(0);

	for (const stone of stones) {
		for (const jump of dp.get(stone)) {
			for (const jumpDistance of [jump - 1, jump, jump + 1]) {
				if (jumpDistance > 0 && dp.has(stone + jumpDistance)) {
					dp.get(stone + jumpDistance).add(jumpDistance);
				}
			}
		}
	}
	return dp.get(stones[stones.length - 1]).size > 0;
};
