/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
// BFS
var openLock = function (deadends, target) {
	const visited = new Set(deadends);
	if (visited.has('0000')) return -1;

	const q = [['0000', 0]]; // [lock, rotation]

	function children(lock) {
		const res = [];
		for (let i = 0; i < 4; i++) {
			let digit = parseInt(lock[i]);
			const up = (digit + 1) % 10;
			const down = (digit + 9) % 10;
			res.push(lock.slice(0, i) + up + lock.slice(i + 1));
			res.push(lock.slice(0, i) + down + lock.slice(i + 1));
		}
		return res;
	}

	while (q.length) {
		const [lock, rotation] = q.shift();
		if (lock === target) return rotation;

		for (const child of children(lock)) {
			if (!visited.has(child)) {
				visited.add(child);
				q.push([child, rotation + 1]);
			}
		}
	}
	return -1;
};
