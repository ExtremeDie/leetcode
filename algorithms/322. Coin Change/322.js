/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//Time complexity: O(a∗c)
// a is number of amount and c is number of coins
// Space complexity: O(a)
var coinChange = function (coins, amount) {
	let minCoins = new Array(amount + 1).fill(Infinity);
	minCoins[0] = 0; // 0 coin needed to make 0 amount

	// loop until amount (inclusive)
	for (let i = 1; i <= amount; i++) {
		for (const coin of coins) {
			if (i - coin >= 0) {
				minCoins[i] = Math.min(minCoins[i], 1 + minCoins[i - coin]); // 1+ (cause taking up 1 coin of denomination c)
			}
		}
	}

	// return -1 if it is default value
	return minCoins[amount] !== Infinity ? minCoins[amount] : -1;
};
