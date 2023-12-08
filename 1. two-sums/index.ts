/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// o(n2) solution
export const twoSum = function (nums, target) {
	let indices: number[] = []

	for (var i = 0; i < nums.length; i++) {
		let newTarget = target - nums[i]
		for (var j = i + 1; j < nums.length; j++) {
			if (nums[j] === newTarget) {
				indices = [i, j]
				break
			}
		}
	}

	return indices
}

// o(n) solution
export const twoSumOptimized = function (nums, target) {
	let hash = {}

	for (var i = 0; i < nums.length; i++) {
		const diff = target - nums[i]

		if (hash[nums[i]] !== undefined) {
			return [hash[nums[i]], i]
		} else {
			hash[diff] = i
		}
	}
}
