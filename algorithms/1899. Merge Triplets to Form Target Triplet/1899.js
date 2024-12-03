/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function (triplets, target) {
	const good = new Set();

	for (const triplet of triplets) {
		if (triplet[0] > target[0] || triplet[1] > target[1] || triplet[2] > target[2]) {
			continue;
		}

		for (let i = 0; i < triplet.length; i++) {
			if (triplet[i] === target[i]) {
				good.add(i);
			}
		}
	}
	return good.size === 3;
};
