/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxSubArray = function (nums) {
	let maxSum = -Infinity
	let currSum = 0

	for (let i = 0; i < nums.length; i++) {
		currSum = Math.max(currSum + nums[i], nums[i])
		maxSum = Math.max(currSum, maxSum)
	}
	return maxSum
}
