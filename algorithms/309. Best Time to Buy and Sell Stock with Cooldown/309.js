/**
 * @param {number[]} prices
 * @return {number}
 */
// Time complexity: O（n）
// Space complexity: 0（n）
var maxProfit = function (prices) {
	// state: can buy or not
	// if buy -> i + 1
	// if sell -> i + 2 // skip 1 for the cooldown

	const dp = {}; // 'i-canbuy' -> max profit

	function dfs(i, canBuy) {
		if (i >= prices.length) {
			return 0;
		}
		if (dp[`${i}-${canBuy}`] != null) {
			return dp[`${i}-${canBuy}`];
		}

		if (canBuy) {
			const buy = dfs(i + 1, !canBuy) - prices[i];
			const cooldown = dfs(i + 1, canBuy);
			dp[`${i}-${canBuy}`] = Math.max(buy, cooldown);
		} else {
			const sell = dfs(i + 2, !canBuy) + prices[i];
			const cooldown = dfs(i + 1, canBuy);
			dp[`${i}-${canBuy}`] = Math.max(sell, cooldown);
		}
		return dp[`${i}-${canBuy}`];
	}

	return dfs(0, true);
};
