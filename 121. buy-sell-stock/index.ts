/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let maxProfit = 0
	for (var i = 0; i < prices.length; i++) {
		for (var j = i + 1; j < prices.length; j++) {
			const diff = prices[j] - prices[i]

			if (diff > maxProfit) {
				maxProfit = diff
			}
		}
	}
	return maxProfit
}

var maxProfitOptimized = function (prices) {
	let maxProfit = 0
	let stockToBuy = prices[0]

	for (let i = 1; i < prices.length; i++) {
		if (prices[i] < stockToBuy) {
			stockToBuy = prices[i]
		}

		const currentProfit = prices[i] - stockToBuy

		if (currentProfit > maxProfit) {
			maxProfit = currentProfit
		}
	}

	return maxProfit
}
