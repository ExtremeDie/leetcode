/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
// Time complexity: O(N)
// Space complexity: O(N)
var asteroidCollision = function (asteroids) {
	const stack = [];

	for (let asteroid of asteroids) {
		while (stack.length && asteroid < 0 && stack[stack.length - 1] > 0) {
			// collision
			const diff = asteroid + stack[stack.length - 1];
			if (diff > 0) {
				// asteroid lose
				asteroid = 0;
			} else if (diff < 0) {
				// asteroid win
				stack.pop();
			} else {
				asteroid = 0;
				stack.pop();
			}
		}

		if (asteroid) {
			stack.push(asteroid);
		}
	}

	return stack;
};
