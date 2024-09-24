/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//Time complexity: O(a∗c)
// a is number of amount and c is number of coins
// Space complexity: O(a)
var coinChange = function (coins, amount) {
	let minCoins = new Array(amount + 1).fill(amount + 1);
	minCoins[0] = 0;

	// loop until amount (inclusive)
	for (let i = 1; i <= amount; i++) {
		for (const coin of coins) {
			if (i - coin >= 0) {
				minCoins[i] = Math.min(minCoins[i], 1 + minCoins[i - coin]); // 1+ (cause taking up 1 coin of denomination c)
			}
		}
	}

	return minCoins[amount] !== amount + 1 ? minCoins[amount] : -1;
};
