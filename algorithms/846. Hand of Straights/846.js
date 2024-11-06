/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
	if (hand.length % groupSize !== 0) return false;
	const count = new Map();

	for (const each of hand) {
		count.set(each, (count.get(each) || 0) + 1);
	}

	const sortedKeys = Array.from(count.keys()).sort((a, b) => a - b);

	for (const key of sortedKeys) {
		const keyCount = count.get(key);
		if (keyCount > 0) {
			for (let i = 0; i < groupSize; i++) {
				// default 0 is important
				if ((count.get(key + i) || 0) < keyCount) return false;
				count.set(key + i, count.get(key + i) - keyCount);
			}
		}
	}
	return true;
};
